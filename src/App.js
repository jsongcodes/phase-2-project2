import Navbar from "./navigation/Navbar";
import Home from "./static/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEntries from "./entries/ListEntries";
import NewEntry from "./entries/NewEntry";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entries" element={<ListEntries />} />
        <Route path="/entries/new" element={<NewEntry />} />
      </Routes>
    </Router>
  );
};

export default App;
