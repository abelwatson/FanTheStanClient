import React from 'react';
import { Label, FormInput, AddFavButton } from '../../styles/styles'
import apiURL from '../../../helpers/environment'

type AddRevProps = {
    sessionToken: string | null
    apiErr: string
}

type AddRevState = {
    heroVillain: string,
    imageURL: null,
    review: string
    like: null
    dislike: null
}

export default class AddReview extends React.Component<AddRevProps, AddRevState> {
    constructor(props: any) {
        super(props)
        this.state = {
            heroVillain: '',
            imageURL: null,
            review: '',
            like: null,
            dislike: null
        }
    }


    handleAddReview = async () => {
        const AddRevErr = 'Your review could not be added.';
        const reviewsBody = {
            review: {
                heroVillain: this.state.heroVillain,
                review: this.state.review,
                imageURL: null,
                like: null,
                dislike: null,
            }
        }

        try {
            const res = await fetch(`${apiURL}/review/create`, {
                method: "POST",
                body: JSON.stringify(reviewsBody),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
            })
            console.log(res)
            alert(`Review has been added to hero.`)
        } catch (err) {
            alert(`${AddRevErr}${this.props.apiErr}`)
            console.log(err)
        }
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.handleAddReview()
                this.setState({ heroVillain: '' })
                this.setState({ review: ''})
                this.setState({ imageURL: null })
                this.setState({ like: null})
                this.setState({ dislike: null})
            }}>
                <div>
                    <Label htmlFor='heroVillain'>Hero Name</Label>
                    <br />
                    <FormInput name='heroVillain' value={this.state.heroVillain} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ heroVillain: e.target.value })} />
                    <br />
                    <br />
                    <Label htmlFor='review'>Review</Label>
                    <br />
                    <FormInput name='review' value={this.state.review} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ review: e.target.value })} />
                    <AddFavButton type='submit' >Give Review</AddFavButton>
                    
                </div>
            </form>

        )
    }
}