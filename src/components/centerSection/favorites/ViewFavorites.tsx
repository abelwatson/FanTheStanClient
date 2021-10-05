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
            this.setState({ myFavorites: myJson })
            console.log(this.state.myFavorites)
        } catch (err) {
            alert(`${this.props.apiErr}`)
            console.log(err)
        }
    }

    componentDidMount() {
        this.viewMyFavorites();
    }

    deleteFavorite = async (journal: any) => {
        const confirm = prompt("Remove Hero?", "Yes")
        if (confirm) {
            try {
                const removeHero = await fetch(`${apiURL}/favorites/delete/id`, {
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


    favoritesMapper = () => {
        return this.state.myFavorites.map((favorites: Favorites, index) => {
            return (
                <tbody>
                    <tr key={index}>
                        <th scope='row'>{favorites.id}</th>
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
                <AddFavorites sessionToken={this.props.sessionToken} apiErr={this.props.apiErr} />
                My Favorites
                <Table>
                    {/* {this.favoritesMapper()} */}
                </Table>
            </div>
        )
    }
}
