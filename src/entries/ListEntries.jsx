import React from 'react';
import {Link} from 'react-router-dom';

const ListEntries = ({entries}) => {
  return (
      <div className="entry-list">
        {/* {entries.map((entry) => (
          <div className="entry-preview" key={entry.id}>
            <Link to={`/entries/${entry.id}`}>
              <h2>{entry.title}</h2>
              <p>Written by {entry.author}</p>
            </Link>
          </div>
        ))} */}
        </div>
  ) 
}

export default ListEntries;