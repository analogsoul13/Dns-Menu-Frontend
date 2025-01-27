import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full font-oswald px-4 sm:px-6 lg:px-8 mt-16">
            {/* Grid Container */}
            <div className="container max-w-7xl mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Grid Item 1 */}
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border  shadow-md">
                        <h3 className="text-[16px] font-semibold text-blue-400 uppercase mb-4">Connect with us</h3>
                        <ul className="text-center space-y-2">
                            <li>+91 9567843340</li>
                            <li>info@deepnetsoft.com</li>
                        </ul>
                    </div>

                    {/* Grid Item 2 */}
                    <div className="flex flex-col items-center justify-center relative p-6 rounded-lg border shadow-md">
                        {/* Logo Container */}
                        <div className="absolute bg-black -top-12 left-1/2 transform -translate-x-1/2 p-2 rounded-full">
                            <img
                                src="/public/logo.png"
                                alt="Company Logo"
                                className="w-[86px] h-[76px] object-cover rounded-full"
                            />
                        </div>
                        <h3 className="text-[35px] font-semibold text-blue-400 uppercase mt-6">DEEP <span className='text-base-content'>NET</span> <span className='text-gray-500'>SOFT</span></h3>
                        <div className='flex space-x-3'>
                            <a href=''><i className="fa-brands fa-facebook-f" /></a>
                            <a href=''><i className="fa-brands fa-twitter" /></a>
                            <a href=''><i className="fa-brands fa-youtube" /></a>
                            <a href=''><i className="fa-brands fa-instagram" /></a>
                        </div>
                    </div>

                    {/* Grid Item 3 */}
                    <div className="flex flex-col items-center justify-center p-6 rounded-lg border shadow-md">
                        <h3 className="text-lg font-semibold text-blue-400 uppercase mb-4">Find Us</h3>
                        <ul className="text-center space-y-2">
                            <li>First floor, Geo infopark,<br />Infopark EXPY, kakkanad</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-black text-white mx-16 py-4 mt-8">
                <div className="container mx-auto px-4 text-slate-600 text-start">
                    <p>&copy; {new Date().getFullYear()} Deepnetsoft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;