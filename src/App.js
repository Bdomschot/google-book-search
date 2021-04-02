import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SearchPage from './pages/SearchPage';
import SavedPage from './pages/SavePage'


function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path = "/Search">
            <SearchPage/>
          </Route>
          <Route exact path = "/Saved">
            <SavedPage/>
          </Route>
          <Redirect from ="*" to = "/Search"/>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
