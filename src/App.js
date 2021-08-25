import './App.css';
import Topbar from './topbar';
import Sidebar from './sidenav';
import User from './user';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateUser from './createusers';
import EditUser from './edituser';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
    <div class="sb-nav-fixed">
      <Topbar></Topbar>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar></Sidebar>
        </div>
        
          <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/user" component={User} exact={true}/>
            <Route path="/create-user" component={CreateUser} exact={true}/>
            <Route path="/user/edit/:id" component={EditUser} exact={true}/>
          </Switch>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
