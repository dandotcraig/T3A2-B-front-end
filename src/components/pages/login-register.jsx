import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserContext } from "@/context/UserContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import CreateUserModal from "../modals/CreateUserModal"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "../ui/toaster";

export default function LoginRegister() {
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {setUserInfo} = useContext(UserContext);
  const [showModalUser, setShowModalUser] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast()

  async function register(event) {
    event.preventDefault();

    if (password.length <= 6){
      toast({
        title: "Notification",
        description: "Password must have atleast 6 characters",
        });
      return;
    }
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.status == 200) {
      // alert('Login successful - now you are in!')
      response.json().then(data => {
        // console.log("Register data:", data.information);
        toast({
          title: "Notification",
          description: "Success - now complete the form",
          })
        setUserInfo(data.information)
        setShowModalUser(true);
      })
      
    } else {
      alert('Registration failed')
      toast({
        title: "Notification",
        description: "Registration failed",
        })
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
          // console.log("Login data:", data.information);
          toast({
            title: "Notification",
            description: "Login success",
            })
          // toast('Logged in')
          // alert('')
          setUserInfo(data.information)
          navigate('/dashboard');
        })
        
    } else {
        toast({
          title: "Notification",
          description: "Login failed",
          })
    }
  }

  

  return(
    
      <div className="flex justify-center items-center flex-col">
          <div className="flex mt-16 text-center  flex-col ">
        <h1 className="text-5xl text-center font-thin">Welcome to Sup Invovice</h1>
        <h4 className="font-thin text-lg mt-6">The all-in-one invoicing tool for freelance creatives</h4>
      </div>
      <div className="flex mt-14 justify-center h-screen w-[400px] sm:w-[290px] md:w-[400px] lg:w-[400px] xl:w-[500px] 2xl:w-[500px]">
       <Toaster />
      
        <Tabs defaultValue="account" className="w-full">
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
              
                  <Button onClick={login} className="w-full items-center">Login</Button>
                
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
                <Button onClick={() => {register(event); }} className="w-full items-center">Register</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        {showModalUser && <CreateUserModal onClose={() => setShowModalUser(false)}/>}
      </div>
      </div>
      
    
      
  );
}