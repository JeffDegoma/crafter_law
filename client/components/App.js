import React from 'react'
import { ThemeProvider } from 'styled-components'
import {theme} from './Reusable/global'
import GlobalStyle from './Reusable/global'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Hero from './Hero'
import FeaturesSection from './Features/FeaturesSection'
import Questions from './Questions/Questions'
import SocialProof from './SocialProof.js'
import CTA from './CTA.js'
import Answers from './Answers'
import Hero2 from './Hero2'
import Footer from './Footer.js'


const App = () => {

    return(
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <Route exact path="/" component={Hero}></Route>
            </Switch>
            <Hero2/>
            <FeaturesSection></FeaturesSection>     
            <Questions></Questions>
            <Answers/>
            <SocialProof/>
            <CTA/>
            <Footer></Footer>
        </Router>   
    </ThemeProvider>
    </>
    )
}

export default App;