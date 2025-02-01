"use client"

import React from 'react'
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Home, LogOut, Package, PanelBottom, Settings2, ShoppingBag, Users } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { usePathname } from 'next/navigation'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

function Sidebar() {

    const pathname = usePathname()

    return (
        <div className='flex w-full flex-col bg-muted'>

            <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col'>
                <nav className='flex flex-col items-center gap-4 px-2 py-5'>

                    <TooltipProvider>

                        <Link href={'/'} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${pathname === '/' && 'flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full hover:text-white'}`}>

                            <Home className='h-4 w-4' />
                            <span className='sr-only'>Dashboard LOGO</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>

                                <Link href={'/Orders'} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${pathname === '/Orders' && 'flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full hover:text-white'}`}>

                                    <ShoppingBag className='h-4 w-4' />
                                    <span className='sr-only'>Orders</span>
                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Orders
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>

                                <Link href={'/Products'} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${pathname === '/Products' && 'flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full hover:text-white'}`}>

                                    <Package className='h-4 w-4' />
                                    <span className='sr-only'>Products</span>

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Products
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>

                                <Link href={'/Clients'} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${pathname === '/Clients' && 'flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full hover:text-white'}`}>

                                    <Users className='h-4 w-4' />
                                    <span className='sr-only'>Clients</span>

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Clients
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>

                                <Link href={'/Configs'} className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${pathname === '/Configs' && 'flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full hover:text-white'}`}>

                                    <Settings2 className='h-4 w-4' />
                                    <span className='sr-only'>Configs</span>

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Configs
                            </TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                </nav>

                <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-5'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>

                                <Link href={'#'} className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'>

                                    <LogOut className='h-4 w-4 text-red-500' />
                                    <span className='sr-only'>Logout</span>

                                </Link>

                            </TooltipTrigger>
                            <TooltipContent side='right'>
                                Logout
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

            </aside>

            <div className='sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>

                <header className='sticky top-0 x-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
                    <Sheet>

                        <SheetTrigger asChild>
                            <Button size='icon' variant='outline' className='sm:hidden'>
                                <PanelBottom className='w-5 h-5' />
                                <span className='sr-only'>Open / Close Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side={'left'} className='sm:max-w-x'>
                        <VisuallyHidden>
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </VisuallyHidden>
                            <nav className='grid gap-6 text-lg font-medium'>
                                <Link href='#'
                                    className='flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2' prefetch={false}
                                >
                                    <Package className='h-5 w-5 transition-all' />
                                    <span className='sr-only'>LOGO</span>
                                </Link>

                                <Link href='/'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}
                                >
                                    <Home className='h-5 w-5 transition-all' />
                                    Home
                                </Link>

                                <Link href='/Orders'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}
                                >
                                    <ShoppingBag className='h-5 w-5 transition-all' />
                                    Orders
                                </Link>

                                <Link href='/Products'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}
                                >
                                    <Package className='h-5 w-5 transition-all' />
                                    Products
                                </Link>

                                <Link href='/Clients'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}
                                >
                                    <Users className='h-5 w-5 transition-all' />
                                    Clients
                                </Link>

                                <Link href='/Configs'
                                    className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' prefetch={false}
                                >
                                    <Settings2 className='h-5 w-5 transition-all' />
                                    Configs
                                </Link>

                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>

        </div>
    )
}

export default Sidebar