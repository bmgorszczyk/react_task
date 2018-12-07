import React from "react";
import styled from "styled-components";
import PostAuthor from "./PostAuthor";
import PropTypes from "prop-types";

class SinglePost extends React.Component {

    static Prototypes = {
        currentPost: PropTypes.shape({
            category: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.shape({
                url: PropTypes.string,
                alt: PropTypes.string
            }),
            content: PropTypes.string,
            author: PropTypes.string,
            authorAvatar: PropTypes.shape({
                url: PropTypes.string,
                alt: PropTypes.string
            })
        }),
    }

    constructor(props) {
        super(props);
        this.state = {
            whiteMaskVisible: false
        }
    }

    OpenImageModal = () => {
        this.setState({whiteMaskVisible: true});
    }

    HideImageModal = () => {
        this.setState({whiteMaskVisible: false});
    }

    render() {

        const { currentPost } = this.props;
        const { whiteMaskVisible } = this.state;

        return (
            <Wrapper>
                <SImageWrapper initialPose="hidden" pose="visible">
                    <SOuterImage pose={whiteMaskVisible ? 'centered' : 'none'}>
                        <SInnerImage onClick={this.OpenImageModal} style={{backgroundImage: "url(" + currentPost.image.url + ")"}}  pose={whiteMaskVisible ? 'centered' : 'none'} />
                    </SOuterImage>
                    <SWhiteMask style={{"pointerEvents": whiteMaskVisible ? "all" : "none"}} onClick={this.HideImageModal} pose={whiteMaskVisible ? 'maskVisible' : 'maskHidden'}/>
                </SImageWrapper>
                <STextWrapper initialPose="hidden" pose="visible">
                    <Category>{currentPost.category} {currentPost.subCategory}</Category>
                    <Title>{currentPost.title}</Title>
                    <Content>{currentPost.content}</Content>
                    <PostAuthor
                        author={currentPost.author}
                        authorAvatar={currentPost.authorAvatar}
                    />
                </STextWrapper>
            </Wrapper>
        );
    } 
}

export default SinglePost;

const Wrapper = styled.div`
`

const SOuterImage = styled.div`
    height: 300px;
    width: 100%;
    position: absolute;
    top: 80px;
    overflow: hidden;
`

const SImageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: 0
    left: 0;
`

const SWhiteMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    visibility: visible;
    z-index: 2;
    top: 0;
    left: 0;
`

const STextWrapper = styled.div`
    padding: 5px 25px;
    box-sizing: border-box;
    margin-top: 300px;
`

const SInnerImage = styled.div`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%
    visibility: visible;
    z-index: 3;
    cursor: pointer;
`

const Category = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    margin: 20px 0;
`

const Content = styled.div`
    color: #bcbcbc;
    text-align: left;
    font-size: 15px;
    line-height: 20px;
    margin: 30px 0;
    font-family: 'Bitter', cursive;
`

const Title = styled.h3`
    text-align: left;
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    margin: 10px 0;
    color: black;
    font-family: 'Lobster', cursive;
`;

