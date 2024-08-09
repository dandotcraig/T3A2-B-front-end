import { Card, CardContentsm } from "@/components/ui/card"
import { useEffect, useState } from "react";



export default function HighlightCards({ total }) {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:4000/invoices', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setInvoices(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    let gst = total * 0.1;

    let tax = total * 0.325
    
    console.log({invoices});
    return(
        <div className="flex sm:flex-col md:flex-row lg:flex-row xlg:flex-row justify-center justify-between gap-4 w-full">
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Total revenue</p>
                        <h3 className="font-bold text-2xl">${total.toFixed(2)}</h3>
                        <p className="text-xs text-slate-600">Total revenue, not including costs</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">  
                    <CardContentsm>
                        <p className="text-xs text-slate-600">GST</p>
                        <h3 className="font-bold text-2xl">+${gst.toFixed(2)}</h3>
                        <p className="text-xs text-slate-600">10% of each invoice</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Income tax</p>
                        <h3 className="font-bold text-2xl">+${tax.toFixed(2)}</h3>
                        <p className="text-xs text-slate-600">32.5% of overal revenue</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">This year:</p>
                        <h3 className="font-bold text-2xl">+{invoices.length}</h3>
                        <p className="text-xs text-slate-600">Total number of invoices</p>
                    </CardContentsm>
                </Card>
            </div>
    )
};
