import * as React from 'react'
import './Nav.scss'

import Nav_Links from './Links/Nav_Links.jsx'

class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <nav className={'nav ' + (this.props.open ? 'nav_open' : 'nav_closed')}>
                <Nav_Links className={'nav_links'} />
                <section className={'nav_intro'} />
            </nav>
        )
    }
}

export default Nav
