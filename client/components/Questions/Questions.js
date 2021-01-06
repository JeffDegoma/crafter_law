import React from 'react';
import styled from 'styled-components'
import FlexDiv from '../Reusable/Flex'
import Container from '../Reusable/Container'
import supreme_court from '../../assets/images/supreme_court.jpg'
import {mediaQueries} from '../Reusable/Container'

const practiceAreas = ['Family Law', 'Litigation', 'Civil Rights', 'Personal Injury', 'Estate']


const QuestionComponentWrapper = styled(Container)`
    display: flex;
    position: relative;
    height: 100vh;
    margin-bottom: 15%;
    ${mediaQueries('mobileL')`
        height: 100vh;
        flex-direction: column;
    `}

.practice-area{
    position: absolute;
    right: 15%;
    top: 3%;
    z-index: 1;
    ${mediaQueries('mobileL')`
        position: relative;
        right: 0;
        padding-left: 15px;
    `}
}
    h1 {
        color: ${props => props.theme.secondary.color};
        font-size: ${props => props.theme.default.h1_fontSize};
        ${mediaQueries('mobileL')`{
            font-size: 58px;
        `}
`

const Left = styled(FlexDiv)`
    flex: 1;
    width: 28%;
        ${mediaQueries('mobileL')`
            width: 100%;
            flex-direction: column;
            flex-wrap: nowrap;
            svg {
                display: none;
            }
    `}
    justify-content: flex-end;
    align-content: center;
    svg {
        height: 66%;
        width: 28%;
        image {
            height: 100%;
        }
    }
    .connect{
        height: 100%;
    }
    .core {
        align-self: center;
    }
`
const Middle = styled(FlexDiv)`
    z-index: 2;
    flex-wrap: wrap;
    flex: 2;
    margin-top: 4%;
    padding: 5px 10px;
    ${mediaQueries('mobileL')`
        flex-direction: column;
        justify-content: flex-start;
    `}
    p {
        ${mediaQueries('mobileL')`
            font-size: 26px;
            padding: 0 5px;
            line-height: 44px;
        `}
        color: ${props => props.theme.default.color};
        font-size: 32px;
        line-height: 53px;
    }
    .svg-info {
        ${mediaQueries('mobileL')`
            height: 100%;
            width: 45%;
        `}
        height: 19%;
        width: 44%;
            image {
                width: 97%;
            }
        }
`

const Right = styled(FlexDiv)`
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    img {
        position: absolute;
        top: 0;
        height: 100%;
        object-fit: contain;
        ${mediaQueries('mobileL')`
            opacity: 30%;
        `}
    }
`

const Questions = () => {
    return (
        <QuestionComponentWrapper full fullVertical>
            <Left>
                <div className="practice-area">
                    <h1>How?</h1>
                </div>
            </Left>
            <Middle justifyCenter flowColumn> 
                <p>How should I form an LLC?</p>
                <p>How do I file as an independent contractor?</p>
                <p>How does power of attorney work?</p>
                <p>How do I avoid probate?</p>
            </Middle>  
            <Right>
                <img src={supreme_court} alt=""/>
            </Right>
        </QuestionComponentWrapper>
    )
};

export default Questions;