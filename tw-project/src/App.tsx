import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Streamers from './components/Streamers/Streamers';
import RulesInfo from './components/Rules and Info/RulesInfo';
import Champions from './components/Champions/Champions';
import Donations from './components/Donations/Donations';
import Youtubers from './components/Youtubers/Youtubers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitch-streamers" element={<Streamers />} />
        <Route path="/youtubers" element={<Youtubers />} />
        <Route path="/rules-info" element={<RulesInfo />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/donate" element={<Donations />} />
      </Routes>
    </Router>
  );
}

export default App;