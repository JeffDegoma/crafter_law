import React from 'react';
import styled from 'styled-components'
import Container from './Reusable/Container'
import whatsapp from '../assets/icons/whatsapp.svg'
import fb from '../assets/icons/fb.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/mail.svg'
import {mediaQueries} from './Reusable/Container'


const FooterWrapper = styled(Container)`
    height: 30vh;
    padding-left: 135px;
    ${mediaQueries('mobileL')`
        padding-left: 0;
    `}
`

const FooterContent = styled.div`
  
    footer .footer-cols {
        width: 70vw;
        ${mediaQueries('mobileL')`
        width: 90vw;
        `}

        margin: auto;
        padding: 7rem 1rem;
        div {
            margin-bottom: 1rem;
        }
    }
    h3 {
        font-size: ${props => props.theme.default.p_mobileL_fontSize};
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        color: ${props => props.theme.secondary.color};
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    ul {
        list-style: none;
        column-count: 2;
        li {
            margin-bottom: 20px;
            margin-right: 1.5rem;
            font-size: 18px;
        }
    
        li a {
            text-decoration: none;
            color: ${props => props.theme.default.color};
        }
    }
    
    
    .follow-us {
        ul {
            display: flex;
        }
    }
    .copyright {
        color: #9f9f9f;
    }
]
`
    const date = new Date()
    const year = date.getFullYear()

const Footer = () => {

    return (
        <FooterWrapper fullVertical>
            <FooterContent>
            <footer>
                <div className="footer-cols">
                    <div className="company">
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Vlog</a>
                            </li>
                            <li>
                                <a href="#">Our Headquarters</a>
                            </li>
                            <li>
                                <a href="#">For Individuals</a>
                            </li>
                            <li>
                                <a href="#">For Lawyers</a>
                            </li>
                            <li>
                                <a href="#">Practice Areas</a>
                            </li>
                        </ul >
                    </div>
                    <div className="follow-us">
                        <h3>Follow Us</h3>
                        <ul >
                            <li>
                                <a href="#"><img src={fb} alt=""/></a>
                            </li>
                            <li>
                            <a href="#"><img src={linkedin} alt=""/></a>

                            </li>
                            <li>
                            <a href="#"><img src={twitter} alt=""/></a>

                            </li>
                            <li>
                            <a href="#"><img src={whatsapp} alt=""/></a>
                            </li>
                            <li>
                            <a href="#"><img src={mail} alt=""/></a>
                            </li>
                        </ul >
                    </div>
                    <div className="overview">
                        <h3>Overview</h3>
                        <ul >
                            <li>
                                <a href="#">General User Terms</a>
                            </li>
                            <li>
                                <a href="#">Lawyer Terms</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Why The Crafter Law Group?</a>
                            </li>
                        </ul >
                    </div>
                <div className="copyright">
                 &copy; {year} The Crafter Law Group, Inc. All rights reserved.
                </div>
                </div>
  </footer>
            </FooterContent>
        </FooterWrapper>
    );
};

export default Footer;
