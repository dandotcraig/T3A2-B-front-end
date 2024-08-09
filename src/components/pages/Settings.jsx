import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function Settings() {
    const [businessName, setBusinessName] = useState('');
    const [businessAbn, setBusinessAbn] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessPhoneNumber, setBusinessPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEditUser = () => {
        const data = {
            businessName,
            businessAbn,
            businessAddress,
            businessEmail,
            businessPhoneNumber,
        };
        setLoading(true);
        fetch('http://localhost:4000/user/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })
        .then((response) => {
            setLoading(false);
            if (response.status === 200) {
                alert('Success updating user details')
                onClose();
            } else if (response.status === 400) {
                alert('Check the fields')
            } else {
                alert('Something went wrong')
            }
        })
        .catch((error) => {
            setLoading(false);
            alert('An error happened while creating a user')
            console.log(error);
        })
    };
    

    return(
        <Card>
            <CardHeader>
                <CardTitle>Your details</CardTitle>
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
                                id="businessEmail"
                                type='text'
                                value={businessEmail}
                                onChange={(event) => setBusinessEmail(event.target.value)}
                                placeholder=" Add business email" />
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
                
                <Link to="/" className="w-full"><Button variant="destructive" className="w-full items-center">Delete your account</Button></Link>
                <Button className="w-full items-center" onClick={handleEditUser} disabled={loading}>{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Save'}</Button>
            </CardFooter>
        </Card>
    )
};
