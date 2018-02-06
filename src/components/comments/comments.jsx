import React, { Component } from 'react';


class Comments extends Component {
    render() {
        
        
        const { comments, singleLink } = this.props; // passing in the comments state and the id of the singleLink
        //comments is all comments in the state 
console.log(comments)
        const filterComments = comments.filter((meme)=> meme.commentsID ===singleLink.id
        )
        console.log(filterComments)
        //allCommentsofID returns an array an object of comments with that id
        const listedComments = filterComments.map ((meme)=>{
            return (
            
            <p class='listedComments' id={meme.commentsID}> 
            {meme.comments}
            </p>
        )})

        return (
            <div>
            {listedComments}

            </div>

        )
    }
}

export default Comments;