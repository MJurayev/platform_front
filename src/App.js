import st from "./App.module.scss";
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import Contacts from "./pages/Contacts/Contacts";
import AboutUs from "./pages/AboutUs/AboutUs";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Mundarija from "./pages/Mundarija/Mundarija";


import Temp from "./TempComponents/Temp";
function App() {
  
  return (
    <div className={st.container}>
      <Router>
        <Switch>
          <Route  path='/home' ><Home /></Route>
          <Route  path='/contact' ><Contacts /></Route>
          <Route  path='/about' ><AboutUs /></Route>
          <Route  path='/login' ><LoginRegister /></Route>
          <Route path='/mundarija' ><Mundarija /></Route>

          {/* The test component Route */}
          <Route path='/component' ><Temp /></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
