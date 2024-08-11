import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardContentsm } from "@/components/ui/card";
import { Loader2, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"


export default function CreateInvoiceModal({ onClose, setRefreshInvoice }) {
    // client dropdown menu/selector
    const [clients, setClients] = useState([]);
    const [lineItems, setlineItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedClient, setSelectedClient] = useState('');
    const [inputTextDateDue, setInputTextDateDue] = useState('');
    const [refresh, setrefresh] = useState(false)
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [total, setTotal] = useState('');
    const [invoice, setInvoice] = useState('')
    const [userAddress, setUserAddress] = useState([])
    const [invoiceCount, setInvoiceCount] = useState(0)

    const { toast } = useToast()


    // PHASE ONE: CREATE INVOICE ID. invoice - create invoice instance and with ID for the line items and clients to be put to it
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/create/invoice', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then((response) => {
            setLoading(false);
            if (response.status === 201) {
                toast({
                    title: "Notification",
                    description: "Invoice template created, now add your details",
                })
                return response.json();
                // onClose();
            } else if (response.status === 400) {
                toast({
                    title: "Notification",
                    description: "Failed creating invoice",
                })
            } else {
                toast({
                    title: "Notification",
                    description: "Something went wrong",
                })
            }
        })
        .then(data => {
            setInvoice(data._id);
        })
        .catch((error) => {
            setLoading(false);
            toast({
                title: "Notification",
                description: "An error happened while creating a line item",
            })
        })
    }, []);

    // getting invoice count
    useEffect(() => {
        fetch(`http://localhost:4000/invoices`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 400) {
                toast({
                    title: "Notification",
                    description: "Failed getting invoice details",
                })
            } else {
                toast({
                    title: "Notification",
                    description: "Something went wrong",
                })
            }
        })
        .then(data => {
            if (data) {
                setInvoiceCount(data.count)
            }
            setLoading(false);
        })
        .catch((error) => {
            toast({
                title: "Notification",
                description: "An error happened while get a line item",
            })
        })
    }, []);

    useEffect(() => {
        setLoading(true);
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
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    // access the refresh and invoice id states
    }, []);

    // console.log({userAddress});
    const addressCreated = () => {
        return userAddress && userAddress.length > 0;
    }

    // clients
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/clients', {
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
                setClients(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const selectClientData = clients.find(client => client._id === selectedClient)
    
    let client = selectedClient;

    const handleOnClose = () => {
        deleteInvoiceById(invoice);
        onClose();
    }

    // client changed handler
    const handleClientChange = (value) => {
        setSelectedClient(value);
        toast({
            title: "Notification",
            description: "Client added to invoice",
        })
    }
    
    // dates handler
    const handleDateChange = (event) => {
        setInputTextDateDue(event.target.value);
    }

    // todays date handler
    const today = new Date();

    // description handler
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
 
    // quantity handler
    const quantityHandler = (event) => {
        const quantity = event.target.value
        setQuantity(quantity);
        setTotal(quantity * unitPrice)
    }

    // unitprice handler
    const unitPriceHandler = (event) => {
        const unitprice = event.target.value
        setUnitPrice(unitprice);
        setTotal(quantity * unitprice);
    }

    const overallTotal = (lineItems) => {
        return lineItems.reduce((sum, item) => sum + item.total, 0);
    }

    const lineItemsTotal = overallTotal(lineItems)
    // console.log('overallTotal ' + lineItemsTotal);

    // PHASE TWO: CREATE LINE ITEM AND SEND TO DB
    const handleCreateLineItem = () => {
        const data = {
            description,
            quantity,
            unitPrice,
            total,
            invoice,
        };
        setLoading(true);
        fetch('http://localhost:4000/create/lineitem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })
        .then(response => {
            setLoading(false);
            setrefresh(true);
            if (response.status === 201) {
                toast({
                    title: "Notification",
                    description: "Line item added",
                })
                
                return response.json();
                // onClose();
            } else if (response.status === 400) {
                toast({
                    title: "Notification",
                    description: "Failed creating invoice",
                })
            } else {
                toast({
                    title: "Notification",
                    description: "Something went wrong",
                })
            }
        })
        .catch((error) => {
            setLoading(false);
            toast({
                title: "Notification",
                description: "An error happened while creating a line item",
            })
            console.log(error);
        })
    };

    // PHASE THREE: REFRESH AND GET LINE ITEMS ASSOCIATED WITH invoiceID
    useEffect(() => {
        // only refresh if its true
        if (!refresh) return;
        setLoading(true);
        fetch(`http://localhost:4000/lineitems/invoice/${invoice}`, {
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
                toast({
                    title: "Notification",
                    description: "Line item added",
                })
                setLoading(false);
                setrefresh(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setrefresh(false);
            });
    // access the refresh and invoice id states
    }, [refresh, invoice]);

    // console.log({lineItems});

    

    const deleteLineItemById = (id) => {
        setLoading(true);
        fetch(`http://localhost:4000/lineitems/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then((response) => {
                setLoading(false);
                if (response.status === 200 || response.status === 204) {
                    toast({
                        title: "Notification",
                        description: "Line item deleted",
                        })
                    setlineItems(lineItems.filter(lineItem => lineItem._id !== id));
                    // return response.json();
                } else if (response.status === 400) {
                    toast({
                        title: "Notification",
                        description: "Failed deleting line item",
                        })
                } else {
                    toast({
                        title: "Notification",
                        description: "Something went wrong",
                        })
                    
                }
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const deleteInvoiceById = (id) => {
        setLoading(true);
        fetch(`http://localhost:4000/invoices/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then((response) => {
                setLoading(false);
                if (response.status === 200 || response.status === 204) {
                    console.log('invoice deleted');
                    toast({
                        title: "Notification",
                        description: "Invoice template is not completed, it hasn't been saved",
                        })
                    setInvoices(invoices.filter(invoice => invoice._id !== id));
                    // return response.json();
                } else if (response.status === 400) {
                    toast({
                        title: "Notification",
                        description: "Failed deleting invoice",
                        })
                } else {
                    toast({
                        title: "Notification",
                        description: "Something went wrong",
                        })
                    
                }
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const navigate = useNavigate();

    // console.log('bussy ' + (selectClientData ? selectClientData.businessName : 'No client selected'));

    // let clientName = selectClientData.businessName;

    // console.log({client});
    // console.log({lineItem});
    // console.log({clientName});
    // console.log({lineItemsTotal});

    // PHASE FOUR: EDIT INVOICE WITH LINE ITEMS AND SAVE
    const editInoivceWithClientLineItems = () => {
        if (!lineItems || !selectedClient) {
            toast({
                title: "Notification",
                description: "Make sure you fill the required fields",
                })
            return;
        }

        setLoading(true);

        const data = {
            client: selectedClient,
            lineItems: lineItems.map(item => item._id),
            clientName: selectClientData.businessName,
            lineItemsTotal: lineItemsTotal,
            dueDate: inputTextDateDue,
            invoiceCount: invoiceCount
        };
        
        fetch(`http://localhost:4000/invoices/${invoice}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            // setLoading(false);
            if (response.status === 200) {
                // console.log('invoice saved');
                // console.log('here are the line items' + lineItems)
                // // setlineItems([])
                toast({
                    title: "Notification",
                    description: "Invoice saved.",
                })
                setRefreshInvoice(true);
                
                navigate('/dashboard');
                onClose();
                
            } else {
                toast({
                    title: "Notification",
                    description: "Invoice failed to save.",
                    })
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setlineItems([])
            setLoading();
            onClose();
        })
    }

    let gst = lineItemsTotal * 0.1;

    let gstTotal = lineItemsTotal * 1.1;

    return (
        <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={handleOnClose} >
            <ScrollArea className="h-[calc(100vh-4rem)] flex justify-center rounded-lg w-full mx-8 sm:mx-0 max-w-[1279px]" >
                <div>
                    <Card className="w-full h-auto p-2 flex sm:flex-col md:flex-col lg:flex-row 2lx:flex-row" onClick={(event) => event.stopPropagation()}>
                        {/* left */}
                        <div className="flex flex-col justify-between sm:w-full md:w-full lg:w-2/5 xl:w-1/4 xl:flex-grow 2xl:w-1/4 2xl:flex-grow">
                            <div>
                                <CardHeader className="flex flex-col flex-grow gap-8">
                                    <div className="flex justify-between ">
                                        <div className="flex flex-col w-full gap-2">
                                            <div className="flex justify-between flex-row w-full">
                                                <CardTitle className="flex-grow">Invoice details</CardTitle>
                                                <Button className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden" variant="outline" size="icon" onClick={handleOnClose}>
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <CardDescription>Add client details below</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-row gap-8">
                                    <form className="w-full">
                                        <div className="grid items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="Date due">Date due</Label>
                                                <Input 
                                                    id="name" 
                                                    placeholder="Date due" 
                                                    value={inputTextDateDue}
                                                    onChange={handleDateChange}/>
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="Select client">Select client</Label>
                                                <Select onValueChange={handleClientChange}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a client">{selectedClient.businessName}</SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Clients</SelectLabel>
                                                            {clients.map((client) => (
                                                                <SelectItem key={client._id} value={client._id}>
                                                                    {client.businessName}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex mt-16 flex-col gap-2 space-y-1.5">
                                                <Label htmlFor="Line item">Line item</Label>
                                                <Input 
                                                    id="Description" 
                                                    placeholder="Description"
                                                    value={description}
                                                    onChange={handleDescriptionChange} />
                                                <Input 
                                                    type="number"
                                                    id="quantity" 
                                                    placeholder="quantity"
                                                    value={quantity}
                                                    onChange={quantityHandler} />
                                                <Input 
                                                    type="number"
                                                    id="Unit price" 
                                                    placeholder="Unit price"
                                                    value={unitPrice}
                                                    onChange={unitPriceHandler} />
                                                
                                            </div>
                                            <div className='mt-4'>
                                                <Button className="w-full items-center" onClick={handleCreateLineItem} disabled={loading}>{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Create line item'}</Button>
                                                
                                            </div>
                                        </div>
                                        
                                    </form>
                                </CardContent>
                            </div>
                            <CardFooter className="flex flex-row gap-8">
                                <div className="flex-1">
                                    <div className="flex flex-col gap-4">
                                        {/* <Button variant="secondary" className="items-center" onClick={onClose}>Close</Button> */}
                                        
                                    </div>
                                </div>
                            </CardFooter>
                        </div>
                        {/* right */}
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
                                                    <p>{today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()}</p>
                                                </div>
                                                <div className="flex justify-between flex-row w-full">
                                                    <p className="font-bold">Due date</p>
                                                    {/* <p>{inputTextDateDue}</p> */}
                                                    {inputTextDateDue ? (
                                                        <>
                                                        <p>{inputTextDateDue}</p>
                                                        </>
                                                    ) :(
                                                        <p>Type in a date</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="w-full">   
                                                    <p className="font-bold">Invoice number</p>        
                                                </div>
                                                <div>   
                                                    <p>{invoiceCount}</p>        
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="w-full">
                                                
                                                    <p className="font-bold">To</p>
                                                    
                                                    {selectedClient ? (
                                                        <>
                                                            <p>{selectClientData.businessName}</p>
                                                            <p>{selectClientData.businessAbn}</p>
                                                            <p>{selectClientData.businessAddress}</p>
                                                            <p>{selectClientData.businessPhoneNumber}</p>
                                                        </>
                                                    ) : (
                                                        <p>
                                                            Select a client
                                                        </p>
                                                    )}
                                                        
                                                    
                                                </div>
                                                <div className="w-full">
                                                    <p className="font-bold">From</p>
                                                    {addressCreated() ? (
                                                        <>
                                                            <p>{userAddress[0].businessName}</p>
                                                            <p>{userAddress[0].businessAbn}</p>
                                                            <p>{userAddress[0].businessAddress}</p>
                                                            <p>{userAddress[0].businessPhoneNumber}</p>
                                                        </>
                                                        
                                                    ) : (
                                                        <p>
                                                            Add your address in settings
                                                        </p>
                                                        
                                                    )}
                                                    
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <Card className="my-4">
                                        <Table className="table-auto">
                                            <TableHeader>
                                                <TableRow>
                                                <TableHead className="">Description</TableHead>
                                                <TableHead className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center" >Quantity</TableHead>
                                                <TableHead className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">Unit price</TableHead>
                                                <TableHead className="text-center">Delete</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                            {lineItems.length > 0 ? (
                                                lineItems.map((lineItem, index) => (
                                                    <TableRow key={lineItem._id} >
                                                        <TableCell className="font-medium">{lineItem.description}</TableCell>
                                                        <TableCell className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">{lineItem.quantity}</TableCell>
                                                        <TableCell className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">{lineItem.unitPrice}</TableCell>
                                                        <TableCell>
                                                            <div className="flex justify-center flex-row gap-2">   
                                                                {/* <FilePenLine className="h-4 w-4" /> */}
                                                                {/* <File className="h-4 w-4" /> */}
                                                                <Trash2 className=" h-4 w-4" onClick={() => deleteLineItemById(lineItem._id)} />
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right">{lineItem.total}</TableCell>
                                                    </TableRow>
                                                ))
                                            ) : (
                                                <TableRow >
                                                <TableCell className="font-medium">Placeholder</TableCell>
                                                <TableCell className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">0</TableCell>
                                                <TableCell className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">0</TableCell>
                                                <TableCell>
                                                    <div className="flex justify-center flex-row gap-2">   
                                                        <Trash2 className=" h-4 w-4"/>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right">$00.00</TableCell>
                                            </TableRow>
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
                                                        <TableCell className="text-right">${lineItemsTotal.toFixed(2)}</TableCell>
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
                                        <Button className="w-full items-center" onClick={editInoivceWithClientLineItems} disabled={loading}>{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Save invoice'}</Button>
                                    </div>
                                </div>
                        </CardFooter>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>    
    ) 

}