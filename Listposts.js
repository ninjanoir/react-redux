import React, { Component } from "react";
import Userpost from "./Userpost";
import { connect } from "react-redux";
import { fetchposts } from "./../actions";

class Listposts extends Component {
  componentDidMount() {
    this.props.fetchposts();
  }

  renderList = () => {
    const { posts } = this.props;

    if (!posts) {
      return <div class="ui loader"></div>;
    }

    return posts.map((post) => (
      <div className="item">
        <i className="large github middle aligned icon"></i>
        <div className="content">
          <h3 className="header">{post.title}</h3>
          <div className="description">{post.body}</div>
          <Userpost userId={post.userId} />
        </div>
      </div>
    ));
  };

  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchposts })(Listposts);
