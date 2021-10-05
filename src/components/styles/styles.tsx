import styled from 'styled-components';


export const Column = styled.div`
flex-direction: column;
margin-left: 20px;
margin-right: -20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
grid-gap: 20px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(225px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
font-size: 12px;
text-decoration: none;

&:hover {
    color: #F6D132;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
`;

export const FooterStyle = styled.div`
min-height: 25vh;
`;

export const FooterBox = styled.div`
	flex-direction: column;
	justify-content: center;
	max-width: 1100px;
	margin: auto;
`;

export const SideBarStyle = styled.div`
    display: flex;
    background-color: #424242;
    color: antiquewhite;
    width: 100%;
    min-height: 60vh;
    padding-top: 3%;
    padding-left: 1%;
    position: relative;
`;

export const LogoutButton = styled.div`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
width: auto;
`;


export const HeaderStyle = styled.div`
    display: flex;
    background-color: indigo;
    color: antiquewhite;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 2%;
    min-height: 15vh;
`


export const Label = styled.label`

`;

export const FormInput = styled.input`

`;

export const AddFavButton = styled.button`

`;