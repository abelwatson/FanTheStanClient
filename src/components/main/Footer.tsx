import React from 'react';
import { FooterStyle, FooterBox, Row, Column, FooterLink, Heading } from '../styles/styles';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

export class Footer extends React.Component {
    render() {
        return (
            <FooterStyle>
                <FooterBox>
                    <Row>
                        <Column>
                            <Heading style={{}}>Creators</Heading>
                            <FooterLink href="https://www.linkedin.com/in/abel-watson/" target="_blank">
                                {/* <LinkedInIcon />  */}
                                Abel Watson</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Disclaimer</Heading>
                            <FooterLink style={{ fontSize: 8 }} href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" > Unless otherwise stated, the content of this page is licensed under Creative Commons Attribution-ShareAlike 3.0 License </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Resources</Heading>
                            <FooterLink href="https://superherostuff.com/" target="_blank"> Superhero Merchandise </FooterLink>
                        </Column>
                        <Column>
                            <Heading>Issues</Heading>
                            <FooterLink href="https://github.com/abelwatson/FanTheStanClient/issues" target="_blank">
                                {/* <GitHubIcon />  */}
                                GitHub Repository</FooterLink>
                        </Column>
                    </Row>
                </FooterBox>
            </FooterStyle>
        )
    }
}

export default Footer;
