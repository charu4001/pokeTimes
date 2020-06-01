import React,{Component} from 'react';
import axios from 'axios';


class Post extends Component{
    state ={
        //id:null
        post: null
    }
    
    componentDidMount(){    
        //console.log(this.props);
        let id = this.props.match.params.post_id;
        console.log(new Date().toLocaleString());
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res =>{
            this.setState({
                post: res.data
            });
            console.log(new Date().toLocaleString());
            //console.log(res);
        // this.setState({
        //     id: id
        // })
        });
    }

    render(){
        const post= this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>

        ) : (
            <div className="center">Loading...</div>
        )


        return(
        <div className="container">
            {post}
        </div>
        )

    }
}

export default Post;