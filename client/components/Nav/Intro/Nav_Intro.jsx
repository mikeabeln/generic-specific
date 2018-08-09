import * as React from 'react'
import './Nav_Intro.scss'

class Nav_Intro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='nav_intro-cont colXs6 colXsOffset1'>
                {this.props.user ?
                    <button onClick={this.props.logout}>Log Out</button>
                    :
                    <button onClick={this.props.login}>Log In</button>
                }
            </div>
        )
    }
}

export default Nav_Intro
