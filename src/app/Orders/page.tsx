"use client"

import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CircleDollarSign } from "lucide-react";
import dynamic from "next/dynamic"
import { useMemo, useState } from "react";
import { Bar, CartesianGrid, Legend, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface orders {
  Order: string,
  ClientName: string,
  ClientAvatar: string,
  Product: string,
  Qtd: number,
  Date: string,
  Email: string,
}

const BarChart = dynamic(
  () => import("recharts").then((mod) => mod.BarChart),
  { ssr: false }
);

function Orders() {
  const ordersNumbers = [
    { date: '6d ago', orders: 150 },
    { date: '5d ago', orders: 192 },
    { date: '4d ago', orders: 54 },
    { date: '3d ago', orders: 153 },
    { date: '2d ago', orders: 444 },
    { date: '1d ago', orders: 290 },
    { date: 'today', orders: 342 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  }

  const data = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]

  const recentOrders = [
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-12`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-15`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-15`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-05`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-01`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-25`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-26`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
    {
      'Order': `#${Math.floor(Math.random() * 50000)}`,
      'ClientName': `${Math.floor(Math.random() * 50000)}`,
      'ClientAvatar': 'https://github.com/lucasolv505.png',
      'Product': `#${Math.floor(Math.random() * 5000)}`,
      'Qtd': Math.floor(Math.random() * 30),
      'Date': `2025-01-03`,
      'Email': `client${Math.floor(Math.random() * 50000)}@example.com`
    },
  ]

  const data1 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ]

  const [sortOrder, setSortOrder] = useState('')

  const sortOrders = (orders: orders[], order: string) => {
    const parseDate = (dateString: string) => {
      const [year, month, day] = dateString.split('-');
      return new Date(`${year}-${month}-${day}`);
    };
  
    if (order === 'date desc') {
      return [...orders].sort((a, b) => parseDate(a.Date).getTime() - parseDate(b.Date).getTime());
    } else if (order === 'date asc') {
      return [...orders].sort((a, b) => parseDate(b.Date).getTime() - parseDate(a.Date).getTime());
    }
  
    return orders;
  }

  const sortedOrders = useMemo(() => sortOrders(recentOrders, sortOrder), [recentOrders, sortOrder])


  return (
    <div className="sm:ml-14 p-4 lg:grid grid-cols-2 gap-2">

      <Card>
        <CardHeader>Orders Received</CardHeader>
        <CardContent className="h-72 w-full">
          <ResponsiveContainer width={'100%'} height={'100%'}>
            <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
              <BarChart data={ordersNumbers}>
                <Tooltip />
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='date' tickLine={false} tickMargin={10} axisLine={false}
                />
                <Bar dataKey='orders' fill='var(--color-desktop)' radius={4} />
                <YAxis />
              </BarChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>Any other Order Info</CardHeader>
        <CardContent className="h-72 w-full">
          <ResponsiveContainer width={'100%'} height={'100%'}>
            <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
              <RadialBarChart
                width={730}
                height={250}
                innerRadius="10%"
                outerRadius="80%"
                data={data}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar startAngle={15} label={{ fill: '#666', position: 'insideStart' }} background dataKey='uv' />
                <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
                <Tooltip />
              </RadialBarChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 dark:text-slate-400">Recent Orders</CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>
          Filter by:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value=""></option>
            <option value="date desc">Older</option>
            <option value="date asc">Newer</option>
          </select>
        </CardDescription>
      </CardHeader>

      <CardContent>
        {sortedOrders.map((client) => (
          <article className="flex items-center gap-2 border-b py-2" key={client.Order}>
            <Avatar className="w-8 h-8 ml-10">
              <AvatarImage src={client.ClientAvatar} />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div className="ml-8">
              <p className="text-[12px] sm:text-sm text-gray-400">{client.Date}</p>
              <p className="text-[12px] sm:text-sm text-gray-400">Order: {client.Order}</p>
              <p className="text-[12px] sm:text-sm text-gray-400">Name: {client.ClientName}</p>
              <span className="text-[12px] sm:text-sm text-gray-400">Email: {client.Email}</span>
              <p className="text-[12px] sm:text-sm text-gray-400">Product: {client.Product} Qtd: {client.Qtd}</p>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>

      <Card>
        <CardHeader>Any other Order Info</CardHeader>
        <CardContent className="h-auto w-full">
          <ResponsiveContainer width={'100%'} height={'100%'}>
            <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
              <PieChart width={730} height={250}>
                <Tooltip />
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
              </PieChart>
            </ChartContainer>
          </ResponsiveContainer>
          <ResponsiveContainer width={'100%'} height={'100%'}>
            <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
              <PieChart width={730} height={250}>
                <Tooltip />
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#1508ff" />
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#f50b0b" label />
              </PieChart>
            </ChartContainer>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

export default Orders;