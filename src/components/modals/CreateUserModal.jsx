import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardContentsm } from "@/components/ui/card";
import { X, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Navigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast"

export default function CreateUserModal({ onClose }) {
    const [businessName, setBusinessName] = useState('');
    const [businessAbn, setBusinessAbn] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessPhoneNumber, setBusinessPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const { toast } = useToast()

    const handleCreateUser = () => {
        const data = {
            businessName,
            businessAbn,
            businessAddress,
            businessEmail,
            businessPhoneNumber,
        };
        setLoading(true);
        fetch('https://t3a2-b-server.onrender.com/create/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })
        .then((response) => {
            setLoading(false);
            if (response.status === 201) {
                toast({
                    title: "Notification",
                    description: "Success creating a User",
                })
                setRedirect(true)
            } else if (response.status === 400) {
                toast({
                    title: "Notification",
                    description: "Check the fields",
                })
                toast({
                    title: "Notification",
                    description: "Something went wrong",
                })
            }
        })
        .catch((error) => {
            setLoading(false);
            toast({
                title: "Notification",
                description: "An error happened while creating a User",
            })
            console.log(error);
        })
    };

    if (redirect) {
        return <Navigate to={'/dashboard'} />
    }
    
    return (
        <div className="fixed backdrop-blur inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 " onClick={onClose}>
            <Card className="h-[calc(100vh-4rem)] w-full p-4 flex flex-col gap-8 mx-8 sm:mx-0 max-w-[1279px]" onClick={(event) => event.stopPropagation()}>
                <CardHeader>
                    <div className="flex justify-between flex-row">
                        <CardTitle>Register your info</CardTitle>
                        <Button className="flex" variant="outline" size="icon" onClick={onClose}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <CardDescription>Add your details below</CardDescription>
                </CardHeader>
                    <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business name">Business name</Label>
                                <Input 
                                    id="businessName" 
                                    type='text'
                                    value={businessName}
                                    onChange={(event) => setBusinessName(event.target.value)}
                                    placeholder="Add business name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business ABN">Business ABN</Label>
                                <Input 
                                    id="businessAbn" 
                                    type='text'
                                    value={businessAbn}
                                    onChange={(event) => setBusinessAbn(event.target.value)}
                                    placeholder=" Add business ABN" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business address">Business address</Label>
                                <Input 
                                    id="businessAddress" 
                                    type='text'
                                    value={businessAddress}
                                    onChange={(event) => setBusinessAddress(event.target.value)}
                                    placeholder=" Add business address" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business email">Business email</Label>
                                <Input 
                                    id="businessEmail"
                                    type='text'
                                    value={businessEmail}
                                    onChange={(event) => setBusinessEmail(event.target.value)}
                                    placeholder=" Add business email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="Business phone number">Business phone number</Label>
                                <Input 
                                    id="businessPhoneNumber" 
                                    type='number'
                                    value={businessPhoneNumber}
                                    onChange={(event) => setBusinessPhoneNumber(event.target.value)}
                                    placeholder=" Add business phone number" />
                            </div>
                        </div>
                    </form>
                    </CardContent>
                <CardFooter className="flex flex-col justify-between gap-4">
                    {/* <Button variant="secondary" className="w-full items-center" onClick={onClose}>Close</Button> */}
                    <Button className="w-full items-center" onClick={handleCreateUser} disabled={loading}>{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Save'}</Button>
                </CardFooter>
            </Card>
        </div>    
    )
};
