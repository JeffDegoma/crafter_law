import React from 'react';
import styled from 'styled-components'
import Container from './Reusable/Container'
import {mediaQueries} from './Reusable/Container'
import lawyer from '../assets/images/lawyer3.jpg'


const AnswersWrapper = styled(Container)`
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

const AnswerContent = styled.div`
    display: grid;
    width: 100%;
    height: 93%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    ${mediaQueries('mobileL')`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
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

    h1 {
        position: absolute;
        height: 134px;
        left: 0;
        width: 500px;
        ${mediaQueries('mobileL')`
            width: 100%;
            font-size: 58px;
            position: relative;
            
        `};
        top: 0%;

        font-weight: normal;
        font-size: ${props => props.theme.default.h1_fontSize};
        line-height: 111.8%;
        color: ${props => props.theme.secondary.color};
        ;
    }
    p {
        grid-row: 2;
        font-size: 26px;
        line-height: 53px;
        width: 65%;
        ${mediaQueries('mobileL')`
            width: 100%;
            font-size: 26px;
            padding: 0 5px;
        `};
        height: 276px;
        color: ${props => props.theme.default.color};
    }
    h1 p {
        left: 220px;
    }
    `
const ImageContainer = styled.div`
    ${mediaQueries('mobileL')`
        grid-row: 3;
        display: flex;
        justify-content: center;
    `}
    grid-row: 1/3;
    img {
        width: 85%;
        ${mediaQueries('mobileL')`
            width: 70%;
            height: 100%;
        `}
    }
`

const Answers = () => {

    return (
        <AnswersWrapper fullVertical>
            <AnswerContent justifyCenter flowColumn>
                <h1>The Legal team You deserve</h1>
                <p>We know that law can be complicated. That’s why we walk you through your legal issues and resolve them with your peace in mind.</p>
                <ImageContainer><img src={lawyer} alt=""/></ImageContainer>
            </AnswerContent>
        </AnswersWrapper>
    );
};

export default Answers;