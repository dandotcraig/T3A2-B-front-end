import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom";

export default function LoginRegister() {
    return(
        <div className="flex items-center justify-center h-screen">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
              </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Email</Label>
                        <Input id="name" placeholder="me@example.com" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Password</Label>
                        <Input id="name" placeholder="Password" />
                      </div>
                    </div>
                  </form>
                </CardContent>
              <CardFooter className="flex justify-between">
                {/* <Button variant="outline">Cancel</Button> */}
                <Link to="/dashboard" className="w-full"><Button className="w-full items-center">Login</Button></Link>
                
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Enter your email below to create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <Input id="name" placeholder="me@example.com" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Password</Label>
                      <Input id="name" placeholder="Password" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* <Button variant="outline">Cancel</Button> */}
                <Button className="w-full items-center">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
}