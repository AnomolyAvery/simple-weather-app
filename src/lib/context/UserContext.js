import { createContext, useContext } from 'react';

const UserContext = createContext({
    appUser: null,
    authUser: null,
});

export const useUser = () => useContext(UserContext);

export default UserContext;
