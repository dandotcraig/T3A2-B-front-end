import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardContentsm } from "@/components/ui/card";
import { X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilePenLine, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";



export default function CreateInvoiceModal({ onClose }) {
    // client dropdown menu/selector
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedClient, setSelectedClient] = useState('');
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/clients', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setClients(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleClientChange = (value) => {
        setSelectedClient(value);
    }


    return (
        <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={onClose} >
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
                                                <Button className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden" variant="outline" size="icon" onClick={onClose}>
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
                                                <Input id="name" placeholder="Date due" />
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
                                            <div className="flex flex-col gap-2 space-y-1.5">
                                                <Label htmlFor="Line item">Line item</Label>
                                                <Input id="Description" placeholder="Description" />
                                                <Input id="Quantity" placeholder="Quantity" />
                                                <Input id="Unit price" placeholder="Unit price" />
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                            </div>
                            <CardFooter className="flex flex-row gap-8">
                                <div className="flex-1">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="secondary" className="items-center" onClick={onClose}>Close</Button>
                                        <Button className="items-center">Save</Button>
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
                                        <Button className="sm:hidden md:hidden lg:flex xl:flex" variant="outline" size="icon" onClick={onClose}>
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
                                                    <p>13/06/2024</p>
                                                </div>
                                                <div className="flex justify-between flex-row w-full">
                                                    <p className="font-bold">Due date</p>
                                                    <p>13/06/2024</p>
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="w-full">   
                                                    <p className="font-bold">Invoice number</p>        
                                                </div>
                                                <div>   
                                                    <p>1</p>        
                                                </div>
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col lg:flex-row gap-4">
                                                <div className="w-full">
                                                    <p className="font-bold">To</p>
                                                    <p>Liam Johnson</p>
                                                    <p>ABN: 010242492349234</p>
                                                    <p>1234 Main St.</p>
                                                    <p>Anytown, CA</p>
                                                    <p>12345</p>
                                                </div>
                                                <div className="w-full">
                                                    <p className="font-bold">From</p>
                                                    <p>Liam Johnson</p>
                                                    <p>ABN: 010242492349234</p>
                                                    <p>1234 Main St.</p>
                                                    <p>Anytown, CA</p>
                                                    <p>12345</p>
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
                                                <TableHead >Delete</TableHead>
                                                <TableHead className="text-right">Amount</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow >
                                                    <TableCell className="font-medium">Description 1</TableCell>
                                                    <TableCell className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">5</TableCell>
                                                    <TableCell className="sm:hidden md:table-cell lg:hidden xl:table-cell text-center">$50</TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-row gap-2">   
                                                            <FilePenLine className="h-4 w-4" />
                                                            <Trash2 className="h-4 w-4" />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-right">$249</TableCell>
                                                </TableRow>
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
                                                        <TableCell className="text-right">$100</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-medium">GST</TableCell>
                                                        <TableCell className="text-right">$10</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell className="font-medium">Total</TableCell>
                                                        <TableCell className="text-right">$10</TableCell>
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
                                        <Button variant="secondary" className="w-full items-center" onClick={onClose}>Close</Button>
                                        <Button className="w-full items-center">Save</Button>
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