import React from 'react'
import { feature } from '../helpers/mock'
import FeatureItem from './FeatureItem'

function Feature() {
  return (
    <div class="max-w-7xl mx-auto">
        <div class="container flex flex-col items-baseline px-6 mx-auto space-y-12 md:flex-row">
            <div class="flex flex-col space-y-12 md:w-1/2">
                <h2 class="max-w-md font-bold text-4xl text-center md:text-left">
                    What's different about manage?
                </h2>
                <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Manage provides all the functionality your team needs, without the complexity.
                    Our software is tailor-made for modern digital products.
                </p>
            </div>
            <div class="flex flex-col space-y-8 md:w-1/2">
                <div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
                    <div>
                        {feature?.map(({id,title,desc}) => <FeatureItem key={id} id={id} title={title} desc={desc} />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature