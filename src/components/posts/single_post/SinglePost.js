import React from "react";
import styled from "styled-components";
import PostAuthor from "./PostAuthor";
import PropTypes from "prop-types";
import posed from 'react-pose';

class SinglePost extends React.Component {

    static Prototypes = {
        currentPost: PropTypes.shape({
            category: PropTypes.string,
            subcategory: PropTypes.string,
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
                    <Category> {currentPost.category} </Category>
                    <SubCategory> {currentPost.subcategory} </SubCategory>
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

const ImageWrapper = posed.div({
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

const WhiteMask = posed.div({
    maskVisible: { 
        opacity: 0.85
    },
    maskHidden: { 
        opacity: 0
    }
})

const OuterImage = posed.div({
    centered: {
        top: 'calc(50% - 150px)',
        duration: 200,
        ease: 'linear'
    },
    none: {
        top: 80,
        duration: 200,
        ease: 'anticipate'
    }
})

const InnerImage = posed.div({
    centered: {
        scale: 1.05,
        duration: 200,
        ease: 'anticipate',
    },
    none: {
        scale: 1.4,
        duration: 200,
        ease: 'linear'
    }
})

const Wrapper = styled.div``

const SOuterImage = styled(OuterImage)`
    height: 300px;
    width: 100%;
    position: absolute;
    z-index: 3;
    top: 80px;
    overflow: hidden;
`

const SImageWrapper = styled(ImageWrapper)`
    width: 100%;
    height: 100%;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: 0
    left: 0;
`

const SWhiteMask = styled(WhiteMask)`
    width: 100%;
    height: calc(100% - 80px);
    background-color: white;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    visibility: visible;
    z-index: 2;
    top: 80px;
    left: 0;
`

const STextWrapper = styled(TextWrapper)`
    padding: 5px 25px;
    box-sizing: border-box;
    margin-top: 300px;
`

const SInnerImage = styled(InnerImage)`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%
    visibility: visible;
    z-index: 3;
    cursor: pointer;
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

const SubCategory = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    margin: 20px 0;
    display: inline-block;
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

