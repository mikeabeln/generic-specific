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
            <header className='header containerFluid'>
                {/* put header content here */}
                <div className='row'>
                    <span className='header_logo colXs1'>Generic Specific</span>
                    <span className='header_links-cont colXs11'>
                        <ul className='header_link-list'>
                            <li className='header_link-item'>
                                <NavLink
                                    exact
                                    to='/'
                                    className='header_link'
                                    activeClassName='header_link-active'
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='header_link-item'>
                                <NavLink
                                    to='/about'
                                    className='header_link'
                                    activeClassName='header_link-active'
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </span>
                </div>
            </header>
        )
    }
}

export default Header
