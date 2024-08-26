import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'
import { companies, faqs } from '../assets/data'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
        <h1 className='flex flex-col py-4 items-center justify-center gradient-title text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter'>Find Your Dream Job <span>and <span className='bg-gradient-to-r from-[#FFFF00] to-[#00FFA7] bg-clip-text text-transparent font-pacifico p-2 pr-4 sm:pr-5 tracking-normal font-medium '> get hired </span></span></h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
          Explore thousands of job listings or find the perfect candidate
        </p>

      </section>
      <div className='flex gap-6 justify-center'>

        <Link to='/jobs'>
          <Button variant='blue' size="xl" className="w-32 sm:w-auto">Find Jobs</Button>
        </Link>
        <Link to='/post-job'>
          <Button variant="destructive" size="xl" className="w-32 sm:w-auto">Post Jobs</Button>
        </Link>
      </div>
      <div className='-z-10'>
        <Carousel className='w-full py-10'
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className='flex gap-5 sm:gap-20 items-center'>
            {
              companies.map(({ name, id, path }) => {
                return (
                  <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                    <img src={path} alt={name} className='h-9 sm:h-14 object-contain' />
                  </CarouselItem>

                )
              })
            }

          </CarouselContent>
        </Carousel>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for the jobs, track application and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs,manage applications, and find the best candiddates.
          </CardContent>
        </Card>
      </section>
      <Accordion type="single" collapsible >
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

    </main>
  )
}

export default LandingPage
