import React, { Component } from 'react';
import Comments from './comments'

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentsID: this.props.singleLink.id,
            comment: ''
        }
    }


    changeInput = (e) => {
        this.setState ({
            commentsID: this.props.singleLink.id,
            comment: e.target.value
        })
        console.log(this.state)
    }


    handleClick = (e) => {
        e.preventDefault();
        const memeComment = {
            commentsID:this.state.commentsID,
            comments:this.state.comment
        }
        console.log(`memeCOmment :${ memeComment.comments}`)
        
        this.props.addComment(memeComment)

         console.log(this.props.comments)
        this.setState({
            commentsID: this.props.singleLink.id,
            comment: ''
        })
        console.log('rerendered state')

    }
    

    render() {
      

        return (
            <div id='addComment'>
                <h3>Add a comment: </h3>
                <textarea  rows='5' cols='50' onChange={this.changeInput}  value={this.state.comment}/>
                <br/>
                <button onClick={this.handleClick}> Submit </button>
                
                <hr id='horizontalSplit'/>
                
                <h3 id ='comments'> Comments: </h3>
                <Comments comments={this.props.comments} singleLink={this.props.singleLink} />
            </div>

        )
    }
}

export default AddComment;