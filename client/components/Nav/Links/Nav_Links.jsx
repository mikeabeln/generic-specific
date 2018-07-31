import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav_Links.scss'
import NavLinksData from './Links.json'

class Nav_Links extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className='colXs3 colXsOffset1 nav_links-cont'>
                { NavLinksData.sets.map((set, index) => (
                    <div key={index}>
                        <h4 className='nav_section'>{set.title}</h4>
                        { set.links.map((links, key) => (
                            <li key={set.links[key]}>
                                <NavLink
                                    exact={true}
                                    to={'/' + set.links[key].link}
                                    className='nav_link'
                                    activeClassName='nav_link-active'>{set.links[key].name}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                ))}
            </ul>
        )
    }
}

export default Nav_Links
