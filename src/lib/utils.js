import {
    collection,
    where,
    query,
    doc,
    getDocs,
    deleteDoc,
    addDoc,
} from 'firebase/firestore';
import { firestore } from './firebase';

export const doesCityExists = async (userId, lat, lng) => {
    const collectionRef = collection(firestore, `users/${userId}/cities`);
    const collectionQuery = query(
        collectionRef,
        where('lat', '==', lat),
        where('lng', '==', lng)
    );

    const docsSnapShot = await getDocs(collectionQuery);

    return docsSnapShot.docs.length > 0;
};

export const addCityToUser = async (userId, lat, lng) => {
    const collectionRef = collection(firestore, `users/${userId}/cities`);

    const cityDoc = {
        lat,
        lng,
    };
    await addDoc(collectionRef, cityDoc);
};

export const removeCityFromUser = async (userId, id) => {
    const cityDocRef = doc(firestore, `users/${userId}/cities/${id}`);

    await deleteDoc(cityDocRef);
};
