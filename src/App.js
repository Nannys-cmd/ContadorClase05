import { ChakraProvider } from '@chakra-ui/react';
import ContadorResponsive from './components/ContadorResponsive';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <ContadorResponsive />
      </div>
    </ChakraProvider>
  );
}

export default App;
