import React from 'react'
import { testimonial } from '../helpers/mock'
import Button from './Button'
import TestimonialItem from './TestimonialItem'

const Testimonials = () => {
  return (
    <div class="max-w-7xl mx-auto">
         <div class="max-w-5xl px-5 mx-auto my-20 text-center">
            <h2 class="text-4xl font-bold text-center">
            What's Different About Manage?
            </h2>
            <div class="flex flex-col mt-20 mb-4 md:flex-row md:space-x-6 md:mt-24 md:mb-10">
                {testimonial?.map(({ id, name, quote, img}) => <TestimonialItem key={id} name={name} quote={quote} img={img} />)}
            </div>
            <Button class="mt-3" />
        </div>
    </div>
  )
}

export default Testimonials