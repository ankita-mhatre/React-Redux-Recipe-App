import React, {Component} from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
class Post extends Component {
    // state = {
    // post: null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //       .then(res => {
    //         this.setState({
    //           post: res.data
    //         });
    //         //console.log(res.data);
    //       });
    //   }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render () {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post center title">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading Post</div>
        )
        return (
            <div className="container center">
                {post}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}
// to change state from component  
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);