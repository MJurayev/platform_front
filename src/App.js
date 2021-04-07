import st from "./App.module.scss";
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router,Redirect,Route } from "react-router-dom";

import Contacts from "./pages/Contacts/Contacts";
import AboutUs from "./pages/AboutUs/AboutUs";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Mundarija from "./pages/Mundarija/Mundarija";
import Quiz from "./pages/Quiz/Quiz";
import Footer from "./components/Footer/Footer";
import Viewer from "./pages/Viewer/Viewer";
function App() {
  
  return (
    <div className={st.container}>
      <Router>
      <Navbar />

        
          <Route exact path='/'><Redirect to='/home' /></Route>
          <Route  path='/home' ><Home /></Route>
          <Route  path='/contact' ><Contacts /></Route>
          <Route  path='/about' ><AboutUs /></Route>
          <Route  path='/login' ><LoginRegister /></Route>
          <Route  path='/mundarija' ><Mundarija /></Route>
          <Route  path='/view' ><Viewer/></Route>
          <Route exact path='/quiz/:id'><Quiz/></Route>

      <Footer />

      </Router>
    </div>
  );
}

export default App;
