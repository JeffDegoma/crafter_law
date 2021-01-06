import React from 'react'
import Container from '../Reusable/Container'
import styled from 'styled-components'
import Features from './Features'
import individuals from '../../assets/images/individuals.jpg'
import businesses from '../../assets/images/businesses.jpg'
import lawyer from '../../assets/images/lawyer4.jpg'
import {mediaQueries} from '../Reusable/Container'


const clients = [
    {image: individuals, service: 'Individuals', description: ''},
    {image: businesses, service: 'Businesses'},
    {image: lawyer, service: 'Lawyers'}
]

const Wrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-bottom: 15%;
    ${mediaQueries('mobileL')`
        margin-top: 20%;
    `}
    overflow-x: hidden;
    h1 {
        align-self: flex-end;
        width: 75%;
        margin-bottom: 3%;
        color: ${props => props.theme.default.color};
        font-size: ${props => props.theme.default.h1_fontSize};
        ${mediaQueries('mobileL')`
            text-align: center;
            width: 100%;
            font-size: 52px;
            margin-right: 0%;
            margin-bottom: 10%;
        `}
        

`

class FeaturesSection extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        activeLabel : 'Individuals',
        data: clients
    }

    logLabelToParent = label => {
        this.setState({
            activeLabel : label
        })
    }

    render() {

        const {
            state: {activeLabel, data}
        
        } = this;
        return (
            <Wrapper fullVertical full>
                <Features activeLabel={activeLabel}
                          logLabelToParent={this.logLabelToParent}
                          data={data}
                > 
                </Features>
            </Wrapper>
        )
    }
}

export default FeaturesSection;

