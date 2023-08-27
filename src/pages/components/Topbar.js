import logo from 'public/logo.png';
import search from 'public/search.png';
import logout from 'public/logout.png';
import logImage from 'public/user.png';
import userPic from 'public/profile-pictures/pp1.PNG';

import {useContext, useEffect, useRef, useState} from "react";
import {handleSignIn, handleSignOut} from "@/firebase/auth";
import {UserContext} from "@/pages/_app";
import ChangeProfilePictureModal, {pictureList} from "../../pages/components/UserPictureModal";
import {auth, firestore} from "@/firebase/config";

export default function TopBar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const user = useContext(UserContext);
    const [profilePictureIndex, setProfilePictureIndex] = useState(0);

    const Fetchdata = () => {
        if (auth.currentUser) {
            firestore
                .collection("users")
                .doc(auth.currentUser.uid)
                .get()
                .then((doc) => {
                    const index = doc.data()?.pictureIndex;
                    setProfilePictureIndex(index);
                });
        } else {
            setProfilePictureIndex(null);
        }
    }

    useEffect(() => {
        Fetchdata();
    })

    const dropdownRef = useRef(null);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (<nav
        className="z-10 w-full fixed p-2 mt-3 bg-transparent flex justify-between items-center h-10">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="w-1/3 mr-1.5 sm:w-2/12" href="/" target="_self">
            <img src={logo.src} alt="Logo"></img>
        </a>
        <div className="flex items-center w-fit flex-row h-10">
            <img className="me-1 sm:me-3 h-7 w-7 sm:h-10 sm:w-10 " onClick={toggleSearch} src={search.src}
                 alt="Search"></img>
            <form className={searchOpen ? "me-2" : "hidden me-2"}>
                <div
                    className="bg-gray-500/[.80] w-32 sm:w-max flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-700">
                    <input
                        className="flex sm:h-10 ps-2 h-7 placeholder:italic appearance-none border-none bg-transparent text-gray-700 focus:outline-none"
                        type="text" placeholder="Search"/>
                    <button type="submit" className="font-medium hover:text-red-900 pe-2">Find</button>
                </div>

            </form>
            {!user ? (
                <img className="btn h-7 w-7 sm:h-10 sm:w-10 justify-self-end " onClick={handleSignIn} src={logImage.src}
                     alt="Login"></img>) : (
                <div>
                    <img
                        ref={dropdownRef}
                        className="btn h-7 w-7 sm:h-10 sm:w-10 justify-self-end dropdown dropdown-end cursor-pointer"
                        src={
                            profilePictureIndex !== null
                                ? pictureList[profilePictureIndex]
                                : userPic.src
                        }
                        alt="Profile"
                        onClick={toggleDropdown}
                    />

                    {dropdownOpen && (
                        <ul className="mt-2 me-3 dropdown-content z-[1] menu p-2 shadow bg-white border rounded-xl absolute right-0 w-48">
                            <li className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                                <img
                                    className="w-6 h-6 rounded-full me-2"
                                    src={
                                        (profilePictureIndex !== null
                                            ? pictureList[profilePictureIndex]
                                            : userPic.src)
                                    } alt="Profile"
                                />
                                <p className="text-black font-medium">{user.displayName}</p>
                            </li>
                            <li><p className="text-gray-600 ">{user.email}</p></li>
                            <hr className="border-gray-300"/>
                            <li
                                className="p-2 btn text-black hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    const modal = document.getElementById("changeProfilePictureModal");
                                    modal.showModal();
                                }}
                            >
                                Change Profile Picture
                            </li>
                            <li
                                className="p-2 text-black hover:bg-gray-100 cursor-pointer"
                                onClick={handleSignOut}
                            >
                                <div className=" text-black flex items-center">
                                    <img
                                        className="w-4 h-4 me-2"
                                        src={logout.src}
                                        alt="Logout"
                                    />
                                    Log Out
                                </div>
                            </li>
                        </ul>
                    )}
                    <ChangeProfilePictureModal/>
                </div>

            )}
        </div>
    </nav>);
}
