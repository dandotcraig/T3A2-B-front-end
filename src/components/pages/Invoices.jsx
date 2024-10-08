import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableFooter, TableRow } from "../ui/table";
// import { Link } from "react-router-dom";
import Spinner from '../modules/Spinner'
import { File, Trash2 } from "lucide-react";
import ViewInvoiceModal from "../modals/ViewInvoiceModal";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "../ui/toaster";

export default function Invoices({ setTotal }) {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModalEditInvoice, setShowModalEditInvoice] = useState(false);
    const [editedInvoiceId, seteditedInvoiceId] = useState(null)
    const [showModalViewInvoice, setShowModalViewInvoice] = useState(false);

    const { toast } = useToast()
    
    useEffect(() => {
        setLoading(true);
        fetch('https://t3a2-b-server.onrender.com/invoices', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setInvoices(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const calculateTotalInvoices = (invoices) => {
        return invoices.reduce((sum, invoice) => (invoice.lineItemsTotal || 0), 0)
    }

    const totalInvoice = calculateTotalInvoices(invoices);

    setTotal(totalInvoice);

    const deleteInvoiceById = (id) => {
        setLoading(true);
        fetch(`https://t3a2-b-server.onrender.com/invoices/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then((response) => {
                setLoading(false);
                if (response.status === 200 || response.status === 204) {
                    toast({
                        title: "Notification",
                        description: "Invoice deleted",
                      })
                    setInvoices(invoices.filter(invoice => invoice._id !== id));
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

    const openEditFunction = (id) => {
        seteditedInvoiceId(id);
        setShowModalEditInvoice(true);
    }

    const formatDate = (data) => {
        const date = new Date(data);
        return date.toLocaleDateString('en-US', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        });
    };

    return(
        <>
        <Toaster />
            {loading ? (
                <Spinner />
            ) : (
                <>
                
                <Table>
                    <TableHeader>
                        <TableRow className="w-full">
                            <TableHead className="w-[50px]">Date</TableHead>
                            {/* <TableHead>Description</TableHead> */}
                            <TableHead className="text-center">Client</TableHead>
                            <TableHead className="text-center">Modify</TableHead>
                            <TableHead className="w-[50px] text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices.length > 0 ? (
                        
                        
                            invoices.map((invoice, index) => (
                                <TableRow key={invoice._id}>
                                    <TableCell className="font-medium">{formatDate(invoice.createdAt)}</TableCell>
                                    {/* <TableCell>{invoice.client}</TableCell> */}
                                    <TableCell className="text-center">{invoice.clientName}</TableCell>
                                    <TableCell >
                                        <div className="flex justify-center flex-row gap-2">   
                                            {/* <FilePenLine className="h-4 w-4" onClick={() => openEditFunction(invoice._id)} /> */}
                                            
                                            <File className="h-4 w-4" onClick={() => {
                                                toast({
                                                    title: "Notification",
                                                    description: "Here is your invoice",
                                                  })
                                                setShowModalViewInvoice(invoice._id)}} />
                                            <Trash2 className="h-4 w-4" onClick={() => deleteInvoiceById(invoice._id)} />
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">{invoice.lineItemsTotal}</TableCell>
                                </TableRow> 
                            ))
                    ) : (
                        <TableRow >
                            <TableCell className="font-medium">00/00/00</TableCell>
                            {/* <TableCell>{invoice.client}</TableCell> */}
                            <TableCell className="text-center">Placeholder</TableCell>
                            <TableCell >
                                <div className="flex justify-center flex-row gap-2">   
                                
                                    
                                    <File className="h-4 w-4"  />
                                    <Trash2 className="h-4 w-4" />
                                </div>
                            </TableCell>
                            <TableCell className="text-right">$00.00</TableCell>
                        </TableRow> 
                    )}
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                            <TableCell>Total</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>

                            <TableCell className="text-right">${totalInvoice.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
                </>
            )}
            {/* {showModalEditInvoice && <EditInvoiceModal invoiceId={editedInvoiceId} onClose={() => setShowModalEditInvoice(false)}/>} */}
            {showModalViewInvoice && <ViewInvoiceModal invoiceId={showModalViewInvoice} onClose={() => setShowModalViewInvoice(false)}/>}
        </>
    )
};
