import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        
    
        this.state = {
             likeCount : 0,
             comment:'',
             name:'',
             arrayOfComments : []
        }

        this.likeClickHandler = this.likeClickHandler.bind(this);
        this.addCommentToarrayOfComments = this.addCommentToarrayOfComments.bind(this);
    }
    
    likeClickHandler(){
        this.setState({
            likeCount : this.state.likeCount+1
        })
    }

    commentFieldChanged = (event) => {
        this.setState({
            comment : event.target.value
        })
    }
    nameFieldChanged = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    addCommentToarrayOfComments (){         // not working as a normal function

        if(this.state.comment && this.state.name){

            var commentAndNameObject = {
                comment : this.state.comment,
                name : this.state.name
            }
            this.state.arrayOfComments.push(commentAndNameObject)
            console.log(this.state.arrayOfComments)
            this.setState({
                arrayOfComments: this.state.arrayOfComments
            })
            
        }

        this.setState({     // change input field to null after submit
            comment:'',
            name:''
        })
    }

    render() {
        return (
            <div>
                <div className="likeCounts">
                     {this.state.likeCount} Likes
                </div>  
               <button className="likeButton" onClick={this.likeClickHandler}></button>
               <div>
                <div className="inputFields">
                        <input className="inputFieldsName" type="text" value={this.state.name} onChange={this.nameFieldChanged} placeholder="Your Name"></input>

                        <input className="inputFieldsComment" type="text" value={this.state.comment} onChange={this.commentFieldChanged} placeholder="Comment Something"></input>
                </div>
                    <button className="submitComment" onClick={this.addCommentToarrayOfComments}>Submit Comment</button>
               </div>
               <div className="resultArea">
                    {
                        this.state.arrayOfComments.length ? 
                        this.state.arrayOfComments.map(individualComments => 
                            <div key={individualComments.id} className="individualResultArea">
                                <span className="resultName">{individualComments.name} : </span> 
                                <span className="resultComment">{individualComments.comment}</span>
                            </div>) 
                        :null
                    } 
               </div>
            </div>
        )
    }
}

export default Input
