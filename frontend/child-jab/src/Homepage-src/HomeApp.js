import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeApp.css';
import NAvbar from './HomePage-Components/NAvbar'
import Content from '../components/Content'
import Footer from './HomePage-Components/Footer';

function HomeApp() {
  return (
    <div className="HomeApp">
      <NAvbar></NAvbar>
       <Content></Content> 
       <Footer></Footer>
    </div>
  );
}

export default HomeApp;
