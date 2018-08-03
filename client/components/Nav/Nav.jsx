import * as React from 'react'
import './Nav.scss'

import Nav_Links from './Links/Nav_Links.jsx'
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
            <nav className={'nav ' + (this.props.open ? 'nav_open' : 'nav_closed')}>
                <Nav_Links className={'nav_links'} toggleNav={this.props.toggleNav}/>
                <section className={'nav_intro'} />
            </nav>
        )
    }
}

export default Nav
