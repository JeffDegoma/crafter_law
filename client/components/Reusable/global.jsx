import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
    

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
   
    html, body {
        background: #004C70;
        font-family: 'Scheherazade', serif;   
        
        h1{
            font-weight: 400;  
            letter-spacing: 1.2px; 
        }
       
}
`
export const theme = {

    primary : {
        color: '#004C70', //blue
        buttonColor: '#FFDB5A',
        buttonFontSize: '18px'
    },
    
    secondary: {
        color: '#FFDB5A', //yellow
        
    },
    default: {
        color: '#fff',
        h1_fontSize: '64px',
        h2_fontSize: '58px',
        p_mobileL_fontSize: '26px'
    },
}    


export default GlobalStyle;