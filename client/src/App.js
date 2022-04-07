import {Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Add from './pages/UserPages/Add';
import Edit from './pages/UserPages/Edit';
import Error from './pages/PublicPages/Error';
import LandPage from './pages/PublicPages/LandPage';
import Profile from   './pages/UserPages/Profile'
import Signin from './pages/UserPages/Signin'
import SigninAdmin from './pages/AdminPages/SigninAdmin'
import Signup from './pages/PublicPages/Signup'
import Apropos from './pages/PublicPages/Apropos';
import ProfileAdmin from './pages/AdminPages/ProfileAdmin';
import Contacteznous from './pages/PublicPages/Contacteznous';
import ListofUsers from './pages/AdminPages/ListofUsers';
import Nosdons from './pages/PublicPages/Nosdons';
import Profilesignup from './pages/UserPages/Profilesignup';
import ListDonByUser from './pages/UserPages/ListDonByUser';
import EditProfil from './pages/UserPages/EditProfil'
import ListDonByAdmin from './pages/AdminPages/ListDonByAdmin';
import { Button } from 'react-bootstrap';
function App() {
  const navigate=useNavigate()
  return (
    <div className="App">
      <Navigation/>
     
      
        <Routes>
        <Route path="/" element={<LandPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profileadmin" element={<ProfileAdmin/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signinadmin" element={<SigninAdmin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/listdons" element={<Nosdons/>}/>
        <Route path="/add" element={<Add/>}/> 

        <Route path="/edit/:id" element={<Edit/>}/>
        
        <Route path="/apropos" element={<Apropos/>}/>
        <Route path="/contacteznous" element={<Contacteznous/>}/>
        <Route path="/listofusers" element={<ListofUsers/>}/>
        <Route path="/listdonbyuser" element={<ListDonByUser/>}/>
        <Route path="/editprofil/:id" element={<EditProfil/>}/>
    
        <Route path="/confirmationsignup" element={<Profilesignup/>}/>
        <Route path="/listdonadmin" element={<ListDonByAdmin/>}/>
        
        <Route path="*" element={<Error/>}/>
      </Routes>

      {/* <Button  onClick={()=>navigate(-1)}/> */}
      
      <Footer/>
      
    </div>
  );
}

export default App;
