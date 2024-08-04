import { Button } from "../ui/button";
import { Tabs, TabsContent,TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardContentsm } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { X } from "lucide-react";
import { FilePenLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Dashboard() {
    const [showModalClient, setShowModalClient] = useState(false);
    const [showModalInvoice, setShowModalInvoice] = useState(false);

    
    return(
        <Tabs defaultValue="Overview" className="w-full p-4 flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="flex justify-between gap-4">
                <Button onClick={() => setShowModalClient(true)} variant="secondary" className="flex-1">Create Client</Button>
                <Button onClick={() => setShowModalInvoice(true)} className="flex-1">Create invoice</Button>
                {showModalClient ? (
                    <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowModalClient(false)}>
                        <Card className="h-[calc(100vh-4rem)] w-full p-4 flex flex-col gap-8 mx-8 sm:mx-0" onClick={(stopClose) => stopClose.stopPropagation()}>
                            <CardHeader>
                                <div className="flex justify-between flex-row">
                                    <CardTitle>Invoice</CardTitle>
                                    <Button variant="outline" size="icon" onClick={() => setShowModalClient(false)}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardDescription>Add client details below</CardDescription>
                            </CardHeader>
                                <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="Business name">Business name</Label>
                                            <Input id="name" placeholder=" Add business name" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="Business ABN">Business ABN</Label>
                                            <Input id="name" placeholder=" Add business ABN" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="Business address">Business address</Label>
                                            <Input id="name" placeholder=" Add business address" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="Business email">Business email</Label>
                                            <Input id="name" placeholder=" Add business email" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="Business phone number">Business phone number</Label>
                                            <Input id="name" placeholder=" Add business phone number" />
                                        </div>
                                    </div>
                                </form>
                                </CardContent>
                            <CardFooter className="flex flex-col justify-between gap-4">
                                <Button variant="secondary" className="w-full items-center" onClick={() => setShowModalClient(false)}>Close</Button>
                                <Button className="w-full items-center" onClick={() => setShowModalClient(false)}>Save</Button>
                            </CardFooter>
                        </Card>
                    </div>    
                ) : null}
                {showModalInvoice ? (
                    <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowModalInvoice(false)}>
                        <ScrollArea className="h-[calc(100vh-4rem)] flex justify-center rounded-lg w-full mx-8 sm:mx-0" >
                            <div>
                                <Card className="w-full h-auto p-2 flex sm:flex-col md:flex-col lg:flex-row 2lx:flex-row" onClick={(stopClose) => stopClose.stopPropagation()}>
                                    {/* left */}
                                    <div className="flex flex-col justify-between sm:w-full md:w-full lg:w-2/5 xl:w-1/4 xl:flex-grow 2xl:w-1/4 2xl:flex-grow">
                                        <div>
                                            <CardHeader className="flex flex-col flex-grow gap-8">
                                                <div className="flex justify-between ">
                                                    <div className="flex flex-col w-full gap-2">
                                                        <div className="flex justify-between flex-row w-full">
                                                            <CardTitle className="flex-grow">Invoice details</CardTitle>
                                                            <Button className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden" variant="outline" size="icon" onClick={() => setShowModalInvoice(false)}>
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
                                                            <Input id="name" placeholder="Select client" />
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
                                                    <Button variant="secondary" className="items-center" onClick={() => setShowModalInvoice(false)}>Close</Button>
                                                    <Button className="items-center" onClick={() => setShowModalInvoice(false)}>Save</Button>
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
                                                    <Button className="sm:hidden md:hidden lg:flex xl:flex" variant="outline" size="icon" onClick={() => setShowModalInvoice(false)}>
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
                                                    <Button variant="secondary" className="w-full items-center" onClick={() => setShowModalInvoice(false)}>Close</Button>
                                                    <Button className="w-full items-center" onClick={() => setShowModalInvoice(false)}>Save</Button>
                                                </div>
                                            </div>
                                    </CardFooter>
                                    </div>
                                </Card>
                            </div>
                        </ScrollArea>
                    </div>    
                ) : null}
            </div>
            <TabsList className="grid w-full grid-cols-3 ">
                <TabsTrigger value="Overview">Overview</TabsTrigger>
                <TabsTrigger value="Clients">Clients</TabsTrigger>
                <TabsTrigger value="Settings">Settings</TabsTrigger>
            </TabsList>
            <div className="flex sm:flex-col md:flex-row lg:flex-row xlg:flex-row justify-center justify-between gap-4 w-full">
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Total revenue</p>
                        <h3 className="font-bold text-2xl">$45,231.89</h3>
                        <p className="text-xs text-slate-600">+20.1% from last month</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">  
                    <CardContentsm>
                        <p className="text-xs text-slate-600">GST</p>
                        <h3 className="font-bold text-2xl">+$2350</h3>
                        <p className="text-xs text-slate-600">10% of each invoice</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Income tax</p>
                        <h3 className="font-bold text-2xl">+$12,234</h3>
                        <p className="text-xs text-slate-600">A rough estimate</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Number of invoices to date</p>
                        <h3 className="font-bold text-2xl">+20</h3>
                        <p className="text-xs text-slate-600">Total number of invoices</p>
                    </CardContentsm>
                </Card>
            </div>
            
            <TabsContent value="Overview">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead className="text-right">Modify</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium"></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-right"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                            <TableCell>Total</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TabsContent>
            <TabsContent value="Clients">
                <Table >
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Number</TableHead>
                            <TableHead>Modify</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>test</TableCell>
                            <TableCell>test</TableCell>
                            <TableCell>test</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TabsContent>
            <TabsContent value="Settings">
                <Card>
                <CardHeader>
                    <CardTitle>Your details</CardTitle>
                    <CardDescription>Add your details below</CardDescription>
                </CardHeader>
                    <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business name">Business name</Label>
                                <Input id="name" placeholder=" Add business name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business ABN">Business ABN</Label>
                                <Input id="name" placeholder=" Add business ABN" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business address">Business address</Label>
                                <Input id="name" placeholder=" Add business address" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business email">Business email</Label>
                                <Input id="name" placeholder=" Add business email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business phone number">Business phone number</Label>
                                <Input id="name" placeholder=" Add business phone number" />
                            </div>
                        </div>
                    </form>
                    </CardContent>
                <CardFooter className="flex flex-col justify-between gap-4">
                    
                    <Link to="/" className="w-full"><Button variant="destructive" className="w-full items-center">Delete your account</Button></Link>
                    <Link to="/" className="w-full"><Button className="w-full items-center">Save</Button></Link>
                </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
};
