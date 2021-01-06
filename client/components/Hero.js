import React from 'react';
import FlexDiv from './Reusable/Flex'
import Button from './Reusable/Button'
import {mediaQueries} from './Reusable/Container'
import styled from 'styled-components'
import img from '../assets/images/courthouse2.jpg'
import logo from '../assets/images/clg.png'


const Hero = styled(FlexDiv)`
    background: ${props => props.theme.primary.color};
    width: 100vw;
    position: relative;
    margin-bottom: 15%;
    background: url(${img});
    background-size: contain;
    height: 100vh;
    background-repeat: no-repeat;
    flex-wrap: nowrap;
    ${mediaQueries('mobileL')`
    overflow: hidden;
    background-size: cover;
    background-position-x: 30%;
        ::before {
            content: "";
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            background-color: rgba(0,0,0,0.6);
        }
    `}   
`

export const Logo = styled(FlexDiv)`
    background: url(${logo});
    height: 200px;
    width: 200px;
    position: absolute;
    left: 18%;
    background-size: contain;
    background-repeat: no-repeat;
    ${mediaQueries('mobileL')`
        left: 23%;
    `}

`

export const TopLine = styled(FlexDiv)`
    position: absolute;
    width: 50%;
    right: 0%;
    top: 20%;
    border: 7px solid #FFDB5A;
    transform: rotate(0.06deg);
    ${mediaQueries('mobileL')`
        display: none;
    `}
`
export const BottomLine = styled(FlexDiv)`
    position: absolute;
    width: 50%;
    right: 0%;
    bottom: 20%;
    border: 7px solid #FFDB5A;
    transform: rotate(0.06deg);
    ${mediaQueries('mobileL')`
        display: none;
    `}
`

export const Right = styled.div`
    margin: auto;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 0 10px 0 0;
    position: relative;
    
    .values_wrapper {
        margin-bottom: 3%;
        ${mediaQueries('mobileL')`
            margin-bottom: 10%;
        `}
    }
    
    .top_values, .bottom_values {
        display: flex;
        color: ${props => props.theme.secondary.color};
        h1 {
            font-size: ${props => props.theme.default.h1_fontSize};
            color: ${props => props.theme.secondary.color};
            padding: .9rem;
            ${mediaQueries('mobileL')`
                padding: .1rem;
                font-size: 58px;
            `}
        }

    }
    .bottom_values {
        justify-content: flex-end;
        ${mediaQueries('mobileL')`
            align-self: flex-end;
        `}
        h1 {
            color: ${props => props.theme.default.color};
        }
    }
    button {
        color: ${props => props.theme.primary.color};
        margin-right: 16px;
        ${mediaQueries('mobileL')`
            margin-right: 0px;
        `} 
    }
`

 const MainContainer = () => {
   
    return (
        <Hero className="hero">  
            <Logo></Logo>
            <TopLine></TopLine>
            <BottomLine></BottomLine>
            <Right>
                <div className="values_wrapper">
                <div className="top_values">
                    <h1>Liberty,</h1>
                    <h1>Humanity,</h1>
                </div>
                <div className="bottom_values">
                    <h1>Justice,</h1>
                    <h1>Equality.</h1>
                </div>
                </div>
                <Button variant="primary" width="large" height="large">
                    Speak to a Lawyer
                </Button>
            </Right>
        </Hero>
    );
};

export default MainContainer
