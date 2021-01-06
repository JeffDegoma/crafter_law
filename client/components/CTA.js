import React from 'react';
import styled from 'styled-components'
import Container from './Reusable/Container'
import {mediaQueries} from './Reusable/Container'
import Button from './Reusable/Button'
import FlexDiv from './Reusable/Flex'


const CTAWrapper = styled(Container)`
    background: ${props => props.theme.default.color};
    padding-left: 135px;
    padding-top: 10rem;
    ${mediaQueries('mobileL')`
        padding: 10px 15px;
    `}

`
    
const CTAContent = styled(FlexDiv)`
    margin-top: 10%;
    height: 70vh;
    align-content: center;
    justify-content: space-evenly;
    ${mediaQueries('mobileL')`
        width: 100%;
    `}

    h1 {
        color: ${props => props.theme.primary.color};
        font-size: ${props => props.theme.default.h1_fontSize};
        ${mediaQueries('mobileL')`
            font-size: 58px;
        `}
    }
    p {
        font-size: 26px;
        color: #454545;
        width: 80%;
        ${mediaQueries('mobileL')`
            font-size: 22px;
        `}
    }
    button {
        color: ${props => props.theme.primary.color};
    }
    `

const CTA = () => {

    return (
        <CTAWrapper fullVertical>
            <CTAContent justifyCenter flowColumn>
                <h1>Our Commitment</h1>
                <p>We will fight for each and every client. </p>
                <p>We will seek the protections owed to you under the law. </p>
                <p>We will work around the clock and make ourselves available as needed to assure you that your interests and outcomes are important to us and that we thrive when you thrive.</p>
                <Button variant="primary" width="large" height="large">
                    Speak to a Lawyer
                </Button>
            </CTAContent>
        </CTAWrapper>
    );
};

export default CTA;