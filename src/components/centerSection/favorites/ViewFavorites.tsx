import React from 'react';
import { Table } from 'reactstrap'
import AddFavorites from './AddFavorites'
import apiURL from '../../../helpers/environment';

type FavoritesProps = {
    sessionToken: string | null
    apiErr: string
}

type FavoritesState = {
    myFavorites: Favorites[],
}

type Favorites = {
    heroVillain: string
    id: number
}



export default class ViewFavorites extends React.Component<FavoritesProps, FavoritesState> {
    constructor(props: FavoritesProps) {
        super(props)
        this.state = {
            myFavorites: [],
        }
    }

    viewMyFavorites = async () => {
        try {
            const res = await fetch(`${apiURL}/favorites/mine`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.props.sessionToken}`
                }
            })
            const myJson = await res.json();
            const myFavs = await myJson.userFavorite
            this.setState({ myFavorites: myFavs })
        } catch (err) {
            alert(`${this.props.apiErr}`)
            console.log(err)
        }
    }

    componentDidMount = (): void => {
        this.viewMyFavorites();
    }

    deleteFavorite = async (favorites: any) => {
        const confirm = prompt("Remove Hero?", "Yes")
        if (confirm) {
            try {
                const removeHero = await fetch(`${apiURL}/favorites/delete/${favorites.id}`, {
                    method: "DELETE",
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.props.sessionToken}`
                    })
                })
                console.log(removeHero)
                this.viewMyFavorites()
            } catch (err) {
                alert(`${this.props.apiErr}`)
                console.log(err)
            }
        }
    }


    favoritesMapper = (): JSX.Element[] => {
        return this.state.myFavorites.map((favorites: Favorites) => {
            return (
                <tbody>
                    <tr key={favorites.id}>
                        <td>{favorites.heroVillain}</td>
                        <td><button onClick={() => { this.deleteFavorite(favorites) }}>Delete Hero</button></td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        return (
            <div>
                <AddFavorites viewMyFavorites={this.viewMyFavorites} sessionToken={this.props.sessionToken} apiErr={this.props.apiErr} />
                My Favorites
                <Table>
                    {this.favoritesMapper()}
                </Table>
            </div>
        )
    }
}
