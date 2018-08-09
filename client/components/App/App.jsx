import * as React from 'react'
import './App.scss'

import { auth, provider } from './../../firebase.jsx'

import Header from './../Header/Header.jsx'
import Nav from './../Nav/Nav.jsx'
import Footer from './../Footer/Footer.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: window.location.pathname,
            navOpen: false,
            user: null
        }

        this.props.history.listen(() => {
            if (this.state.path !== this.props.history.location.pathname) {
                window.gtag('config', 'UA-122512534-1', {
                    page_path: this.props.history.location.pathname
                })
                this.setState({ path: this.props.history.location.pathname })
            }
        })

        this.toggleNav = this.toggleNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }

    toggleNav() {
        this.setState({ navOpen: !this.state.navOpen })
    }

    closeNav() {
        this.setState({ navOpen: false })
    }

    login() {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
            const user = result.user
            this.setState({
                user
            })
        })
    }

    logout() {
        auth.signOut().then(() => {
            this.setState({ user: null })
        })
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            }
        })
    }

    render() {
        return (
            <div className='appContainer'>
                <Header path={this.state.path} navOpen={this.state.navOpen} closeNav={this.closeNav} toggleNav={this.toggleNav}/>
                <Nav
                    open={this.state.navOpen}
                    user={this.state.user}
                    login={this.login}
                    logout={this.logout}
                    toggleNav={this.toggleNav}
                />
                <main className='main' path={this.state.path}>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default App
