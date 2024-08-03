import { Button } from "../ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardContentsm
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
// import Modal from "../Modal";
import { useState } from 'react';
import { X } from "lucide-react";
import { FilePenLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';


export default function Dashboard() {
    const [showModalClient, setShowModalClient] = useState(false);


    const invoices = [
        {
          invoice: "INV001",
          paymentStatus: "Paid",
          totalAmount: "$250.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV002",
          paymentStatus: "Pending",
          totalAmount: "$150.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV003",
          paymentStatus: "Unpaid",
          totalAmount: "$350.00",
          paymentMethod: "Bank Transfer",
        },
        {
          invoice: "INV004",
          paymentStatus: "Paid",
          totalAmount: "$450.00",
          paymentMethod: "Credit Card",
        },
        {
          invoice: "INV005",
          paymentStatus: "Paid",
          totalAmount: "$550.00",
          paymentMethod: "PayPal",
        },
        {
          invoice: "INV006",
          paymentStatus: "Pending",
          totalAmount: "$200.00",
          paymentMethod: "Bank Transfer",
        },

      ]


    return(
        <Tabs defaultValue="Overview" className="w-full md:w-3/4 lg:w-3/4 p-4 flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="flex justify-between gap-4">
                <Button onClick={() => setShowModalClient(true)} variant="secondary" className="flex-1">Create Client</Button>
                <Button className="flex-1">Create invoice</Button>
                {showModalClient ? (
                    <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowModalClient(false)}>
                        <Card className="w-full md:w-2/4 lg:w-2/4 p-4 flex flex-col gap-8">
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle>Create client</CardTitle>
                                    <Button variant="outline" size="icon">
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
            </div>
            <TabsList className="grid w-full grid-cols-3 ">
                <TabsTrigger value="Overview">Overview</TabsTrigger>
                <TabsTrigger value="Clients">Clients</TabsTrigger>
                <TabsTrigger value="Settings">Settings</TabsTrigger>
            </TabsList>
            <div className="flex flex-row justify-center justify-between gap-4 w-full">
                <Card className="flex-1  w-full md:w-2/4 lg:w-2/4 px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Total revenue</p>
                        <h3 className="font-bold text-2xl">$45,231.89</h3>
                        <p className="text-xs text-slate-600">+20.1% from last month</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full md:w-2/4 lg:w-2/4 px-2 py-4 flex-col">  
                    <CardContentsm>
                        <p className="text-xs text-slate-600">GST</p>
                        <h3 className="font-bold text-2xl">+$2350</h3>
                        <p className="text-xs text-slate-600">10% of each invoice</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full md:w-2/4 lg:w-2/4 px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Income tax</p>
                        <h3 className="font-bold text-2xl">+$12,234</h3>
                        <p className="text-xs text-slate-600">A rough estimate</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full md:w-2/4 lg:w-2/4 px-2 py-4 flex-col">
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
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TabsContent>
            <TabsContent value="Clients">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
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
