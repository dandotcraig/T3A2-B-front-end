import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import Spinner from '../modules/Spinner'
import { Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "../ui/toaster";

export default function Clients({ refreshClients }) {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);

    const { toast } = useToast()

    useEffect(() => {
        setLoading(true);
        fetch('https://t3a2-b-server.onrender.com/clients', {
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
    }, [refreshClients]);

    const deleteClientById = (id) => {
        setLoading(true);
        fetch(`https://t3a2-b-server.onrender.com/Clients/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
        .then((response) => {
            setLoading(false);
            if (response.status === 200 || response.status === 204) {
                
                setClients(clients.filter(client => client._id !== id));
                toast({
                    title: "Notification",
                    description: "Client deleted",
                    })
                // return response.json();
            } else if (response.status === 400) {
                toast({
                    title: "Notification",
                    description: "Failed deleting Client",
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


    return(
        <>
        <Toaster />
            {loading ? (
                <Spinner />
            ) : (
                <Table >
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead className="text-center">Number</TableHead>
                            <TableHead className="text-right">Modify</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {clients.map((client, index) => (
                            <TableRow key={client._id}>
                                <TableCell>{client.businessName}</TableCell>
                                <TableCell className="text-center" >{client.businessPhoneNumber}</TableCell>
                                <TableCell >
                                    <div className="justify-end flex flex-row gap-2">   
                                        {/* <FilePenLine className="h-4 w-4" /> */}
                                        <Trash2 className="h-4 w-4 items-end" onClick={() => deleteClientById(client._id)} />
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
