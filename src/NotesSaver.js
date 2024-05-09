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