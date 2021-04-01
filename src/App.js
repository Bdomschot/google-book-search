import './App.css';
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
import Results from './components/Results';
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Header/>
      <Jumbo />
      <Search/>
      <Results/>
    </div>
  )
}

export default App;
