import react from 'react';
import {useSelector} from 'react-redux';
import Login from './Views/Login/login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from './Views/Sidebar/sidebar'
import ViewBugPage from './Views/Pages/viewBugs'


function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    {!auth.LoggedIn ? <Login /> :
    <>
      <Sidebar />
      <Routes>
        <Route path="/viewbugs" element={<ViewBugPage />} />
      </Routes>
    </>
    }
    </Router> 
  );
}

export default App;
