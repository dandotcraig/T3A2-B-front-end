import { Button } from "../ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"


export default function Dashboard() {

    return(
        <Tabs defaultValue="Overview" className="w-full md:w-3/4 lg:w-3/4 p-4 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="flex justify-between gap-4">
                <Button variant="secondary" className="flex-1">Create Client</Button>
                <Button className="flex-1">Create invoice</Button>
            </div>
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="Overview">Overview</TabsTrigger>
                <TabsTrigger value="Clients">Clients</TabsTrigger>
                <TabsTrigger value="Settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="Overview">
                Overview
            </TabsContent>
            <TabsContent value="Clients">
                Clients
            </TabsContent>
            <TabsContent value="Settings">
                Settings
            </TabsContent>
        </Tabs>
    )
};
