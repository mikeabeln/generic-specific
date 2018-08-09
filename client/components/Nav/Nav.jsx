import * as React from 'react'
import './Nav.scss'

import Nav_Links from './Links/Nav_Links.jsx'
import Nav_Intro from './Intro/Nav_Intro.jsx'
import Scroll from 'react-scroll'
const scroll = Scroll.animateScroll

class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidUpdate() {
        scroll.scrollToTop({
            duration: 400,
            smooth: 'easeOutQuart'
        })
    }

    render() {
        return (
            <nav className={'row nav ' + (this.props.open ? 'nav_open' : 'nav_closed')}>
                <Nav_Links toggleNav={this.props.toggleNav}/>
                <Nav_Intro user={this.props.user} login={this.props.login} logout={this.props.logout} />
            </nav>
        )
    }
}

export default Nav
