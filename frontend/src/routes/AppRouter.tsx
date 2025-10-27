import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from '../pages/History.tsx';
import Legends from '../pages/Legends.tsx';
import BestMatches from "../pages/BestMatches.tsx";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/history" element={<History />}/>
                <Route path="/legends" element={<Legends />}/>
                <Route path="/best-matches" element={<BestMatches />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;