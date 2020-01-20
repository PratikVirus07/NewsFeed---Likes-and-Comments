import React, { Component } from 'react'
import Post from './Post'
import Input from './Input'


class IndividualFeed extends Component {
    render() {
        return (
            <div className="individualFeedCard">
                <Post feedName = {this.props.feedName} feedContent = {this.props.feedContent}></Post>
                <Input></Input>
            </div>
        )
    }
}

export default IndividualFeed
