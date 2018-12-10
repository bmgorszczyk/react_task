import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostAuthor from "./PostAuthor";
import PostImage from "./PostImage";
import posed from 'react-pose';

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
                <PostImage 
                    whiteMaskVisible={whiteMaskVisible} 
                    OpenImageModal={this.OpenImageModal} 
                    HideImageModal={this.HideImageModal} 
                    imageUrl={currentPost.image.url} />
                <STextWrapper initialPose="hidden" pose="visible">
                    <Category> {currentPost.category} </Category>
                    <SubCategory> {currentPost.subcategory} </SubCategory>
                    <Title>{currentPost.title}</Title>
                    <Content>{currentPost.content}</Content>
                    <PostAuthor
                        author={currentPost.author}
                        authorAvatar={currentPost.authorAvatar}/>
                </STextWrapper>
            </Wrapper>
        );
    } 
}

export default SinglePost;

const TextWrapper = posed.div({
    visible: { 
        opacity: 1,
        y: 0,
        x: 0
    },
    hidden: { 
        opacity: 0,
        y: 5,
        x: 2
    }
});

const Wrapper = styled.div``

const STextWrapper = styled(TextWrapper)`
    padding: 5px 25px;
    box-sizing: border-box;
    margin-top: 300px;
`

const Category = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    margin: 20px 0;
    display: inline-block;

    &:after {
        content: "L";
        display: inline-block;
        margin: 0 15px;
        color: grey;
        font-size: 12px;
        transform: rotate(270deg) scale(-1, 1);
    }
`

const SubCategory = styled.p`
    text-transform: uppercase;
    display: inline-block;
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

