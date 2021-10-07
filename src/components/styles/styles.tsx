import styled from 'styled-components';


export const Column = styled.div`
flex-direction: column;

`;

export const Row = styled.div`
display: grid;
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
	max-width: 1100px;
	margin: auto;
`;

export const SideBarStyle = styled.div`
    display: flex;
    background-color: #424242;
    width: 100%;
    min-height: 60vh;
    padding-top: 3%;
    padding-left: 1%;
    margin-right: 20%
    // position: relative;
`;

export const LogoutButton = styled.button`
width: 100%
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
background-color: indigo;
border: 2px solid black;
border-radius: 30px;
width: auto;
&:hover {
    color: #F6D132;
	transition: 200ms ease-in;
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

export const SearchBar = styled.input`

`;