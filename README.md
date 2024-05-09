# Notes Saver React Project

This repository contains a simple React project for saving notes as a PDF file.

## Project Structure

The project consists of two main files:

1. **NotesSaver.js**: This file contains the functional component `Notes` responsible for rendering a textarea for inputting notes and a button to save the notes as a PDF file. It utilizes React Hooks (`useState`) for managing state and the `jsPDF` library for generating PDFs.

2. **App.js**: This file imports and renders the `Notes` component within the main application. It also includes a title for the application.

## Components

### NotesSaver.js

#### Functions
- **handleChange**: This function is called when the content of the textarea changes. It updates the `notes` state with the new value.
- **handleSave**: This function is called when the "Save Notes" button is clicked. It creates a new instance of `jsPDF`, adds the notes content to the PDF, and saves the PDF file.

#### Usage
<App/>
```jsx
import Notes from './NotesSaver';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> NOTES SAVER </h1>
      <Notes/>
    </div>
  );
}

export default App;
```
<Notes/>
```jsx
import React, { useState } from 'react';
import jsPDF from 'jspdf';
import styles from './NotesSaver.module.css';

export default function Notes() {
    const [notes, setNotes] = useState('');
    function handleChange(e) {
        setNotes(e.target.value);
    }
    function handleSave() {
        const doc = new jsPDF();
        doc.text(20, 20, `Notes: ${notes}`);
        doc.save('notes.pdf');
    }
    return (
        <div className={styles.main}>
            <textarea name="data" placeholder="Add your notes here ....." onChange={handleChange}></textarea>
            <button onClick={handleSave}>Save Notes</button>
        </div>
    );
}
```

#### Getting Started
- To run the project locally:

#### Clone this repository to your local machine.
- Install dependencies using npm install.
- Start the development server using npm start.
- Access the application in your browser at http://localhost:3000.

#### Technologies Used
- React
- jsPDF
- CSS Modules

### Author
[Sharad Singh Kushwaha]
