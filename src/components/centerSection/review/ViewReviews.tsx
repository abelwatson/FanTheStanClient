import React from 'react';
import CreateReview from './CreateReview'
import { Table } from 'reactstrap'
import apiURL from '../../../helpers/environment';
import UpdateReview from './UpdateReview'

interface ReviewProps {
    sessionToken: string | null,
    apiErr: string,
}

interface ReviewState {
    myReviews: myReviews[],
    CharReviews: string,
    rToBeUpdated: myReviews,
    rUpdateActive: boolean,
}

type myReviews = {
    heroVillain: string,
    review: string,
    id: number
}

export default class ViewReview extends React.Component<ReviewProps, ReviewState> {
    constructor(props: ReviewProps) {
        super(props)
        this.state = {
            myReviews: [],
            CharReviews: '',
            rToBeUpdated: {
                heroVillain: '',
                review: '',
                id: 0,
            },
            rUpdateActive: false,
        }
    }

    viewMyReviews = async () => {
        try {
            const res = await fetch(`${apiURL}/review/myReviews`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.props.sessionToken}`
                }
            })
            const myJson = await res.json();
            this.setState({ myReviews: myJson })
            this.setState({ CharReviews: myJson.review })
        } catch (err) {
            alert(`${this.props.apiErr}`)
            console.log(err)
        }
    }

    componentDidMount = (): void => {
        this.viewMyReviews();
    }

    deleteReview = async (myReviews: any) => {
        const confirm = prompt("Remove Review?", "Yes")
        if (confirm) {
            try {
                const removeReview = await fetch(`${apiURL}/review/delete/${myReviews.id}`, {
                    method: "DELETE",
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.props.sessionToken}`
                    })
                })
                console.log(removeReview)
                this.viewMyReviews()
            } catch (err) {
                alert(`${this.props.apiErr}`)
                console.log(err)
            }
        }
    }

    editReviews = (editReviews: any) => {
        this.setState({ rToBeUpdated: { review: editReviews.review, heroVillain: editReviews.heroVillain, id: editReviews.id } })
    };

    rUpdateOn = (): void => {
        this.setState({ rUpdateActive: true })
    }

    rUpdateOff = (): void => {
        this.setState({ rUpdateActive: false })
    }


    reviewsMapper = (): JSX.Element[] => {
        return this.state.myReviews.map((myReviews: myReviews) => {
            return (
                <tbody>
                    <tr key={myReviews.id}>
                        <td>{myReviews.heroVillain}</td>
                        <td>{myReviews.review}</td>
                        <td><button onClick={e => {
                            e.preventDefault()
                            this.editReviews(myReviews)
                            this.rUpdateOn()
                        }}>Update Review</button></td>
                        <td><button onClick={() => { this.deleteReview(myReviews) }}>Delete Review</button></td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        return (
            <div>
                <CreateReview viewMyReviews={this.viewMyReviews} sessionToken={this.props.sessionToken} apiErr={this.props.apiErr} />
                <Table>
                    <thead>
                        <th>Character</th>
                        <th>Review</th>
                    </thead>
                    {this.reviewsMapper()}
                    {this.state.rUpdateActive ? <UpdateReview apiErr={this.props.apiErr} rToBeUpdated={this.state.rToBeUpdated} rUpdateOff={this.rUpdateOff} sessionToken={this.props.sessionToken} viewMyReviews={this.viewMyReviews} /> : <></>}
                </Table>
            </div>
        )
    }
}