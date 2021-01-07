import React from 'react';
import styled from 'styled-components'
import Flex from './Reusable/Flex'
import Button from './Reusable/Button'
import Container from './Reusable/Container'
import {mediaQueries} from './Reusable/Container'


const Bottom = styled(Flex)`
    width: 100%;
    background: ${props => props.theme.default.color};
    flex-direction: column;
    ${mediaQueries('mobileL')`
        font-size: 18px;
        padding: 20px 5px;
        margin-left: 0%;
    `}

`

const BlurbWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 25%;
    height: 50vh;
    
    ${mediaQueries('mobileL')`
        margin-left: 0%;
        height: 100%;
        height: 60vh;
    `}
    padding-left: 8px;
    p {
        ${mediaQueries('mobileL')`
            font-size: 22px
        `}
        font-size: 22px;
        color: #454545;
        
    }
    
    h2 {
        color: ${props => props.theme.primary.color};
        font-size: 40px;
        ${mediaQueries('mobileL')`
            font-size: 48px
        `}
        font-weight: 400;
    }
    button {
        width: 10rem;
        height: 20%;
        ${mediaQueries('mobileL')`
            height: 10%;
        `}
        color: ${props => props.theme.primary.color}
    }
    button:hover {
        background: white;
        color: #004c70;
        border: 2px solid ${props => props.theme.secondary.color};
    }
`


const BottomBlurb = (props) => {
    if (props.activeLabel === 'Individuals') {
        return(
        <Bottom flowColumn justifyEnd>
                <BlurbWrapper small>
                <h2>{props.activeLabel}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a ea, blanditiis illo quo sed ut ex quos. Deleniti perferendis earum id incidunt architecto nemo sunt pariatur quaerat quis doloremque?</p>
                <Button variant="primary" width="large">Learn more</Button>
                </BlurbWrapper>
            </Bottom>
        )
    }
    return props.data.map((obj, i) => { //state
        if (obj.activeLabel) {
            return (
                <Bottom key={i} flowColumn justifyEnd>
                    <BlurbWrapper small>
                    <h2>{props.activeLabel}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium tempora consequuntur expedita quas ipsam a illo nulla perferendis odit, suscipit temporibus!</p>
                    <Button variant="primary" width="large">Learn more</Button>
                    </BlurbWrapper>
                </Bottom>
            )
        }
    })

}

export default BottomBlurb