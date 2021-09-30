import React, {Component} from 'react';

interface CreateReviewProps {
    // sessionToken: string |null
}

interface CreateReviewState {

}

export default class CreateReview extends Component<CreateReviewProps, CreateReviewState> {
    render() {
        return(
            <div>
                Adding a Review
            </div>
        )
    }
}