import React from 'react';
import "./mainSection.css";
import PostCard from './PostCard';


const posts=[
    { likesCount:200,
    poster: {
      name: "emilly__",
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
      name: "emilly_",
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
          name: "emilly_",
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
          name: "emilly_",
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
          name: "emilly_",
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
          name: "emilly_",
          profile_picture: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop"
        },
        image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
        commentCount:10,
        comments: [
            { user: "comment_dude", comment: "This is a good pic!" },
            { user: "bruh.guy", comment: "Bruh, what is this picture?" }
    ]}
];


class mainSection extends React.Component {
    constructor(){
        super();
        this.state = {
            id:0,
            post:posts[0],
            vis:false
        }
        this.add_comment = this.add_comment.bind(this);
        this.like = this.like.bind(this);
        this.vist = this.vist.bind(this);
    }
    
    vist(){
        this.setState({vis:!this.state.vis})
    }
 
    // componentDidMount() {
    //     this.setState({...this.props.postData});
    //     console.log(this.state.post)
    //     console.log(posts[0]+"jkajsk")
    // }  
    
    like(plus){
        const id=this.state.id;
        posts[id].likesCount += plus;
        this.setState({post:posts[id]})
        console.log(posts[id])
    }

    add_comment( _comment){
        const id=this.state.id;
        const _user=posts[id].poster.name;
        const a={user:_user,comment:_comment}
        posts[id].commentCount++;
        posts[id].comments= [a, ...posts[id].comments];
        console.log( posts[id])
        this.setState({post:posts[id]})
    }
  
    render(){
      return(
        <div className= "main-section">
            <header>
                {this.state.vis==true?<PostCard posts={this.state.post} 
                like={this.like}
                vist={this.vist}
                id={this.state.id}
                add_comment={this.add_comment}/>:null}
                <div className="container">
                    <div className="profile">
                        <div className="profile-image">
                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""/>
                        </div>

                        <div className="profile-user-settings">
                            <h1 className="profile-user-name">emilly_</h1>
                            <button className="btn profile-edit-btn">Edit Profile</button>
                        </div>

                        <div className="profile-stats">
                            <ul>
                                <li><span className="profile-stat-count">52</span> Posts</li>
                                <li><span className="profile-stat-count">988</span> Followers</li>
                                <li><span className="profile-stat-count">402</span> Following</li>
                            </ul>
                        </div>

                        <div className="profile-bio">
                            <p><span className="profile-real-name">Emilly Doe</span>         Apparently,The world is not a wish granting factory</p>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="container">
                    <div className="gallery">
                        {posts.map((_post,key) => ( 
                            <div class="gallery-item" tabindex="0"  onClick={(e)=>{this.setState({post: _post})
                                const num=key
                                this.setState({id:num})
                                this.setState({vis:true})
                                console.log(this.state.id)}}>
                                <img src={_post.image} class="gallery-image" alt=""/>
                                <div class="gallery-item-info">
                                    <ul>
                                        <li className="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fa fa-heart" aria-hidden="true"></i> {_post.likesCount}</li>
                                        <li className="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fa fa-comment" aria-hidden="true"></i> {_post.commentCount}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                        }
                   </div>
                </div>
            </main>
        </div>
        );
    }
}
  
export default mainSection