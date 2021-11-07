import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import useFirebaseAuth from './useFirebaseAuth';

export default function useAppUser() {
    const user = useFirebaseAuth();
    const [appUser, setAppUser] = useState(null);

    useEffect(() => {
        if (user) {
            const userDocRef = doc(firestore, `users/${user.uid}`);
            getDoc(userDocRef).then((userDoc) => {
                if (!userDoc.exists()) {
                    console.log('Firbase writing...');
                    setDoc(userDocRef, {
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        email: user.email,
                        createdAt: new Date(),
                    });
                }
                console.log('Firebase reading...');
                const data = userDoc.data();
                setAppUser(data);
            });
        } else {
            setAppUser(null);
        }
    }, [user]);

    return {
        appUser: appUser,
        authUser: user,
    };
}
