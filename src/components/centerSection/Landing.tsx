import React from 'react';
// import env from "react-dotenv";

type MainProps = {

}

type MainState = {

}

export class Landing extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props)
        this.state = {
            json: "",
            displayCharacters: ""
        }
    }

    displayCharacters = async () => {
        const superHeroApi = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';

        fetch(superHeroApi, {
            method: "GET"
        } )
        .then ((results) => {
            return results.json();
        })
        .then((json) => {
            displayResults(json)
        })

        function displayResults(json: any) {
            console.log(json)
        }
    }


    render() {
        return (
            <div>
                Main Page for all the heros
                {/* <button onClick={this.displayCharacters}>Show Character in Console</button> */}
            </div>
        )
    }
}

export default Landing;
