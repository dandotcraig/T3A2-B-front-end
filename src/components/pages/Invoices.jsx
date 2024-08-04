import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableFooter, TableRow } from "../ui/table";


export default function Invoices() {
    return(
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
                <TableRow>
                    <TableCell className="font-medium">test</TableCell>
                    <TableCell>test</TableCell>
                    <TableCell>test</TableCell>
                    <TableCell>test</TableCell>
                    <TableCell className="text-right">test</TableCell>
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
    )
};
