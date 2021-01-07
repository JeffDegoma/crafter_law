import React from 'react';
import styled from 'styled-components'
import Container from './Reusable/Container'
import {mediaQueries} from './Reusable/Container'
import Button from './Reusable/Button'
import FlexDiv from './Reusable/Flex'
import img from '../assets/images/capitol.png'


const CTAWrapper = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.default.color};
    padding-left: 135px;
    padding-right: 0;
    padding-top: 10rem;
    ${mediaQueries('mobileL')`
        padding: 10px 15px;
        flex-direction: column;
    `}

`
    
const CTALeft = styled(FlexDiv)`
    flex: 1;
    margin-top: 10%;
    height: 70vh;
    align-content: center;
    justify-content: space-evenly;
    ${mediaQueries('mobileL')`
        width: 100%;
        p:nth-last-child(2) {
            margin: 0 0 10% 0;
        }
    `}

    h1 {
        color: ${props => props.theme.primary.color};
        font-size: ${props => props.theme.default.h1_fontSize};
        ${mediaQueries('mobileL')`
            font-size: 58px;
            margin: 10% 0 10% 0;
        `}
    }
    p {
        font-size: 26px;
        color: #454545;
        width: 100%;
        ${mediaQueries('mobileL')`
            font-size: 22px;
            line-height: 1.5rem;
        `}

    }
    button {
        color: ${props => props.theme.primary.color};
    }
    
`

const CTARight = styled(FlexDiv)`
    flex: 1;
    justify-content: flex-end;
    margin-top: 10%;
    img {
        width: 75%;
    }

    ${mediaQueries('mobileL')`
        img {
            width: 100%;
        }
    `}
   
`

const CTA = () => {

    return (
        <CTAWrapper fullVertical>
            <CTALeft justifyCenter flowColumn>
                <h1>Our Commitment</h1>
                <p>We will fight for each and every client. </p>
                <p>We will seek the protections owed to you under the law. </p>
                <p>We will work around the clock and make ourselves available as needed to assure you that your interests and outcomes are important to us and that we thrive when you thrive.</p>
                <Button variant="primary" width="large" height="large">
                    Speak to a Lawyer
                </Button>
            </CTALeft>
            <CTARight>
                <img src={img} alt=""/>
            </CTARight>
        </CTAWrapper>
    );
};

export default CTA;