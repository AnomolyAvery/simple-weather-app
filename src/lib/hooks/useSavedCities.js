import { collection, limit, onSnapshot, query } from '@firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import { firestore } from '../firebase';
export default function useSavedCities() {
    const [savedCities, setSavedCites] = useState([]);

    const auth = useContext(UserContext);

    useEffect(() => {
        let unsub;
        if (auth.appUser) {
            const citiesCollectionRef = collection(
                firestore,
                `users/${auth.authUser.uid}/cities`
            );

            const citiesQuery = query(citiesCollectionRef, limit(10));

            unsub = onSnapshot(citiesQuery, (snapshot) => {
                const cities = snapshot.docs.map((doc) => {
                    console.log('Firebase read.');
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                setSavedCites(cities);
            });
        } else {
            setSavedCites([]);
        }
        return unsub;
    }, [auth]);

    return {
        savedCities,
    };
}
