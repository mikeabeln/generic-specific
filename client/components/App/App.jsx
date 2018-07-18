import * as React from 'react'
import './App.scss'

import Header from './../Header/Header.jsx'
import Footer from './../Footer/Footer.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            path: window.location.pathname
        }

        this.props.history.listen(() => {
            if (this.state.path !== this.props.history.location.pathname) {
                window.gtag('config', 'UA-122512534-1', {
                    page_path: this.props.history.location.pathname
                })
                this.state.path = this.props.history.location.pathname
            }
        })
    }

    render() {
        return (
            <div className='appContainer'>
                <Header />
                <main className='main'>{this.props.children}</main>
                <Footer />
            </div>
        )
    }
}

export default App
