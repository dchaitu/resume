import {Switch, Route} from 'react-router-dom'
import Portfolio from './components/Portfolio'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Creater from './components/Creater'

import './App.css'

const App = () => (
  <div className="app-container">
    {/* <Portfolio /> */}
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route exact path="/about" component={AboutSection} />
      <Route exact path="/contact" component={ContactSection} />
      <Route exact path="/created" component={Creater} />
    </Switch>
  </div>
)

export default App
