import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function Settings() {
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
                
                <Link to="/" className="w-full"><Button variant="destructive" className="w-full items-center">Delete your account</Button></Link>
                <Link to="/" className="w-full"><Button className="w-full items-center">Save</Button></Link>
            </CardFooter>
        </Card>
    )
};
