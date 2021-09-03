import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Packages from './pages/Packages'
import SubmitReviews from './pages/SubmitReviews'

heroku config:set MONGODB_URI='mongodb+srv://janayjae:Countrychic3!@mydatabase.x7be1.mongodb.net/beachDataBase?retryWrites=true&w=majority'

function App() {
  return (
    <div>
      <div className="App">Beach Luxx-Resort</div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Packages" component={Packages} />
        <Route path="/SubmitReviews" component={SubmitReviews} />
      </Switch>
    </div>
  )
}

export default App
