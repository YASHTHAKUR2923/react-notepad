import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  const handleSave = () => {
    if (notes.trim()) {
      setSavedNotes([...savedNotes, notes]);
      setNotes('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>React Notepad</h1>
      <textarea
        style={styles.textarea}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your note here..."
      />
      <button style={styles.button} onClick={handleSave}>
        Save Note
      </button>
      <div style={styles.notesList}>
        <h2>Saved Notes:</h2>
        {savedNotes.length > 0 ? (
          savedNotes.map((note, index) => (
            <div key={index} style={styles.note}>
              {note}
            </div>
          ))
        ) : (
          <p>No notes saved yet.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    color: '#008089',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#00c2d0',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  
  },
  notesList: {
    textAlign: 'left',
  },
  note: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
  },





};

export default App;
