import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Spinner from '../modules/Spinner';


export default function ViewInvoiceModal({ onClose, setRefreshInvoice, invoiceId }) {
    // client dropdown menu/selector
    const [loading, setLoading] = useState(true);
    const [loadingClients, setLoadingClients] = useState(true);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingLineItems, setLoadingLineItems] = useState(true);
    // const [invoice, setInvoice] = useState('')
    const [clients, setClients] = useState('');
    const [clientDetails, setClientsDetails] = useState('');
    const [lineItems, setlineItems] = useState([]);
    const [total, setTotal] = useState('');
    const [invoice, setInvoice] = useState('')
    const [userAddress, setUserAddress] = useState([])
    const [dateChange, setDateChange] = useState('')
    const [dateCreated, setDateCreated] = useState('')
    const [invoiceNumber, setInvoiceNumber] = useState('')
  
    // console.log(invoiceId);
    useEffect(() => {
        fetch(`http://localhost:4000/invoices/${invoiceId}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then((response) => {
            
            if (response.status === 200) {
                // alert('Success creating invoice')
                return response.json();
                // onClose();
            } else if (response.status === 400) {
                alert('Failed creating invoice')
            } else {
                alert('Something went wrong')
            }
        })
        .then(data => {
            setInvoice(data);
            setClients(data.invoice.client);
            setlineItems(data.invoice.lineItems);
            setTotal(data.invoice.lineItemsTotal);
            setDateChange(data.invoice.dueDate);
            setDateCreated(data.invoice.createdAt)
            setInvoiceNumber(data.invoice.invoiceCount)
            console.log(data);
            setLoading(false);
        })
        .catch((error) => {
            
            alert('An error happened while creating a line item')
            console.log(error);
        })
    }, []);
    // console.log('outside use effect ' + invoice + '1');
    console.log(clients);
    console.log(lineItems);
    console.log(total);

    useEffect(() => {

        fetch(`http://localhost:4000/user`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(response => 
                response.json())
            .then(data => {
                setUserAddress(data.data);
                console.log('user addy' + data.data);
                setLoadingUser(false);
            })
            .catch((error) => {
                console.log(error);
                setLoadingUser(false);
            });
    // access the refresh and invoice id states
    }, []);

    console.log(userAddress);

    // clients
    useEffect(() => {
        fetch(`http://localhost:4000/clients/${clients}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then((response) => {
            
            if (response.status === 200) {
                
                // alert('Success creating invoice')
                return response.json();
                
                // onClose();
            } else if (response.status === 400) {
                alert('Failed creating invoice')
                
            } else {
                alert('Something went wrong')
            }
        })
        // setLoading(false)
        .then(data => {
                setClientsDetails(data.data);
                setLoadingClients(false);
            })
            .catch((error) => {
                console.log(error);
                setLoadingClients(false);
            });
    }, []);

    useEffect(() => {
        // only refresh if its true
        // if (!refresh) return;
        fetch(`http://localhost:4000/lineitems/invoice/${invoiceId}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(response => 
                response.json())
            .then(data => {
                setlineItems(data.data);
                // console.log("client" + data.data);
                setLoadingLineItems(false);
                // setrefresh(false);
            })
            .catch((error) => {
                console.log(error);
                setLoadingLineItems(false);
                // setrefresh(false);
            });
    // access the refresh and invoice id states
    }, []);

    console.log(clientDetails);

    const handleOnClose = () => {
        onClose();
    }

    console.log(dateCreated);
    const formatDate = (dateCreated) => {
        const date = new Date(dateCreated);
        return date.toLocaleDateString('en-GB', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        });
    };

    const today = new Date();

    let gst = total * 0.1;

    let gstTotal = total * 1.1;
    
    return (
        <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={handleOnClose} >
            <ScrollArea className="h-[calc(100vh-4rem)] flex justify-center rounded-lg w-full mx-8 sm:mx-0 max-w-[1279px]" >
                <div>
                    <Card className="w-full h-auto p-2 flex sm:flex-col md:flex-col lg:flex-row 2lx:flex-row" onClick={(event) => event.stopPropagation()}>
                    {loading ? (
                        <Spinner />
                    ) : (
                    <>
                        <div className="flex flex-col sm:w-full md:w-full lg:w-3/5 xl:w-3/4 xl:flex-grow 2xl:w-3/4 2xl:flex-grow">
                            <CardHeader className="flex flex-col gap-8 w-full">
                                <div className="w-full justify-between">
                                    <div className="flex justify-between flex-row">
                                        <CardTitle>Invoice</CardTitle>
                                        <Button className="sm:hidden md:hidden lg:flex xl:flex" variant="outline" size="icon" onClick={handleOnClose}>
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    
                                </div>
                            </CardHeader>
                            <CardContent className="flex  flex-col gap-8 w-full">
                                <div className="w-full">
                                    <div className=" flex justify-between flex-row gap-8">
                                        <div className="flex-1 grid items-center gap-4">
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="flex justify-between flex-row w-full">
                                                    <p className="font-bold">Invoice date</p>
                                                    {/* <p>{today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()}</p> */}
                                                    <p>{formatDate(dateCreated)}</p>
                                                </div>
                                                <div className="flex justify-between flex-row w-full">
                                                    <p className="font-bold">Due date</p>
                                                    
                                                    <p>{dateChange}</p>
                                                
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="w-1/4">   
                                                    <p className="font-bold">Invoice number</p>        
                                                </div>
                                                <div>   
                                                    <p>{invoiceNumber}</p>        
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="w-full">
                                                
                                                {loadingClients ? (
                                                    <Spinner />
                                                ) : (
                                                    <>
                                                        <p className="font-bold">To</p>
                                                        <p>{clientDetails[0].businessName}</p>
                                                        <p>{clientDetails[0].businessAbn}</p>
                                                        <p>{clientDetails[0].businessAddress}</p>
                                                        <p>{clientDetails[0].businessPhoneNumber}</p>
                                                    </>    
                                                )
                                                }
                                                
                                                </div>
                                                <div className="w-full">
                                                    <p className="font-bold">From</p>
                                                {loadingUser ? (
                                                    <Spinner />
                                                ) : (
                                                    <>
                                                        <p>{userAddress[0]?.businessName}</p>
                                                        <p>{userAddress[0]?.businessAbn}</p>
                                                        <p>{userAddress[0]?.businessAddress}</p>
                                                        <p>{userAddress[0]?.businessPhoneNumber}</p>
                                                    </>    
                                                )
                                                }
                                                        
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <Card className="my-4">
                                        <Table className="table-auto">
                                            <TableHeader>
                                                <TableRow>
                                                <TableHead className="">Description</TableHead>
                                                <TableHead className="sm:hidden md:table-cell lg:table-cell xl:table-cell text-center" >Quantity</TableHead>
                                                <TableHead className="sm:hidden md:table-cell lg:table-cell xl:table-cell text-center">Unit price</TableHead>
                    
                                                <TableHead className="text-right">Amount</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                            {loadingLineItems ? (
                                                <Spinner />
                                            ) : (
                                                <>
                                                {lineItems.map((lineItem, index) => (
                                                    <TableRow key={lineItem._id} >
                                                        <TableCell className="font-medium">{lineItem.description}</TableCell>
                                                        <TableCell className="sm:hidden md:table-cell lg:table-cell xl:table-cell text-center">{lineItem.quantity}</TableCell>
                                                        <TableCell className="sm:hidden md:table-cell lg:table-cell xl:table-cell text-center">{lineItem.unitPrice}</TableCell>
                                                
                                                        <TableCell className="text-right">{lineItem.total}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </>
                                            )}
                                            </TableBody>
                                                
                                        </Table>
                                    </Card>     
                                    <div className="flex justify-between flex-row gap-8">
                                        <div className="flex-1 sm:hidden md:flex lg:flex xl:flex"></div>  
                                        <Card className="flex-1 justify-items-end">
                                            <Table >
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-medium">Subtotal</TableCell>
                                                        <TableCell className="text-right">${total.toFixed(2)}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-medium">GST</TableCell>
                                                        <TableCell className="text-right">${gst.toFixed(2)}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-medium">Total</TableCell>
                                                        <TableCell className="text-right">${gstTotal.toFixed(2)}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Card>    
                                    </div>     
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-row justify-between gap-8">
                                <div className="flex-1">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="secondary" className="w-full items-center" onClick={handleOnClose}>Close</Button>
                                        
                                    </div>
                                </div>
                            </CardFooter>
                        </div>
                    </>
                    )}
                    </Card>
                
                </div>
            </ScrollArea>
        </div>    
    ) 

}
