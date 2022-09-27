import React, {useState} from 'react';

const NewEntry = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Jasmin');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {title, body, author};

    setIsPending(true);
    
    fetch('http://localhost:3000/entries', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(entry)
    }).then(() => {
      console.log('new blog added')
      setIsPending(false);
    })
  }

  return (
    <div className ="create">
      <h2>New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>Entry title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Entry body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Entry author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Jasmin">Jasmin</option>
          <option value="New User">New User</option>
        </select> 
        <button>Add Entry</button>
        {/* {!isPending && <button>Add entry</button>} 
        {isPending && <button disabled>Adding entry...</button>} 
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>  
    </div>
  )
}

export default NewEntry;