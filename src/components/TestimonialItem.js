import React from 'react'

const TestimonialItem = ({ id, name, quote, img }) => {
    console.log(img)
  return (
    <div class="flex flex-col mb-14 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:mb-0">
        <img src={img} class="w-16 -mt-14" alt="" />
        <h5 class="text-lg font-bold">{name}</h5>
        <p class="text-sm text-darkGrayishBlue">
        “{quote}”
        </p>
    </div>
  )
}

export default TestimonialItem