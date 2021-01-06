import styled from 'styled-components'

const Container = styled.div `

    padding-right: ${props => {
        if (props.full) return 0
        if (props.small) return '15px'
        return 'calc((100vw - 960px) / 2)'
    }};

    padding-left: ${props => {
        if (props.full) return 0
        if (props.small) return '15px'
        return 'calc((100vw - 960px) / 2)'
    }};
    
    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};


    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};

    `
    //set media queries
    export const size = {
        //key
        mobileS: '320', 
        mobileM: '375',
        mobileL: '980',
    }

    export const portrait = {
        mobile_l_landscape: '321'
    }
    // and (min-width: ${portrait[type]}px)

    export const mediaQueries = (key, type) => {
        return style => `@media(max-width: ${size[key]}px){ ${style}}`
    }

export default Container;

