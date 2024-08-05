import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableFooter, TableRow } from "../ui/table";
// import { Link } from "react-router-dom";
import Spinner from '../modules/Spinner'
import { FilePenLine, Trash2 } from "lucide-react";

export default function Invoices() {
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
        // setLoading(true);
        // Axios
        //     .get('http://localhost:4000/invoices')
        //     .then((response) => {
        //         setInvoices(response.data.data);
        //         setLoading(false);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         setLoading(false);
        //     })
    }, []);

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
                                        <Trash2 className="h-4 w-4" />
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
