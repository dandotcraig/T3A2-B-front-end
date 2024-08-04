import { Card, CardContentsm } from "@/components/ui/card"

export default function HighlightCards() {
    return(
        <div className="flex sm:flex-col md:flex-row lg:flex-row xlg:flex-row justify-center justify-between gap-4 w-full">
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Total revenue</p>
                        <h3 className="font-bold text-2xl">$45,231.89</h3>
                        <p className="text-xs text-slate-600">+20.1% from last month</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">  
                    <CardContentsm>
                        <p className="text-xs text-slate-600">GST</p>
                        <h3 className="font-bold text-2xl">+$2350</h3>
                        <p className="text-xs text-slate-600">10% of each invoice</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Income tax</p>
                        <h3 className="font-bold text-2xl">+$12,234</h3>
                        <p className="text-xs text-slate-600">A rough estimate</p>
                    </CardContentsm>
                </Card>
                <Card className="flex-1  w-full px-2 py-4 flex-col">
                    <CardContentsm>
                        <p className="text-xs text-slate-600">Number of invoices to date</p>
                        <h3 className="font-bold text-2xl">+20</h3>
                        <p className="text-xs text-slate-600">Total number of invoices</p>
                    </CardContentsm>
                </Card>
            </div>
    )
};
