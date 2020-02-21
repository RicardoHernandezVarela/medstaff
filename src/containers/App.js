import React from 'react';
import './App.css';

/* Import components */
//import AdminDashboard from './components/AdminDashboard/AdminDashboard';
//import Admin from '../components/AdminDashboard/Admin';
import SignInPage from '../components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <h1>MedStaff</h1>
      <SignInPage />
    </div>
  );
}

export default App;
