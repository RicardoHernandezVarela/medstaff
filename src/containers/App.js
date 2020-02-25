import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/* Import ROUTES */
import * as ROUTES from '../routes/Routes';

/* Import CSS */
import './App.css';

/* Import components */
//import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Admin from '../components/AdminDashboard/Admin';
//import SignInPage from '../components/SignIn/SignIn';
import LogIn from '../components/SignIn/LogIn';
import Navbar from '../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <h1>MedStaff</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.SIGN_IN} component={LogIn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
