import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <div>
               <h3 className="individualFeedHeading">{this.props.feedName} </h3> 
               <p className="individualFeedParagraph">{this.props.feedContent}</p>
            </div>
        )
    }
}

export default Post
