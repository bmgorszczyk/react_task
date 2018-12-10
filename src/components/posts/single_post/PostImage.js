import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import posed from "react-pose";

const PostImage = ({ whiteMaskVisible, OpenImageModal, HideImageModal, imageUrl}) => {
    return (
        <SImageWrapper initialPose="hidden" pose="visible">
            <SOuterImage pose={whiteMaskVisible ? 'centered' : 'none'}>
                <SInnerImage imageUrl={imageUrl} onClick={OpenImageModal} pose={whiteMaskVisible ? 'centered' : 'none'} />
            </SOuterImage>
            <SWhiteMask whiteMaskVisible={whiteMaskVisible} onClick={HideImageModal} pose={whiteMaskVisible ? 'maskVisible' : 'maskHidden'}/>
        </SImageWrapper>
    );
}

PostImage.propTypes = {
    whiteMaskVisible: PropTypes.bool,
    OpenImageModal: PropTypes.func,
    HideImageModal: PropTypes.func,
    imageUrl: PropTypes.string
}

export default PostImage;

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
        top: 'calc(50% - 150px)'
    },
    none: {
        top: 80
    }
})

const InnerImage = posed.div({
    centered: {
        scale: 1.05
    },
    none: {
        scale: 1.4
    }
})

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

const SOuterImage = styled(OuterImage)`
    height: 300px;
    width: 100%;
    position: absolute;
    top: 80px;
    overflow: hidden;
    z-index: 3;
`

const SImageWrapper = styled(ImageWrapper)`
    width: 100%;
    height: 100vh;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    top: 0
    left: 0;
`

const SWhiteMask = styled(WhiteMask)`
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    pointer-events: ${props => props.whiteMaskVisible ? "all" : "none"};
    position: absolute;
    visibility: visible;
    z-index: 2;
    top: 0;
    left: 0;
`

const SInnerImage = styled(InnerImage)`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("${props => props.imageUrl}");
    height: 100%;
    visibility: visible;
    z-index: 3;
    cursor: pointer;
`