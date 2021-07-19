import {Component} from 'react'
import NavBar from '../NavBar'
import SocialMediaSection from '../SocialMediaSection'
import HomeSection from '../HomeSection'
import ProjectsSection from '../ProjectsSection'
import ContactSection from '../ContactSection'
import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

export default class Portfolio extends Component {
  state = {
    activeNavBarItem: navBarItems[0].name,
  }

  renderComponent = () => {
    const {activeNavBarItem} = this.state

    switch (activeNavBarItem) {
      case navBarItems[1].name:
        return <HomeSection />
      case navBarItems[2].name:
        return <ProjectsSection />
      case navBarItems[3].name:
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  changeActiveNavBarItem = activeNavBarItem => {
    this.setState({
      activeNavBarItem,
    })
  }

  render() {
    const {activeNavBarItem} = this.state
    return (
      <div>
        <NavBar
          activeNavBarItem={activeNavBarItem}
          changeActiveNavBarItem={this.changeActiveNavBarItem}
          navBarItems={navBarItems}
        />
        <div className="portfolio-container">
          <div className="portfolio-body">
            <div className="active-section">{this.renderComponent()}</div>
            <SocialMediaSection />
          </div>
        </div>
      </div>
    )
  }
}
