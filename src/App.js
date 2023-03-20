import './App.scss';
import { About, Contact, Experience, Footer, Header, Nav, Portfolio } from './Components/AllComp';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <br/><br/><br/>
      <About/>
      <br/><br/><br/>
      <Experience/>
      <br/><br/>
      <Portfolio/>
      <br/><br/>
      <Contact/>
      <br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
