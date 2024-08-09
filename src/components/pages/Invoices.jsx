import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableFooter, TableRow } from "../ui/table";
// import { Link } from "react-router-dom";
import Spinner from '../modules/Spinner'
import { FilePenLine, IdCard, Trash2 } from "lucide-react";
import EditInvoiceModal from "../modals/EditInvoiceModal";

export default function Invoices() {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModalEditInvoice, setShowModalEditInvoice] = useState(false);
    const [editedInvoiceId, seteditedInvoiceId] = useState(null)

    

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/invoices', {
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

    console.log({invoices});

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
                    setInvoices(invoices.filter(invoice => invoice._id !== id));
                    // return response.json();
                } else if (response.status === 400) {
                    alert('Failed deleting invoice')
                } else {
                    alert('Something went wrong')
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
            {loading ? (
                <Spinner />
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow className="w-full">
                            <TableHead className="w-[100px]">Date</TableHead>
                            {/* <TableHead>Description</TableHead> */}
                            <TableHead className="text-center">Client</TableHead>
                            <TableHead className="text-center">Modify</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={invoice._id}>
                                <TableCell className="font-medium">{formatDate(invoice.createdAt)}</TableCell>
                                {/* <TableCell>{invoice.client}</TableCell> */}
                                <TableCell className="text-center">{invoice.businessName}</TableCell>
                                <TableCell >
                                    <div className="flex justify-center flex-row gap-2">   
                                        <FilePenLine className="h-4 w-4" onClick={() => openEditFunction(invoice._id)} />
                                        
                                        <Trash2 className="h-4 w-4" onClick={() => deleteInvoiceById(invoice._id)} />
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">test</TableCell>
                            </TableRow> 
                        ))}
                        
                    </TableBody>
                    <TableFooter>
                        <TableRow >
                            <TableCell>Total</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>

                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            )}
            {showModalEditInvoice && <EditInvoiceModal invoiceId={editedInvoiceId} onClose={() => setShowModalEditInvoice(false)}/>}
        </>
    )
};
