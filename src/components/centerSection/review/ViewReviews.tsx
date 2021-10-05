import React, {Component} from 'react';
import CreateReview from './CreateReview'

interface ViewReviewProps {
    sessionToken: string | null
    apiErr: string
}

interface ViewReviewState {

}

export default class ViewReview extends Component<ViewReviewProps, ViewReviewState> {
    render() {
        return(
            <div>
                <CreateReview sessionToken={this.props.sessionToken} apiErr={this.props.apiErr}/>
                Viewing My Reviews
            </div>
        )
    }
}