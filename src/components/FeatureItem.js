import React from 'react'


const FeatureItem = ({ id, title, desc }) => {
  return (
    <div class="py-2 lg:py-4">
        <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">0{(id)}</div>
                <h3 class="text-base font-bold md:text-lg">{title}</h3>
                
            </div>
        </div>
        <p class="text-darkGrayishBlue pt-2 px-8 max-w-xl text-left">{desc}</p>
    </div>
  )
}

export default FeatureItem