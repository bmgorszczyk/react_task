import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import data from "../../data";
import PostList from "../posts/post_list/PostList";
import SinglePost from "../posts/single_post/SinglePost";
import Nav from "../nav/Nav";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPost: {
                category: "",
                title: "",
                image: {
                    url: "",
                    alt: ""
                },
                content: "",
                author: "",
                authorAvatar: {
                    url: "",
                    alt: ""
                }
            }
        }
    }

    componentDidMount(){
        // mocked data normaly received from REST API
        // suppose that every post has his own ID which will be a part of url of SinglePost page 
        // - technically the title of the post can also be part of URL, but should be formatted by specific function first for ex. "The Title" parsed by this function should be "the-title" - all for url.
        // In this recruitment task ID of the post will be next foreach loop index.

        this.setState({currentPost: data.posts[0]})
    }

    SetCurrentPost = post => {
        this.setState({currentPost: post});
    }
    render() {

        const { currentPost } = this.state;

        return (
            <Router>
                <HomeWrapper>
                    <MaxWidthWrapper>
                        <Nav></Nav>
                        <Route exact path="/" render={() => <PostList tags={data.tags} posts={data.posts} SetCurrentPost={this.SetCurrentPost} ></PostList>}/>
                        <Route path="/post/:id" render={() => <SinglePost currentPost={currentPost}></SinglePost>}/>
                    </MaxWidthWrapper>
                </HomeWrapper>
            </Router>
        );
    }
}

export default Home;

const HomeWrapper = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
`;

const MaxWidthWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
