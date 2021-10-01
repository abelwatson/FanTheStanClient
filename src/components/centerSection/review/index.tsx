import React, { Component } from "react";
// import CreateReview from "./CreateReview";
import ViewReviews from './ViewReviews';

interface ReviewIndexProps {
    // sessionToken: string | null
};

interface ReviewIndexState {

};

class ReviewIndex extends Component<ReviewIndexProps, ReviewIndexState> {
    constructor(props: ReviewIndexProps) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {/* <CreateReview  */
                /* sessionToken={this.props sessionToken}  */
                /* /> */}
                <ViewReviews />

            </div>
        );
    }
}

export default ReviewIndex;