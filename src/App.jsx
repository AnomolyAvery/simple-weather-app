import { QueryClient, QueryClientProvider } from 'react-query';

import UserContext from 'lib/context/UserContext';
import useAppUser from 'lib/hooks/useAppUser';

import Navbar from 'components/Navbar';
import AddLocationForm from 'components/AddLocationForm';
import LocationCards from 'components/LocationCards';
import LoginContainer from 'components/Auth/LoginContainer';

const queryClient = new QueryClient();

function App() {
    const appUserData = useAppUser();
    return (
        <UserContext.Provider value={appUserData}>
            <Navbar />
            <main>
                {appUserData.authUser ? (
                    <QueryClientProvider client={queryClient}>
                        <AddLocationForm />
                        <LocationCards />
                    </QueryClientProvider>
                ) : (
                    <LoginContainer />
                )}
            </main>
        </UserContext.Provider>
    );
}

export default App;
