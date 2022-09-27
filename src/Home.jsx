import React, {useState, useEffect} from 'react';
import ListEntries from './ListEntries';

const Home = () => {
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/entries')
      .then(resp => resp.json())
      .then(data => setEntries(data))
  }, []);

  return (
    <div className="home">
      {entries && <ListEntries entries={entries} title="All Entries"/>}
    </div>
  );
}
 
export default Home;