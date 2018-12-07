import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "../../data";
import PostList from "../posts/post_list/PostList";
import SinglePost from "../posts/single_post/SinglePost";
import Nav from "../nav/Nav";

class Home extends React.Component {

    render() {
        return (
            <Router>
                <HomeWrapper>
                        <Nav></Nav>
                        <Route exact path="/" render={() => <PostList posts={data.posts}></PostList>}/>
                        <Route path="/post/:id" render={() => <SinglePost></SinglePost>}/>
                </HomeWrapper>
            </Router>
        );
    }
}

export default Home;

const HomeWrapper = styled.div`
  background-color: white;
`;
