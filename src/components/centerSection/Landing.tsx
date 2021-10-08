import React from 'react';
// import env from "react-dotenv";
import { Table } from 'reactstrap';

type MainProps = {
    apiErr: string
}

type MainState = {
    displayCharacters: Characters[],
    alignment: string,
    publisher: string,
    image: string,
}

type Characters = {
    name: string,
    publisher: string,
    alignment: string,
    image: string,
    id: number,
}

export class Landing extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props)
        this.state = {
            displayCharacters: [],
            alignment: '',
            publisher: '',
            image: '',
        }
    }

    displayCharacters = async () => {
        const superHeroApi = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
        try {
            const res = await fetch(superHeroApi, {
                method: "GET"
            })
            const results = await res.json();
            this.setState({ displayCharacters: results })
            // this.setState({ alignment: results.biography.alignment})
            // this.setState({ publisher: results.biography.publisher})
            // this.setState({ image: results.images.md})
        } catch (err) {
            alert(`${this.props.apiErr}`)
        }

    }

    componentDidMount = (): void => {
        this.displayCharacters();
    }

    characterMapper = (): JSX.Element[] => {
        return this.state.displayCharacters.map((characters: Characters, ) => {
            return (
                <tbody>
                    <tr key={characters.id}>
                        <td>{characters.name}</td>
                        {/* <td>{characters.publisher}</td> */}
                        {/* <td>{characters.alignment}</td> */}
                        {/* <td><button>Add to Favorites</button></td> */}
                        {/* <td><button>Give Review</button></td> */}
                    </tr>
                </tbody>
            )
        })
    }



    render() {
        return (
            <div>
                Main Page for all Heros or Villains
                <br />
                <Table>
                {this.characterMapper()}
                </Table>
            </div>
        )
    }
}

export default Landing;
