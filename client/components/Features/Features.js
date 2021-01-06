import React from 'react';
import FlexDiv from '../Reusable/Flex'
import styled from 'styled-components'
import Tabs from '../Reusable/Tab/Tabs'
import Services from '../Services'
import BottomBlurb from '../BottomBlurb'
import {mediaQueries} from '../Reusable/Container'


    
const Top = styled(FlexDiv)`
height: 40vh;
width: 100%;
background: #F5F4F4;

`
const Left = styled(FlexDiv)`
    height: 100%;
    flex: 1;
    background: ${props => props.theme.primary.color};
    ${mediaQueries('mobileL')`
        display: none;
    `}
    
    `
const Right = styled(FlexDiv)`
    height: 100%;
    flex: 3;
    flex-wrap: nowrap;

`

const Features = (props) => {
    return (
        <>
            <h1>We're here for you</h1>
            <Top>
                <Left></Left>
                <Right>
                    <Tabs logLabelToParent={props.logLabelToParent}
                          data={props.data}
                    >
                        <Services/>
                    </Tabs>
                </Right>
            </Top>
                <BottomBlurb activeLabel={props.activeLabel}
                             data={props.data}
                
                />
        </>
    );
};

export default Features;