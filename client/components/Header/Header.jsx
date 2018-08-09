import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import moreIcon from './more.svg'
import menuIcon from './menu.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
    }

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps, this.props)
    // }

    render() {
        return (
            <header className='header containerFluid'>
                {/* put header content here */}
                <div className='row'>
                    <NavLink
                        exact
                        to='/'
                        className='header_logo colXs1 colXsOffset1 colMdOffset0'
                        activeClassName='header_logo-active'
                        onClick={this.props.closeNav}
                    >
                        Generic Specific
                    </NavLink>
                    <menu className='header_links-cont colXs9 colMd11'>
                        <ul className='header_link-list'>
                            {this.props.links.map((link, index) => (
                                <li key={index} className='header_list-item'>
                                    <NavLink
                                        exact={link.exact}
                                        to={link.link}
                                        onClick={this.props.closeNav}
                                        className='header_link'
                                        activeClassName='header_link-active'
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className='header_list-item'>
                                <button
                                    className={'header_more-button'}
                                    onClick={this.props.toggleNav}
                                    aria-expanded={this.props.navOpen}
                                    aria-haspopup={ true }
                                    aria-label='More Navigation Links'
                                >
                                    <img className='header_more-icon' src={moreIcon} />
                                </button>
                            </li>
                        </ul>
                    </menu>
                    <div className='header_menu-button-cont colXs1 colXsOffset8'>
                        <button
                            className={'header_menu-button'}
                            onClick={this.props.toggleNav}
                            aria-expanded={this.props.navOpen}
                            aria-haspopup={ true }
                            aria-label='More Navigation Links'
                        >
                            <img className='header_menu -icon' src={menuIcon} />
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
