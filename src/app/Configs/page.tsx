  'use client';
  import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
  import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
  import { Card } from '@/components/ui/card';
  import { Checkbox } from '@/components/ui/checkbox';
  import { Popover, PopoverContent } from '@/components/ui/popover';
  import { Switch } from '@/components/ui/switch';
  import { Toaster } from '@/components/ui/toaster';
  import { toast } from '@/hooks/use-toast';
  import { PopoverTrigger } from '@radix-ui/react-popover';
  import React, { useEffect, useState } from 'react';

  function Page() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
    }, [])

    const toggleTheme = () => {
      setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }, [theme]);

    return (
      <div className='sm:ml-14 p-4 lg:grid lg:grid-cols-2 gap-3'>
        <h1 className='text-4xl mb-8 lg:flex lg:justify-center lg:items-center'>Configs</h1>

        <div className='lg:flex lg:items-end lg:justify-end'>
          <Card className='p-4 mb-4 lg:w-1/2'>
            <h1 className='mb-3 lg:text-center'>Change Theme To {theme === 'light' ? '🌙' : '☀️'}</h1>
            <div className='lg:flex lg:justify-center lg:items-center'>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />

            </div>
          </Card>
        </div>

        <Card className='p-4 mb-4'>
          <h1 className='mb-3'>F.A.Q</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Lorem ipsum?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta at veniam explicabo rem iste doloremque labore
              </AccordionContent>

            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta at veniam explicabo rem iste doloremque labore
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Lorem ipsum dolor sit amet, consectetur</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta at veniam explicabo rem iste doloremque labore
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta at veniam explicabo rem iste doloremque labore
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className='p-4 mb-4'>
          <h1 className='mb-3 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime eum autem qui doloremque quia, necessitatibus dolor dolorem, vitae consequuntur officiis incidunt laudantium neque. Aspernatur quos, saepe assumenda consequuntur animi dolore.</p>

          <Toaster/>

          <button className='p-2 px-6 border rounded-lg'
          onClick={()=>{
            toast({
              title:'Message sent',
              description: 'Friday, 01-01-2025 at 5:11 PM'
            })
          }}>
            Lorem ipsum
          </button>
        </Card>

        <Card className='p-4 mb-4'>
          <h1 className='mb-3 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <div className='mb-2'>
            <Checkbox/> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>

          <div className='mb-2'>
            <Checkbox/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis ab similique fugiat
          </div>

          <div className='mb-2'>
            <Checkbox/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptate ipsum aliquam quod facere ex eligendi
          </div>

          <button className='p-2 px-6 border rounded-lg'>Save</button>
        </Card>

        <Card className='p-4 mb-4'>
          <h1 className='mb-3 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>

          <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum praesentium odio assumenda, nesciunt modi eligendi a velit tempora delectus officiis voluptates natus, unde error molestias reprehenderit nemo quae in!</p>

          <Popover>
            <PopoverTrigger className='border p-2 px-6 rounded-lg'>Open</PopoverTrigger>
            <PopoverContent className='font-medium'><Checkbox/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              
            </PopoverContent>
          </Popover>
        </Card>

        <Card className='p-4 mb-4'>
          <h1 className='mb-3 text-red-700 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <AlertDialog>
            <AlertDialogTrigger className='border p-2 px-6 rounded-lg'>
              DELETE
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</AlertDialogTitle>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quas error earum veniam praesentium.
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Card>

      </div>
    );
  }

  export default Page;