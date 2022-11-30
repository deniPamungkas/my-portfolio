import './App.scss';
import { About, Header, Nav } from './Components/AllComp';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <br/><br/>
      <About/>
    </div>
  );
}

export default App;
