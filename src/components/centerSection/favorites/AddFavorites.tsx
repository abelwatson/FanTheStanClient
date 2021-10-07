import React from 'react';
import { Label, FormInput, AddFavButton } from '../../styles/styles'
import apiURL from '../../../helpers/environment'

type AddFavsProps = {
    sessionToken: string | null
    apiErr: string
    viewMyFavorites: () => void
}

type AddFavsState = {
    heroVillain: string,
    imageURL: null,
}

export default class AddFavorites extends React.Component<AddFavsProps, AddFavsState> {
    constructor(props: any) {
        super(props)
        this.state = {
            heroVillain: '',
            imageURL: null,
        }
    }


    handleAddFavorite = async () => {
        const AddFavErr = 'Your favorite could not be added.';
        const favoritesBody = {
            favorites: {
                heroVillain: this.state.heroVillain,
                imageURL: null,
            }
        }

        try {
            const res = await fetch(`${apiURL}/favorites/create`, {
                method: "POST",
                body: JSON.stringify(favoritesBody),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
            })
            console.log(res)
            alert(`Hero has been added to your favorites.`)
            this.props.viewMyFavorites()
        } catch (err) {
            alert(`${AddFavErr}${this.props.apiErr}`)
            console.log(err)
        }
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.handleAddFavorite()
                this.setState({ heroVillain: '' })
                this.setState({ imageURL: null })
            }}>
                <div>
                    <Label htmlFor='heroVillain'>Hero/Villain Name</Label>
                    <br />
                    <FormInput name='heroVillain' value={this.state.heroVillain} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ heroVillain: e.target.value })} />
                    <AddFavButton type='submit' >Add to Favorites</AddFavButton>
                </div>
            </form>

        )
    }
}