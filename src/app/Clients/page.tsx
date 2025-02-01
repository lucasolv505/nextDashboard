'use client'

import React, { useState } from 'react'
import ClientList from './ClientList'
import { Card } from '@/components/ui/card'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

function page() {

  const data = [
    {
      "name": "Jan",
      "purchases": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "purchases": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "purchases": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "purchases": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Jun",
      "purchases": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Jul",
      "purchases": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Aug",
      "purchases": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  const [sortCriteria, setSortCriteria] = useState('purchseAsc')

  const sortedClients = [...ClientList].sort((a,b) => {
    if(sortCriteria === 'purchaseAsc'){
      return a.purchases - b.purchases
    }else if(sortCriteria === 'purchaseDesc'){
      return b.purchases - a.purchases
    }else if(sortCriteria === 'nameAsc'){
      return a.name.localeCompare(b.name)
    }else if(sortCriteria === 'nameDesc'){
      return b.name.localeCompare(a.name)
    }else if(sortCriteria === 'registerAsc'){
      const dateA = new Date (a.since.split('/').reverse( ).join('-')).getTime()
      const dateB = new Date (b.since.split('/').reverse( ).join('-')).getTime()
      return dateA - dateB
    }else if(sortCriteria === 'registerDesc'){
      const dateA = new Date (a.since.split('/').reverse( ).join('-')).getTime()
      const dateB = new Date (b.since.split('/').reverse( ).join('-')).getTime()
      return dateB - dateA
    }
    return 0
  })

  return (
    <div className='sm:ml-14 p-4'>
      <h1 className='text-4xl mb-8'>Clients</h1>

      <div className='mb-3'>
        Order by: 
        <select className='border text=[12px] sm:text-sm text-gray-400 mb-2 ml-2' value={sortCriteria} onChange={(e)=> setSortCriteria(e.target.value)}>
          <option value="purchaseAsc">Purchases ↑</option>
          <option value="purchaseDesc">Purchases ↓</option>
          <option value="nameAsc">Name ↑</option>
          <option value="nameDesc">Name ↓</option>
          <option value="registerAsc">Register ↑</option>
          <option value="registerDesc">Register ↓</option>
        </select>
      </div>

      {sortedClients.map((client) => (
        <Card key={client.name} className='p-4 mb-4 flex flex-col lg:flex-row'>
          <div className='flex flex-col justify-center items-center p-3 lg:w-1/5 lg:border lg:items-start'>
            <img className='rounded-full border w-[80px] h-[80px] object-cover' src={client.avatar} alt="client avatar" />
            <p>Name: {client.name}</p>
            <p>Email: {client.email}</p>
            <p>Purchases: {client.purchases}</p>
            <p>Register: {client.since}</p>
          </div>

          <div className='w-full'>
            <h1 className='text-center text font-bold'>Purchase behavior</h1>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="purchases" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </Card>
      ))}
    </div>
  )
}

export default page