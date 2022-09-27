import React, {useEffect, useState} from 'react';
import ListEntries from "../entries/ListEntries";

const Home = () => {
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setEntries(data);
      })
  }, [])

  return (
    <div className="home">
      {entries && <ListEntries entries={entries} title="All Entries"/>}
      <h2>Homepage</h2></div>
  )
}

export default Home;