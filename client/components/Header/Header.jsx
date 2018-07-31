import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'
import moreIcon from './more.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.toggleNav = this.props.toggleNav.bind(this)
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
                    <span className='colXs1 header_logo-cont'><Link className='header_logo' to='/'>Generic Specific</Link></span>
                    <span className='header_links-cont colXs11'>
                        <ul className='header_link-list'>
                            {this.props.links.map((link, index) => (
                                <li key={index} className='header_list-item'>
                                    <NavLink exact={link.exact} to={link.link} className='header_link' activeClassName='header_link-active'>{link.name}</NavLink>
                                </li>
                            ))}
                            <li className='header_list-item'>
                                <button className={'header_more-button'} onClick={this.toggleNav} aria-haspopup='true' title='Menu'>
                                    <img className='header_more-icon' src={moreIcon} />
                                </button>
                            </li>
                        </ul>
                    </span>
                </div>
            </header>
        )
    }
}

export default Header
