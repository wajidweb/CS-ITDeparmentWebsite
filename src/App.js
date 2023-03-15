import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Academics from './pages/Academics/Academics';
import Contact from './pages/Contact/Contact';
import Faculty from './pages/Faculty/Faculty';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import Noticeboard from './pages/Noticeboard/Noticeboard';
import Society from './pages/society/Society';
import './App.css'
import NotificationPage from './pages/Noticeboard/NotificationPage';
import Downloads from './pages/Downloads/Downloads';

export default function App() {
  return (
   <Router>
    <Switch >
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/noticeboard' >
        <Noticeboard />
      </Route>
      <Route path='/faculty' >
        <Faculty />
      </Route>
      <Route path='/academics' >
        <Academics />
      </Route>
    
      <Route path='/gallery' >
        <Gallery />
      </Route>
      <Route path='/society' >
        <Society />
      </Route>
      <Route path='/contact' >
        <Contact />
      </Route>
      <Route path='/downloads' >
        <Downloads />
      </Route>
      <Route path='/notificatiopage' >
        <NotificationPage />
      </Route>

      <Redirect path='/' />
    </Switch>
   </Router>
  )
}
