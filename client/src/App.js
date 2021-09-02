import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
// import Packages from './pages/Packages'
import SubmitReviews from './pages/SubmitReviews'

function App() {
  return (
    <div>
      <div className="App">Beach Luxx-Resort</div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/packages" component={Packages} /> */}
        <Route path="/SubmitReviews" component={SubmitReviews} />
      </Switch>
    </div>
  )
}

export default App
