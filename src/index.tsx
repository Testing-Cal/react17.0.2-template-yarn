import * as React from 'react'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard-page';
import Listing from './listing-page';
import PageNotFound from './page-not-found';
import './style.css';

const App = () => {
  const basePath = process.env.REACT_APP_CONTEXT;
  return (
    <Router basename={basePath}>
      <div>
          <nav style={{margin: '20px'}}>
              <Link to="/" style={{marginRight: '20px'}}>Home1</Link>
              <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
              <Link to="/listing">Listing</Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </div>
    </Router>
   )
}

render(<App />, document.getElementById('root'));

/*
class based component

type AppState = {
    name: string
}

type AppProp = {

}

class App extends React.Component<AppProp,AppState> {
  constructor(props:AppProp) {
    super(props);
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
    const basePath = process.env.REACT_APP_CONTEXT;
      return (
          <Router basename={basePath}>
              <div>
                  <nav style={{margin: '20px'}}>
                      <Link to="/" style={{marginRight: '20px'}}>Home</Link>
                      <Link to="/dashboard" style={{marginRight: '20px'}}>Dashboard</Link>
                      <Link to="/listing">Listing</Link>
                  </nav>
                  <Routes>
                      <Route path="/" element={<Home name={this.state.name}/>} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/listing" element={<Listing />} />
                      <Route path="*" element={<PageNotFound />} />
                  </Routes>
              </div>
          </Router>
      )
  }
}

render(<App />, document.getElementById('root'));
*/
