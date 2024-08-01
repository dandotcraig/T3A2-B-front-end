import * as React from "react"
 
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
import { ThemeProvider } from "@/components/theme-provider"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ModeToggle } from "./components/mode-toggle"
import logo from "./assets/logo.svg"





function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <header class="absolute inset-x-0 top-0 z-50 border shadow-sm">
        <nav class="flex items-center justify-between p-2 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Sup invoice</span>
              <img class="h-8 w-auto" src={logo} alt=""/>
            </a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <ModeToggle/>
          </div>
        </nav>
      </header>
      
      <div class="flex items-center justify-center h-screen">
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
                <Button className="w-full items-center">Login</Button>
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
    </ThemeProvider>
  )
}

export default App
