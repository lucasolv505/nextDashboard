import Chart from "@/components/chart/Chart";
import Sales from "@/components/sales/Sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>
          <CardHeader>
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none dark:text-slate-400">
                Total Sales
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total sales in the last 90 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font bold">U$ 40.000,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none dark:text-slate-400">
                New Clients
              </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              New Clients in the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font bold">742</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none dark:text-slate-400">
                Orders Today
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Orders Received Today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font bold">228</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className=" flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none dark:text-slate-400">
                Orders 30 days
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
            Orders in the Last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font bold">2534</p>
          </CardContent>
        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Chart/>
        <Sales/>
      </section>
    </main>
  );
}
