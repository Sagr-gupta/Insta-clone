import React from 'react'
import "./postCard.css"
import Card from './Card';
class PostCard extends React.Component {
    // state = {
    // posts: [
    //     {
    //     likes: 100,
    //     poster: {
    //         name: "turtlegal",
    //         profile_picture: "https://placeimg.com/100/100/animals"
    //     },
    //     image: "https://placeimg.com/650/650/animals/sepia?t=1564211187934",
        // comments: [
        //     { user: "comment_dude", comment: "This is a good pic!" },
        //     { user: "bruh.guy", comment: "Bruh, what is this picture?" }
        // ]
    //     }
    // ]
    // }
    componentDidMount() {
        // this.setState({...this.props.postData});
        console.log(this.props.posts)
      }
    render(){
    return (
        <>
        <Card postData={this.props.posts}/>
        </>
    );
    }
}
      
      


export default PostCard