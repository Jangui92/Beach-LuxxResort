import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Experience from './pages/Experience'
import Reviews from './pages/Reviews'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/packages" component={Packages} />
          <Route path="/experience" component={Experience} />
          <Route path="/reviews" component={Reviews} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
