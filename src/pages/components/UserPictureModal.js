import React, {useContext, useEffect, useState} from 'react';
import pp1 from 'public/profile-pictures/pp1.PNG';
import pp2 from 'public/profile-pictures/pp2.PNG';
import pp3 from 'public/profile-pictures/pp3.PNG';
import pp4 from 'public/profile-pictures/pp4.PNG';
import pp5 from 'public/profile-pictures/pp5.PNG';
import pp6 from 'public/profile-pictures/pp6.PNG';
import pp7 from 'public/profile-pictures/pp7.PNG';
import pp8 from 'public/profile-pictures/pp8.PNG';
import pp9 from 'public/profile-pictures/pp9.PNG';
import pp10 from 'public/profile-pictures/pp10.PNG';
import pp11 from 'public/profile-pictures/pp11.PNG';
import pp12 from 'public/profile-pictures/pp12.PNG';
import {UserContext} from "@/pages/_app";
import {auth, firestore} from "@/firebase/config";


export const pictureList = [pp1.src, pp2.src, pp3.src, pp4.src, pp5.src, pp6.src, pp7.src, pp8.src, pp9.src, pp10.src, pp11.src, pp12.src]
const ChangeProfilePictureModal = () => {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(null);
    const user = useContext(UserContext);

    useEffect(() => {
        if (user) {
            const userRef = firestore.collection('users').doc(user.uid);
            userRef.get().then((docSnapshot) => {
                if (!docSnapshot.exists) {
                    userRef.set({
                        id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        pictureIndex: 0,
                    });
                }
                setCurrentPictureIndex(docSnapshot.get("pictureIndex"));
            });
        }
    }, [user]);

    const changePictureIndex = () => {
        if (user) {
            const userRef = firestore.collection('users').doc(user.uid); // Define userRef here
            userRef.update({pictureIndex: currentPictureIndex});
        }
    };
    return (
        <dialog id="changeProfilePictureModal" className="rounded-xl modal w-3/6 h-1/2">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold p-3 text-xl">Change Profile Picture</h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="pb-3 px-3 font-thin text-gray-600">If didn't change, refresh after click on change</p>
                <div className="flex flex-row flex-wrap sm:justify-normal  justify-center items-center">
                    {pictureList.map((pict, i) => (
                        <a key={i} href="#"
                           className="mx-2 h-24 w-24 mb-2 focus:outline-none focus:ring focus:ring-violet-300">
                            <img onClick={() => setCurrentPictureIndex(i)} src={pict} alt="picture"/>
                        </a>
                    ))}

                </div>
                <div className="flex flex-row justify-end modal-action">
                    <button
                        className="m-3 py-2 px-4 rounded-md bg-red-500 hover:bg-red-700 text-white font-semibold"
                        onClick={() => changePictureIndex()}
                    >
                        Change
                    </button>
                    <button
                        className="m-3 py-2 px-4 rounded-md bg-red-500 hover:bg-red-700 text-white font-semibold"
                        onClick={() => document.getElementById("changeProfilePictureModal").close()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </dialog>
    );
};

export default ChangeProfilePictureModal;
