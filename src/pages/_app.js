import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css';
import { auth } from './firebase/config';


export const UserContext = createContext();
export default function App({Component, pageProps}) {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        // Handles auth state changes
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);
    return (
        <UserContext.Provider value={user}>
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}
