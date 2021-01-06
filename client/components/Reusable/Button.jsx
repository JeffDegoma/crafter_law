import styled from 'styled-components'


const Button = styled.button`

    --props-variant-primary-background-color:  ${props => props.theme.primary.buttonColor};
    --props-variant-default-background-color: #454545;
    --props-width-large: 14rem;
    --props-width-default: 5%;
    --props-height-large: 4rem;
    --props-height-default: 20px;
    --props-color-primary: #fff;
    --props-color-default: #fff;
    --props-fontsize-primary: 18px;
    --props-fontsize-default: 24px;

    


    background-color: ${props => 
        props.variant === "primary" ? 
        "var(--props-variant-primary-background-color)" : 
        "var(--props-variant-default-background-color)" };
    width: ${props => 
        props.width === "large" ? 
        "var(--props-width-large)" : 
        "var(--props-width-default)" };
    height: ${props =>
        props.height === "large" ?
        "var(--props-height-large)" : 
        "var(--props-height-default)" };
    color: ${props =>
        props.color === "primary" ?
        "var(--props-color-primary)" :
        "var(--props-color-default)" };
    font-size: ${props =>
        props.fontSize === "primary" ?
        "var(--props-fontsize-primary)" :
        "var(--props-fontsize-default)"
    };
    }
    :hover {
        background: white;
        border: 3px solid ${props => props.theme.secondary.color};
        transition:  .2s ease-in;
        -webkit-transition:  .2s ease-in;
    }

    border-radius: 10px;
    border: none;
    outline: none;
    cursor: 
    pointer;
    font-size: 18px; //default
    text-transform: uppercase;
    transition:  .2s ease-in;
    -webkit-transition:  .2s ease-in;
`


export default Button;