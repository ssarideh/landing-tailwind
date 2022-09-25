import React from 'react'

const Footer = () => {
  return (
    <div class="bg-veryDarkBlue">
        <div class="max-w-7xl mx-auto container flex flex-col justify-between px-6 py-10 space-y-8 md:flex-row md:space-y-0">
            <div class="flex flex-col items-center justify-between space-y-4 mb-10 md:mb-0 md:space-y-0 md:items-start">
                <div>
                    <img src="/images/logo-white.svg" class="h-6 lg:h-8" alt='' />
                </div>
                <div class="flex justify-center space-x-4">
                    <a href='#'><img src='/images/icon-facebook.svg' class="h-5 lg:h-8" alt='' /></a>
                    <a href='#'><img src='/images/icon-youtube.svg' class="h-5 lg:h-8" alt='' /></a>
                    <a href='#'><img src='/images/icon-twitter.svg' class="h-5 lg:h-8" alt='' /></a>
                    <a href='#'><img src='/images/icon-pinterest.svg' class="h-5 lg:h-8" alt='' /></a>
                    <a href='#'><img src='/images/icon-instagram.svg' class="h-5 lg:h-8" alt='' /></a>
                </div>
            </div>
            <div class="flex justify-around space-x-20 lg:space-x-32">
                <div class="flex flex-col space-y-3 text-white">
                    <a href="#" class="hover:text-brightRed">Home</a>
                    <a href="#" class="hover:text-brightRed">Pricing</a>
                    <a href="#" class="hover:text-brightRed">Products</a>
                    <a href="#" class="hover:text-brightRed">About</a>
                </div>
                <div class="flex flex-col space-y-3 text-white">
                    <a href="#" class="hover:text-brightRed">Careers</a>
                    <a href="#" class="hover:text-brightRed">Community</a>
                    <a href="#" class="hover:text-brightRed">Privacy Policy</a>
                </div>
            </div>
            <div class="flex flex-col justify-between">
            <form>
                <div class="flex space-x-3">
                <input type="text" class="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updated in your inbox"/>
                <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
                </div>
            </form>
            <div class="hidden text-white md:block">
                Copyright &copy; 2022, All Rights Reserved
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer