import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Streamers from './components/Streamers/Streamers';
import RulesInfo from './components/Rules and Info/RulesInfo';
import Champions from './components/Champions/Champions';
import Youtubers from './components/Youtubers/Youtubers';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Prizes from './components/Prize/Prize';
import Footer from './components/Footer/Footer';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.800",
        color: "white"
      }
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitch-streamers" element={<Streamers />} />
        <Route path="/youtubers" element={<Youtubers />} />
        <Route path="/rules-info" element={<RulesInfo />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/prizes" element={<Prizes />} />
      </Routes>
    </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;