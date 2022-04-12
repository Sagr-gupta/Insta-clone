import React from 'react'
import "./mainSection.css"
import PostCard from './PostCard';


class mainSection extends React.Component {
    constructor(){
      super();
      this.state = {
       post:posts[0],
       vis:false
        }
    }
    
 
    componentDidMount() {
        // this.setState({...this.props.postData});
        console.log(this.state.post)
        console.log(posts[0]+"jkajsk")
      }
    
      componentDidUpdate(){
      }  
   
    
  
  
    render(){
      return(
    <div class= "main-section">

        <header>
        {this.state.vis==true?<PostCard posts={this.state.post} />:null}

<div class="container">

    <div class="profile">

        <div class="profile-image">

            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>

        </div>

        <div class="profile-user-settings">

            <h1 class="profile-user-name">janedoe_</h1>

            <button class="btn profile-edit-btn">Edit Profile</button>

            <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

        </div>

        <div class="profile-stats">

            <ul>
                <li><span class="profile-stat-count">164</span> posts</li>
                <li><span class="profile-stat-count">188</span> followers</li>
                <li><span class="profile-stat-count">206</span> following</li>
            </ul>

        </div>

        <div class="profile-bio">

            <p><span class="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

        </div>

    </div>

</div>

</header>

<main>

<div class="container">

    <div class="gallery">

        {posts.map(_post => ( <div class="gallery-item" tabindex="0"  onClick={(e)=>{this.setState({post: _post})
                                                                    console.log(this.state.post)
                                                                    this.setState({vis:true})
                                                                    // this.componentDidUpdate()
                                                                    }}>
<img src={_post.image} class="gallery-image" alt=""/>
   

<div class="gallery-item-info">

    <ul>
        <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> {_post.likesCount}</li>
        <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> {_post.commentCount}</li>
    </ul>

</div>

</div>
))


}




      

{/* <PostCard/> */}

           

    </div>

    <div class="loader"></div>

</div>


</main>

    </div>
    );
}
}
  
  


const posts=[
    { likesCount:200,
    poster: {
      name: "sagarc",
      profile_picture: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
    commentCount:10,
    comments: [
        { user: "comment_dude", comment: "This is a good pic!" },
        { user: "bruh.guy", comment: "Bruh, what is this picture?" }
    ]}
,{ likesCount:200,
    poster: {
      name: "sagarchut",
      profile_picture: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
    commentCount:10,
    comments: [
        { user: "comment_dude", comment: "This is a good pic!" },
        { user: "bruh.guy", comment: "Bruh, what is this picture?" }
    ]},
    { likesCount:200,
        poster: {
          name: "sagarlav",
          profile_picture: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        commentCount:10,
        comments: [
            { user: "comment_dude", comment: "This is a good pic!" },
            { user: "bruh.guy", comment: "Bruh, what is this picture?" }
        ]}];


export default mainSection