import React from 'react';
import styled from 'styled-components'
import {Column} from './Reusable/Flex'
import {mediaQueries} from './Reusable/Container'


export const Customers = styled(Column)`
    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
    display: flex;
    flex-flow: column;
    height: 100%;
    cursor: pointer;
    
    img {
        object-fit: cover;
        object-position: center;
        height: 75%;
        width: 100.3%;
        
    }
    img:hover{
        opacity: .5;
    }
    p {
        font-size: 26px;
        ${mediaQueries('mobileL')`
            font-size: 22px;
        `} 
        margin: auto;
        color: #454545;
        
    }
`

const Services = ({...props}) => {
    
    const handleClick = (val) => {
        props.labelGetter(val) //from Tabs
    }
   
    {
        return props.data.map((obj, i) => {
            return (
                <Customers three key={i} label={obj.service} onClick={()=> handleClick(obj.service)} >
                    <img src={obj.image} alt=""/>
                        <p>{obj.service}</p>
                </Customers>
            )
        })
    } 
};

export default Services;