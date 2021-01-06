import React from 'react';
import styled from 'styled-components'
import Container from './Reusable/Container'
import {mediaQueries} from './Reusable/Container'
import lawyer from '../assets/images/specialists.jpg'


const HeroWrapper2 = styled(Container)`
    background: ${props => props.theme.primary.color};
    padding-left: 135px;
    ${mediaQueries('mobileL')`
        height: 100%;
        padding: 10px 15px;
        font-size: 18px;
        margin-bottom: 10rem;
        
    `}
    height: 100vh;

    `

const HeroContent2 = styled.div`
    display: grid;
    width: 100%;
    height: 93%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    ${mediaQueries('mobileL')`
        display: flex;
        flex-direction: column;
    `}
    line-height: 2rem;
    position: relative;

    button {
        ${mediaQueries('mobileL')`
            width: 65%;
            // height: 18%;
            font-size: 16px;
            color: #454545;
        `}
        text-transform: uppercase;
    }

    h3 {
        width: 500px;
        ${mediaQueries('mobileL')`
            flex: 1;
            width: 97%;
            font-size: 30px;
            margin-bottom: 20%;
            line-height: 3.5rem;
        `};
        top: 0%;

        font-weight: normal;
        font-size: 28px;
        line-height: 2.5rem;
        color: ${props => props.theme.secondary.color};
        ;
    }
    p {
        grid-row: 2;
        align-self: center;
        font-size: 30px;
        line-height: 46px;
        width: 72%;
        height: 180px;
        color: #fff;
        margin-left: 11%;
        border-left: 1px solid white;
        padding-left: 5%;
        ${mediaQueries('mobileL')`
            width: 100%;
            font-size: 26px;
            border: none;
            padding: 0%;
            margin: 0 0 10% 0;
            
        `};
        color: ${props => props.theme.default.color};
    }
    h3 p {
        left: 220px;
    }
    span {
        color: #fff;
    }
    `
const ImageContainer = styled.div`
    ${mediaQueries('mobileL')`
        grid-row: 3;
        display: flex;
        justify-content: center;
    `}
    grid-column: 2/3;
    grid-row: 2/3;
    img {
        width: 120%;
        ${mediaQueries('mobileL')`
            width: 100%;
            height: 100%;
        `}
    }
`

const Answers = () => {

    return (
        <HeroWrapper2 fullVertical>
            <HeroContent2 justifyCenter flowColumn>
                <h3>
                    We are the Crafter Law Group. We specialise in <span>general practice, business</span> and <span>consumer litigation.</span>
                </h3>
                <p>
                    We are committed to upholding the law on your behalf and making sure that we pursue the protections that you are entitled to.
                </p>
                <ImageContainer><img src={lawyer} alt=""/></ImageContainer>
            </HeroContent2>
        </HeroWrapper2>
    );
};

export default Answers;