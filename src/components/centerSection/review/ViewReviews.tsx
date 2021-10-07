import React from 'react';
import CreateReview from './CreateReview'
import { Table } from 'reactstrap'
import apiURL from '../../../helpers/environment';

interface ReviewProps {
    sessionToken: string | null
    apiErr: string
}

interface ReviewState {
    myReviews: myReviews[],
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
            const myRev = await myJson.userReview
            this.setState({ myReviews: myRev })
            console.log(this.state.myReviews)
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

    reviewsMapper = (): JSX.Element[] => {
        return this.state.myReviews.map((myReviews: myReviews) => {
            return (
                <tbody>
                    <tr key={myReviews.id}>
                        <td>{myReviews.heroVillain}</td>
                        <td><button onClick={() => { this.deleteReview(myReviews) }}>Delete Review</button></td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        return(
            <div>
                <CreateReview viewMyReviews={this.viewMyReviews} sessionToken={this.props.sessionToken} apiErr={this.props.apiErr} />
                My Reviews
                <Table>
                    {/* {this.reviewsMapper} */}
                    {this.viewMyReviews}
                </Table>
            </div>
        )
    }
}