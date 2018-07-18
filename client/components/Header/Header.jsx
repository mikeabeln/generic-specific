import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps, this.props)
    }

    render() {
        return (
            <header className='header row'>
                {/* put header content here */}
                <span className='header_logo colXs1'>Generic Specific</span>
                <span className='header_links_cont'>
                    <ul className='header_links'>
                        <li className='header_link'>
                            <NavLink
                                exact
                                to='/'
                                activeClassName='header_link_active'
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='header_link'>
                            <NavLink
                                to='/about'
                                activeClassName='header_link_active'
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </span>
            </header>
        )
    }
}

export default Header
