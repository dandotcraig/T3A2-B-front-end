import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Spinner from '../modules/Spinner'
import { FilePenLine, Trash2 } from "lucide-react";

export default function Clients() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
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
                <Table >
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Number</TableHead>
                            <TableHead>Modify</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clients.map((client, index) => (
                            <TableRow key={client._id}>
                                <TableCell>{client.businessName}</TableCell>
                                <TableCell>{client.businessPhoneNumber}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row gap-2">   
                                        <FilePenLine className="h-4 w-4" />
                                        <Trash2 className="h-4 w-4" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </>
        
    )
};
