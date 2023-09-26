import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Streamers from './components/Streamers/Streamers';
import RulesInfo from './components/Rules and Info/RulesInfo';
import Champions from './components/Champions/Champions';
import Youtubers from './components/Youtubers/Youtubers';
import Prizes from './components/Prize/Prize';
import Footer from './components/Footer/Footer';
import VideoCard from './components/Videos/Youtube';
import FactionTierList from './components/Faction Tier List/TierList';
import DLCDetails from './components/DLC/DLCDetails';
import FactionChallengesPage from './components/Challenges/FactionChallenges';
import UnitChallengesPage from './components/Challenges/UnitChallenges';
import ChallengesPage from './components/Challenges/ChallengesPage';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twitch-streamers" element={<Streamers />} />
        <Route path="/youtubers" element={<Youtubers />} />
        <Route path="/rules-info" element={<RulesInfo />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/guides" element={<VideoCard />} />
        <Route path="/faction-tier-list" element={<FactionTierList />} />
        <Route path="/dlc-recommendations" element={<DLCDetails />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/challenges/factions" element={<FactionChallengesPage />} />
        <Route path="/challenges/units" element={< UnitChallengesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;