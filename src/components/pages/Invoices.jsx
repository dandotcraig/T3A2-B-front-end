import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableFooter, TableRow } from "../ui/table";
// import { Link } from "react-router-dom";
import Spinner from '../modules/Spinner'
import { FilePenLine, IdCard, Trash2 } from "lucide-react";

export default function Invoices({ refreshInvoice }) {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);

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
    }, [refreshInvoice]);

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

    return(
        <>
            {loading ? (
                <Spinner />
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Client</TableHead>
                            <TableHead>Modify</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={invoice._id}>
                                <TableCell className="font-medium">{invoice.createdAt}</TableCell>
                                <TableCell></TableCell>
                                <TableCell>{invoice.client}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row gap-2">   
                                        <FilePenLine className="h-4 w-4" />
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
                            <TableCell></TableCell>
                            <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            )}
        </>
    )
};
