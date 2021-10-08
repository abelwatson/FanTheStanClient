import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import apiURL from '../../../helpers/environment';

type updateProps = {
    rToBeUpdated: {
        heroVillain: string
        review: string
        id: number
    }
    rUpdateOff: () => void
    sessionToken: string | null
    viewMyReviews: () => void
    apiErr: string
}

type updateState = {
    rBodyToUpdate: string,
    heroVillain: string
}

export default class UpdateReview extends React.Component<updateProps, updateState> {
    constructor(props: updateProps) {
        super(props)
        this.state = {
            rBodyToUpdate: this.props.rToBeUpdated.review,
            heroVillain: this.props.rToBeUpdated.heroVillain
        }
    }

    handleUpdate = async () => {
        const rUpdateErr = `Review could not be updated.`;
        const reviewBody = {
            review: {
                review: this.state.rBodyToUpdate
            }
        }
        try {
            const res = await fetch(`${apiURL}/review/update/${this.props.rToBeUpdated.id}`, {
                method: "PUT",
                body: JSON.stringify(reviewBody),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.sessionToken}`
                })
            })
            const json = await res.json()
            alert(`Review has been updated.`)
            this.props.rUpdateOff()
            this.props.viewMyReviews()
            console.log(json)
        } catch (err) {
            alert(`${rUpdateErr}${this.props.apiErr}`)
            console.log(err)
        }
    }

    render() {
        return (
            <Modal isOpen={true}>
                <ModalHeader>Update your review here</ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.handleUpdate()
                    }}>
                        <div>
                            <label htmlFor='heroVillain'>Character: {this.state.heroVillain}</label>
                            <br />
                            <label htmlFor='reviewBody'>Review to Update:</label>
                            <br />
                            <input name='reviewBody' defaultValue={this.props.rToBeUpdated.review} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ rBodyToUpdate: e.target.value })} />
                            <br />
                            <button type="submit">Update</button>
                            <button onClick={() => { this.props.rUpdateOff(); this.props.viewMyReviews() }}>Cancel Update</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        )
    }
}