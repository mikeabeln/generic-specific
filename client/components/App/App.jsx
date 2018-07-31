import * as React from 'react'
import './App.scss'

import data from './../../data/mock.json'
import Header from './../Header/Header.jsx'
import Nav from './../Nav/Nav.jsx'
import Footer from './../Footer/Footer.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: window.location.pathname,
            data: data,
            navOpen: false
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
    }

    toggleNav() {
        this.setState({ navOpen: !this.state.navOpen })
    }

    closeNav() {
        this.setState({ navOpen: false })
    }

    render() {
        return (
            <div className='appContainer'>
                <Header path={this.state.path} links={data.links} navOpen={this.state.navOpen} closeNav={this.closeNav} toggleNav={this.toggleNav}/>
                <Nav open={this.state.navOpen} toggleNav={this.toggleNav}/>
                <main className='main' path={this.state.path}>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default App
