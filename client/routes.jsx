import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* AppContainer component, this is our root element */
import AppContainer from './components/AppContainer.jsx'
import LandingPage from './views/landing/LandingPage.jsx'
import AboutPage from './views/about/AboutPage.jsx'
import LoginPage from './views/login/LoginPage.jsx'
import SignupPage from './views/signup/SignupPage.jsx'

import IdeasPage from './views/ideas/IdeasPage.jsx'
import IdeasProject from './views/ideas/project/IdeasProject.jsx'

import Error404 from './views/error404/Error404.jsx'

/* construct routes */
export default () => {
    return (
        <Router>
            <AppContainer>
                <Switch>
                    {/* Base Component */}
                    <Route path='/' exact component={LandingPage} />

                    {/* Views Routes */}
                    <Route path='/ideas' exact component={IdeasPage} />
                    <Route path='/ideas/:idea' component={IdeasProject} />
                    <Route path='/services' exact component={LandingPage} />
                    <Route path='/products' exact component={LandingPage} />
                    <Route path='/about' exact component={AboutPage} />

                    <Route path='/login' exact component={LoginPage} />
                    <Route path='/signup' exact component={SignupPage} />

                    {/* No Matching Routes */}
                    <Route component={Error404} />
                </Switch>
            </AppContainer>
        </Router>
    )
}
