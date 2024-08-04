import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardContentsm } from "@/components/ui/card";
import { X } from "lucide-react";

export default function CreateClientModal({ showModalClient, setShowModalClient }) {
    return showModalClient ? (
        <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 " onClick={() => setShowModalClient(false)}>
            <Card className="h-[calc(100vh-4rem)] w-full p-4 flex flex-col gap-8 mx-8 sm:mx-0 max-w-[1279px]" onClick={(stopClose) => stopClose.stopPropagation()}>
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
    ) : null


};
