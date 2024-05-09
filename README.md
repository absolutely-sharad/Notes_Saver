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
<App />
<Notes />

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
