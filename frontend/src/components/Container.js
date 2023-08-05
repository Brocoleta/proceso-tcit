import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getPosts, addPosts, deletePosts } from "../actions";
import TableContainer from "./Table";
import FormContainer from "./Form";

const Container = ({ posts, getPosts, addPosts, deletePosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <React.Fragment>
      <TableContainer
        posts={posts}
        getPosts={getPosts}
        deletePosts={deletePosts}
      ></TableContainer>
      <FormContainer addPost={addPosts}></FormContainer>
    </React.Fragment>
  );
};

const structuredSelector = createStructuredSelector({
  posts: (state) => state.posts,
});

const mapDispatchToProps = { getPosts, addPosts, deletePosts };

export default connect(structuredSelector, mapDispatchToProps)(Container);
