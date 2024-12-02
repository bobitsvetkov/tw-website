import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Streamers from './components/Streamers/Streamers';
import RulesInfo from './components/Rules and Info/RulesInfo';
import Champions from './components/Champions/Champions';
import Prizes from './components/Prize/Prize';
import VideoCard from './components/Videos/Youtube';
import FactionChallengesPage from './components/Challenges/FactionChallenges';
import UnitChallengesPage from './components/Challenges/UnitChallenges';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/streamers" element={<Streamers />} />
        <Route path="/rules-info" element={<RulesInfo />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/guides" element={<VideoCard />} />
        <Route path="/challenges/factions" element={<FactionChallengesPage />} />
        <Route path="/challenges/units" element={< UnitChallengesPage />} />
      </Routes>
    </Router>
  );
}

export default App;