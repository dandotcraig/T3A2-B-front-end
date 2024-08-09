import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserContext } from "@/context/UserContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import CreateUserModal from "./modals/CreateUserModal"

export default function LoginRegister() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {setUserInfo} = useContext(UserContext);
  const [showModalUser, setShowModalUser] = useState(false);

  
  async function register(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.status == 200) {
      // alert('Login successful - now you are in!')
      response.json().then(data => {
        console.log("Register data:", data.information);
        setUserInfo(data.information)
        // setRedirect(true)
      })
      
    } else {
      alert('Registration failed')
    }
  }

  async function login(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.status == 200) {
        // alert('Login successful - now you are in!')
        response.json().then(data => {
          console.log("Login data:", data.information);
          setUserInfo(data.information)
          // setRedirect(true)
        })
        
    } else {
        alert('Login failed')
    }
  }

  

  return(
      <div className="flex mt-24 justify-center h-screen">
      <Tabs defaultValue="account" className="w-full max-w-[400px]">
        <TabsList className="grid grid-cols-2">
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
                <form onSubmit={login}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email"
                        type="text" 
                        placeholder="me@example.com" 
                        value={username} 
                        onChange={event => setUsername(event.target.value)} />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="register-password">Password</Label>
                      <Input 
                        id="register-password"
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={event => setPassword(event.target.value)} />
                    </div>
                  </div>
                </form>
              </CardContent>
            <CardFooter className="flex justify-between">
              <Link to="/dashboard" className="w-full">
                <Button onClick={login} className="w-full items-center">Login</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>Enter your email below to create your account</CardDescription>
            </CardHeader>
            <CardContent className="">
              <form onSubmit={register}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="register-email">Email</Label>
                    <Input 
                      id="register-email"
                      type="text" 
                      placeholder="me@example.com" 
                      value={username} 
                      onChange={event => setUsername(event.target.value)} />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="register-password">Password</Label>
                    <Input 
                      id="register-password"
                      type="password" 
                      placeholder="Password" 
                      value={password} 
                      onChange={event => setPassword(event.target.value)} />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={() => {register(event); setShowModalUser(true);}} className="w-full items-center">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      {showModalUser && <CreateUserModal onClose={() => setShowModalUser(false)}/>}
    </div>
  );
}