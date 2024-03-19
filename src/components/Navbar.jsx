import { useState } from "react";

function Navbar(){
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };    

    return (
        <nav className="bg-black">
            <div className="max-w-7xl max-auto px-4 py-6 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img src="/img/LOGO TRIGO.png" width="200px" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="" className="text-white hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">INICIO</a>
                            <a href="" className="text-white hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">GALERIA</a>
                            <a href="" className="text-white hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">EVENTOS</a>
                            <a href="" className="text-white hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">CONTACTANOS</a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-whit hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                            {isClick ? (
                                	<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>                                                       
                            ) :(
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            { isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <a href="" className="text-white block hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">INICIO</a>
                        <a href="" className="text-white block hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">GALERIA</a>
                        <a href="" className="text-white block hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">EVENTOS</a>
                        <a href="" className="text-white block hover:bg-white hover:text-black rounded-lg px-4 py-2 font-semibold">CONTACTANOS</a>
                    </div>
                </div>
            )
            }
        </nav>
    )
}

export default Navbar