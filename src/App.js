import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/Create';
import NotFound from './Components/NotFound';

function App() {

  const title = "This is the title";
  const count = 50;
  const link = 'https://reactjs.org/docs/getting-started.html';

  return (

    <Router>

      <div className="App">
        <Navbar />

        <div className='homepage'>
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="*">
              <NotFound/>
            </Route>
          
          </Switch>
          
        </div>

      </div>

    </Router>
  );
}

export default App;
