// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter}from "react-router-dom";
// import AppContextProvider from './context/Context.jsx';
// createRoot(document.getElementById('root')).render(
    
// <BrowserRouter>
// <AppContextProvider>
//         <App />
//  </AppContextProvider>

// </BrowserRouter>
// )




import { createRoot } from 'react-dom/client';
import './index.css'; // Importing the CSS file
import App from './App.jsx'; // Importing the main App component
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing
import AppContextProvider from './context/Context.jsx'; // Importing the context provider

// Creating the root element and rendering the application
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Wrapping the App component with AppContextProvider and BrowserRouter */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);

