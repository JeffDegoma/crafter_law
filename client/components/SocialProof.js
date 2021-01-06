import React from 'react';
import styled from 'styled-components'
import Container from './Reusable/Container'
import {mediaQueries} from './Reusable/Container'
import QuotationMarks from '../assets/images/quotation-marks.svg'
import FlexDiv from './Reusable/Flex'
import girl from '../assets/images/girl2.jpg' //should come from external resource
import guy from '../assets/images/guy.jpg' //should come from external resource
import group from '../assets/images/group.jpg' //should come from external resource
import talib from '../assets/images/talib.png' //should come from external resource


const reviews = [
    {
        name: 'Karimu',
        review: "So far my experience has been great. My case is still in progress, but so far everything has been smooth. I would recommend Abe Legal to others!", 
        location: 'Maryland',
        image: girl,
    },
    {
        name: 'Monica',
        review: "It’s affordable. I’ve already recommended one of my friends! I do appreciate it (the service). I feel like I’m on the right track!",
        location: 'Maryland',
        image: guy,
    },
    {
        name: 'Kelley & Adrianne',
        review: "Our business needs were met with professionalism and unparalleled service.",
        location: 'Maryland',
        image: group
    },
    {
        name: 'Taalib Saber',
        review: "It’s affordable. They (Crafter Law) have almost immediate access to a lawyer. They were able to schedule a consultation with a lawyer almost senselessly, virtually, all within a week’s time.",
        location: 'Maryland',
        image: talib
    },
    
]


const SocialProofWrapper = styled(Container)`
    background: linear-gradient(360deg, ${props => props.theme.default.color} 0,${props => props.theme.primary.color} 200.63%) no-repeat top;
    background-size: auto;
    background-size: auto;
    background-size: 100% 100%;
    opacity: 1;
    padding-left: 135px;
    ${mediaQueries('mobileL')`
        padding: 10px;
    `}

`
const SocialProofContent = styled(FlexDiv)`
    align-content: center;
    justify-content: space-evenly;
    ${mediaQueries('mobileL')`
        width: 100%;
    `}

    h1 {
        color: ${props => props.theme.secondary.color};
        font-size: ${props => props.theme.default.h1_fontSize};
        ${mediaQueries('mobileL')`
            font-size: 58px;
            line-height: 111.18%;
            width: 90%;
            padding-bottom: 2rem;
        `}
        padding: 5rem 0;

    }
  

    img {
        width: 6%;
        opacity: 10%;
    }
`

const SliderContainer = styled(FlexDiv)`
    width: 100%;
    height: 100%;
`

const SliderContent = styled(FlexDiv)`
    height: 90%;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    ul {
        display: flex;
        list-style: none;
        scroll-snap-type: x mandatory;
        li {
            margin-right: 5%;

            flex: 0 0 40%;
            scroll-snap-align: start;
        }
    }
    .review-container {
        padding: 3.4rem 2.5rem 2.5rem;
        height: 65vh;
        ${mediaQueries('mobileL')`
            
            height: 65vh;
            padding: 1rem 2.5rem 1.5rem;
            `}
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid #e6e9eb;
            border-radius: 25px;
            .top {
            line-height: 2em;
            p {
              color: #2b2a35; 
              font-size: 20px;
              padding-left: 1rem;
              font-family: poppins; 
              ${mediaQueries('mobileL')`
                
              `}
            }
        }
        .bottom {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 5rem;
                height: 6rem;
                border-radius: 50%;
                opacity: 1;
                margin-bottom: 5%;
            }
            h4 {
                font-size: 1.7rem;
            }
        }
    }
`

const SocialProof = () => {

    return (
        <SocialProofWrapper fullVertical>
            <SocialProofContent justifyCenter flowColumn>
                <h1>People are taking notice</h1>
                <SliderContainer alignCenter>
                    <SliderContent>
                        <ul>
                            {reviews.map(obj => {
                                return (
                                    <li>
                                    <div className="review-container">
                                        <div className="top">
                                            <img src={QuotationMarks} alt=""/>
                                            <p>{obj.review}</p>    
                                        </div> {/* top */}
                                        <div className="bottom">
                                            <img src={obj.image} alt=""/> 
                                            <h4>{obj.name}</h4>
                                        </div> 
                                    </div>
                                    </li>
                                )
                            })}
                          
                        </ul>
                    </SliderContent>
                </SliderContainer>
            </SocialProofContent>
        </SocialProofWrapper>
    );
};

export default SocialProof;