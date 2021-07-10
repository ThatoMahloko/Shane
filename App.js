import './App.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid'
import Grid2 from './components/Grid2';
import Icons from './components/Icons';
import Jumbotron from './components/Jumbotron'
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
import Programs from './pages/Programs';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Cards from './components/Cards';


//import Carousel from './components/Form'
//import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
     
      <Navbar />
        {/*  <Router><Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/progs" component={Programs}/>
        </Switch>
      </Router> */}
      <Jumbotron />
      <Grid2 />
      <h1 className="text-center" style={{ color: 'black' }}>Programmes</h1>
      <p style={{"text-align":"center"}}>Protecting and promoting the right of ordinary citizens and treat them with dignity through capacity building and youth rehabilatation</p>
      <Icons />
      <Footer />
    </div>
  );
}

export default App;
