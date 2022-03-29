import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  
  Route
  
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { routes } from './Data/RouteData';
import LogoutPage from './page-components/LogoutPage';
import PrivateRoute from './components/PrivateRouter';
import CenterLogin from './page-components/CenterLogin';

import AdminForgotPassword from './page-components/AdminForgotPassword';
import AdminRegistration from './page-components/AdminRegistration';
import CenterForgotPassword from './page-components/CenterForgotPassword';
import CenterRegistration from './page-components/CenterRegistration';
import EndUserRegistration from './page-components/EndUserRegistration';
import AdminLogin from './page-components/AdminLogin';
import Home from './Homepage-src/Home-Page/Home'
import HomeApp from './Homepage-src/HomeApp';
import Gallery from './Homepage-src/Home-Page/Gallery';
import Contact from './Homepage-src/Home-Page/Contact'
import About from './Homepage-src/Home-Page/About'
import Flow from './Homepage-src/Home-Page/Flow'
import Search from './Homepage-src/Home-Page/Search';
import SearchResults from './Homepage-src/HomePage-Components/SearchResults';

import OurValues from './Homepage-src/Home-Page/OurValues';
import FeedbackForm from './Homepage-src/Home-Page/FeedbackForm';
import ParentsForm from './Homepage-src/Home-Page/ParentsForm';
import ParentsForgotPassword from './page-components/ParentsForgotPassword';

import Donation from './Homepage-src/Home-Page/Donation';
import Diet from './Homepage-src/HomePage-Components/Diet';
import PregCard from './Homepage-src/HomePage-Components/DietChart/PregCard';
import PostPreg from './Homepage-src/HomePage-Components/DietChart/PostPreg';
import Infant from './Homepage-src/HomePage-Components/DietChart/Infant';
import Success from './Homepage-src/Home-Page/success';
import Book_Vaccine from './Homepage-src/Home-Page/Book_Vaccine';

import Admin_Login from './page-components/Admin_Login';

import Dashboard from './Homepage-src/Home-Page/Dashboard';
import DonationResult from './Homepage-src/Home-Page/DonationResult';
import Admin_Page from './Homepage-src/Home-Page/Admin_Page';
// import HospitalState from './Context/HospitalState';
import ChildPage from './page-components/ChildPage';








function App() {

    return ( 
    <Router>  
     <Switch>
            
       <Route path="/" exact="true">
          <Home></Home>
          </Route>
          <Route path="/child-care" exact="true">
          <HomeApp></HomeApp>
          </Route>
          <Route path="/admin-login">
          <AdminLogin></AdminLogin>
          </Route>
          <Route path="/center-login">
          <CenterLogin></CenterLogin>
          </Route>
          <Route path="/host-login">
          <Dashboard />
          </Route>
          <Route path="/admin-registration">
            <AdminRegistration></AdminRegistration>
          </Route>
          <Route path="/admin-forgotpassword">
              <AdminForgotPassword></AdminForgotPassword>
          </Route>
          <Route path="/center-forgotpassword">
              <CenterForgotPassword></CenterForgotPassword>
          </Route>
          <Route path="/center-registration">
              <CenterRegistration></CenterRegistration>
          </Route>
          <Route path="/host-forgotpassword">
              <ParentsForgotPassword></ParentsForgotPassword>
          </Route>
          <Route path="/host-registration">
              <EndUserRegistration></EndUserRegistration>
          </Route>
          <Route path="/logout">
              <LogoutPage></LogoutPage>
          </Route> 
          <Route path="/gallery">
              <Gallery></Gallery>
          </Route>
          <Route path="/contact-us" exact="true">
          <Contact></Contact>
          </Route>
          <Route path="/about-us" exact="true">
          <About></About>
          </Route>
          <Route path="/flow" exact="true">
          <Flow></Flow>
          </Route> 
          <Route path="/search-center" exact="true">
          <Search></Search>
          </Route> 
          <Route path="/search-results" exact="true">
          <SearchResults></SearchResults>
          </Route>
        

          <Route path="/PregCard" exact="true">
          <PregCard/>
          </Route>
          <Route path="/PostPregCard" exact="true">
          <PostPreg/>
          </Route>
          <Route path="/Infant" exact="true">
          <Infant/>
          </Route>
          <Route path="/donation" exact="true">
          <Donation />
          </Route>
          <Route path="/donationres" exact="true">
            <DonationResult/>
          </Route>
          <Route path="/success" exact="true">
            <Success />
          </Route>
          
          <Route path="/book" exact="true">
          <Book_Vaccine />
          </Route>
          <Route path="/diet" exact="true">
          <Diet />
          </Route>
          <Route path="/admin" exact="true">
          <Admin_Login />
          </Route>
          <Route path = "/adminpage" exact="true">
            <Admin_Page />
          </Route>
          <Route path="/ourvalues" exact="true">
          <OurValues></OurValues>
          </Route>
          <Route path="/feedbackform" exact="true">
          <FeedbackForm></FeedbackForm>
          </Route>
          <Route path="/enquiryform" exact="true">
          <ParentsForm></ParentsForm>
          </Route>
          
          <Route path="/childpage" exact="true">
            <ChildPage/>
          </Route>

          
       {
       
            routes.map((route, index)=>{
              return <PrivateRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  >
                <Sidebar></Sidebar>
                <Navbar></Navbar> 
                
               <div className="content-wrapper"> 
                    {route.main()}
                    </div>
                  </PrivateRoute>       
          })
        }         
     </Switch>  
    </Router>

    
    
    
    );   
}
export default App;