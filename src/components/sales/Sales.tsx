import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { CircleDollarSign } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

function Sales() {
    return (
        <Card className='flex-1'>
                <CardHeader>
                    <div className='flex items-center justify-center'>
                        <CardTitle className='text-lg sm:text-xl text gray-800'>
                            New Clients
                        </CardTitle>
                        <CircleDollarSign className='ml-auto w-4 h-4' />
                    </div>
                    <CardDescription>
                        New Clients in the last 24 hours
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <article className='flex items-center gap-2 border-b py-2'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src='https://github.com/lucasolv505.png'/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-sm sm:text-base font-semibold'>Client Name 1</p>
                            <span className='text=[12px] sm:text-sm text-gray-400'>clientemail1@test.com</span>
                        </div>
                    </article>

                    <article className='flex items-center gap-2 border-b py-2'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src='https://github.com/lucasolv505.png'/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-sm sm:text-base font-semibold'>Client Name 1</p>
                            <span className='text=[12px] sm:text-sm text-gray-400'>clientemail1@test.com</span>
                        </div>
                    </article>

                    <article className='flex items-center gap-2 border-b py-2'>
                        <Avatar className='w-8 h-8'>
                            <AvatarImage src='https://github.com/lucasolv505.png'/>
                            <AvatarFallback>DV</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className='text-sm sm:text-base font-semibold'>Client Name 1</p>
                            <span className='text=[12px] sm:text-sm text-gray-400'>clientemail1@test.com</span>
                        </div>
                    </article>
                </CardContent>
            </Card>
    )
}

export default Sales