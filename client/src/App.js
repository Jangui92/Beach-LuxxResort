import logo from './logo.svg'
import './App.css'
import

function App() {
  
    return( 
    <Router>
    <div className = "App">
<Header />
<Switch>
<Route exact path = "/" component = {Home} />
<Route path = "/packages" component = {Packages} />
<Route path = "/reviews" component = {Reviews} />
    </Switch>
    </div>
  </Router>
    )
}

export default App
