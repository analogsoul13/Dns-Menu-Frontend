import React from 'react'
import Navbar from '../components/Navbar'
import MenuCard from '../components/MenuCard'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className='min-h-screen'>
                {/* Navbar */}
                <Navbar />
                {/* Banner */}
                <div className="relative text-white h-[311px] flex flex-col justify-center w-full bg-bannerbg bg-cover bg-center font-oswald py-12 text-center">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h1 className="text-[40px] sm:text-[75px] uppercase font-bold">Menu</h1>
                        <p className="mt-2 font-kelly px-4">
                            Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
                        </p>
                    </div>
                </div>

                {/* Menu Options */}
                <MenuCard />

                {/* Footer */}
                <Footer/>
                
            </div>
        </>
    )
}

export default Home