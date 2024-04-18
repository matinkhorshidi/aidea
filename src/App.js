import './App.css';
import Header from './components/Header';
import { Box } from '@chakra-ui/react';
import theme from './theme.js';

function App() {
  return (
    <div>
      <Box maxW="85%" mx="auto">
        <Header></Header>
      </Box>
    </div>
  );
}

export default App;
