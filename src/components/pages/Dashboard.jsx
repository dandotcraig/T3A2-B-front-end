import { Button } from "../ui/button";
import { Tabs, TabsContent,TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { useState } from 'react';
import Settings from "./Settings";
import Invoices from "./Invoices";
import Clients from "./Clients";
import CreateClientModal from "../modals/CreateClientModal";
import CreateInvoiceModal from "../modals/CreateInvoiceModal";
import HighlightCards from "../modules/highlight-cards";



export default function Dashboard() {
    const [showModalClient, setShowModalClient] = useState(false);
    const [showModalInvoice, setShowModalInvoice] = useState(false);
    const [refreshClients, setRefreshClients] = useState('');
    const [refreshInvoice, setRefreshInvoice] = useState('');


    return(
        <Tabs defaultValue="invoices" className="w-full p-4 flex flex-col gap-8 max-w-[1279px]">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="flex justify-between gap-4">
                <Button onClick={() => setShowModalClient(true)} variant="secondary" className="flex-1">Create Client</Button>
                <Button onClick={() => setShowModalInvoice(true)} className="flex-1">Create invoice</Button>
            </div>
            <TabsList  className="grid w-full grid-cols-3 ">
                <TabsTrigger value="invoices">Overview</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <HighlightCards/>
            <TabsContent value="invoices"><Invoices refreshInvoice={refreshInvoice} /></TabsContent> 
            <TabsContent value="clients"><Clients refreshClients={refreshClients} /></TabsContent>
            <TabsContent value="settings"><Settings/></TabsContent>


            {showModalClient && <CreateClientModal setRefreshClients={setRefreshClients} onClose={() => setShowModalClient(false)}/>}
            {showModalInvoice && <CreateInvoiceModal setRefreshInvoice={setRefreshInvoice} onClose={() => setShowModalInvoice(false)}/>}

        </Tabs>
    )
};
