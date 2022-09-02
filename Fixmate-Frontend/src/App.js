import logo from './logo.svg';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Mainpage from './components/screens/Mainpage';
import ProfRegister from './components/screens/ProfRegister';
import UserRegister from './components/screens/UserRegister';
import UserLogin from './components/screens/UserLogin';
import UserHome from './components/screens/UserHome';
import ListProfessionals from './components/screens/ListProfessionals';
import ListPackages from './components/screens/ListPackages';
import BookAppoinment from './components/screens/BookAppoinment';
import MyBooking from './components/screens/MyBooking';
import MyProfile from './components/screens/MyProfile';
import CreditCardForm from './components/screens/CreditCardForm';
import AdminLogin from './components/screens/AdminLogin';
import AdminHome from './components/screens/AdminHome';
import AdminListPackages from './components/screens/AdminListPackages';
import ListUsers from './components/screens/ListUsers';
import AdminBooking from './components/screens/AdminBooking';
import AddPackage from './components/screens/AddPackage';

function App() {
  return (
    <div>
      <Router>
     <Switch>
     <Route path="/" exact component={Mainpage}></Route>
     <Route path="/prof-register" exact component={ProfRegister}></Route>
     <Route path="/register" exact component={UserRegister}></Route>
     <Route path="/login" exact component={UserLogin}></Route>
     <Route path="/user/home" exact component={UserHome}></Route>
     <Route path="/user/service" exact component={ListPackages}></Route>
     <Route path="/user/payment" exact component={CreditCardForm}></Route>
     <Route path="/user/BookAppoinment" exact component={BookAppoinment}></Route>
     <Route path="/user/mybooking" exact component={MyBooking}></Route>
     <Route path="/user/myprofile" exact component={MyProfile}></Route>

     <Route path="/admin-login" exact component={AdminLogin}></Route>
     <Route path="/admin/home" exact component={AdminHome}></Route>
     <Route path="/admin/booking" exact component={AdminBooking}></Route>
     <Route path="/admin/service" exact component={AdminListPackages}></Route>
     <Route path="/admin/users" exact component={ListUsers}></Route>
     <Route path="/admin/professionals" exact component={ListProfessionals}></Route>
     <Route path="/admin/addPackage" exact component={AddPackage}></Route>
        <Route path="/**" exact component={Error}></Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
