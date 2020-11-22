import React from 'react';
import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
    0%,
    39%,
    100% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    background: pink;
    height: 20px;
    width: 20px;
    right: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    margin-right: 40px;
    display: inline-block;
    position: relative;
    opacity: 1;
`;

const Circle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 2px;
        height: 4px;
        background-color: #FF7300;
        border-radius: 2px;
        -webkit-animation: ${rotate} 1.2s infinite ease-in-out both;
        animation: ${rotate} 1.2s infinite ease-in-out both;
    }
`;

const Spinner = () => (
    <Wrapper>
        <Circle />
    </Wrapper>
);


export default Spinner;