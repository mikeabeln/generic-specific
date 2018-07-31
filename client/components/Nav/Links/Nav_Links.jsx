import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav_Links.scss'
import NavLinksData from './Links.json'

class Nav_Links extends React.Component {
    constructor(props) {
        super(props)
        this.toggleNav = this.props.toggleNav.bind(this)
    }

    render() {
        return (
            <menu role='Navigation Links' className='colXs3 colXsOffset1 nav_links-cont'>
                {NavLinksData.sets.map((set, index) => (
                    <section key={index} title={set.title} className='nav_set-cont'>
                        <h4 className='nav_set-title'>{set.title}</h4>
                        <ul className='nav_set-list'>
                            {set.links.map((links, i) => (
                                <li key={i} className='nav_set-list-item'>
                                    <NavLink
                                        exact={true}
                                        to={'/' + set.links[i].link}
                                        onClick={this.props.toggleNav}
                                        className='nav_set-link'
                                        activeClassName='nav_set-link-active'
                                    >
                                        {set.links[i].name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </menu>
        )
    }
}

export default Nav_Links
