import logo from 'public/logo.png';
import search from 'public/search.png';
import user from 'public/profile-user.png';
import {useState} from "react";

export default function Topbar() {
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };
    return (
        <nav className="z-10 fixed p-2 pt-3 md:py-9 md:px-6 bg-transparent w-full flex  justify-between items-center mx-auto h-10">
            <a href="https://www.w3schools.com" target="_blank">
                <img className="w-1/2 sm:w-3/12" src={logo.src}></img>
            </a>
            <div className="flex flex-row h-10">
                <img className="pe-3 h-cover" onClick={toggleSearch} src={search.src}></img>
                <form className={searchOpen ? "pe-2" : "hidden pe-2"}>
                    <div
                        className="bg-gray-500/[.80] h-10 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-700 sm:max-w-md">
                        <input
                            className="w-fit placeholder:italic appearance-none border-none bg-transparent text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Search"/>
                        <button type="submit" className="font-medium hover:text-red-900 pe-2">Find</button>
                    </div>
                </form>
                <img className="pe-3 " src={user.src}></img>
            </div>
        </nav>
    )
}