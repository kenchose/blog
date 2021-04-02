import React from "react";

import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPosts(); // when comp is rendered this action creator is called
	}
	render() {
		return <div>PostList</div>;
	}
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
