import React, {Component} from 'react';

interface ViewReviewProps {
    // sessionToken: string |null
}

interface ViewReviewState {

}

export default class ViewReview extends Component<ViewReviewProps, ViewReviewState> {
    render() {
        return(
            <div>
                Viewing My Reviews
            </div>
        )
    }
}