import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav_Links.scss'
import NavLinksData from './Nav_Links.json'

class Nav_Links extends React.Component {
    constructor(props) {
        super(props)
        this.delayToggleNav = this.delayToggleNav.bind(this)
    }

    delayToggleNav() {
        setTimeout(() => this.props.toggleNav(), 100)
    }

    render() {
        return (
            <menu role='Navigation Links' className='nav_links-cont colXs3 colXsOffset1'>
                {NavLinksData.sets.map((set, index) => (
                    <div key={index} title={set.title} className='nav_set-cont'>
                        <h4 className={'nav_set-title ' + set.classPrefix + '-title'}>{set.title}</h4>
                        <ul className='nav_set-list'>
                            {set.links.map((links, i) => (
                                <li key={i} className='nav_set-list-item'>
                                    <NavLink
                                        exact={true}
                                        to={'/' + set.links[i].link}
                                        onClick={this.delayToggleNav}
                                        className={'nav_set-link ' + set.classPrefix + '-link'}
                                        activeClassName={'nav_set-link-active ' + set.classPrefix + '-link-active'}
                                    >
                                        {set.links[i].name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </menu>
        )
    }
}

export default Nav_Links
