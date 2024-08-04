import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";


export default function Clients() {
    return(
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
    )
};
