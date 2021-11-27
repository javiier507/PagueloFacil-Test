import { ChakraProvider } from './libraries/chakra';
import { BrowserRouter } from './libraries/react-router';
import { QueryClientProvider, QueryClient } from './libraries/react-query';

import PrivateLayout from './components/layouts/PrivateLayout';

const queryClient = new QueryClient();

function App() {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                  <PrivateLayout/>
                </BrowserRouter>
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default App;
