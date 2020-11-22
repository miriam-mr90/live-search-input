import React from 'react';
import styled, { css, keyframes } from "styled-components";

const RotateAnimation = keyframes`
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
    ${({ theme }) => css`
        height: 20px;
        position: absolute;
        right: 16px;
        top: 14px;
        width: 20px;
        z-index: 1;

        .sk-circle {
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
                background-color: ${theme.color.brandPrimary};
                border-radius: 100%;
                -webkit-animation: ${RotateAnimation} 1.2s infinite ease-in-out both;
                animation: ${RotateAnimation} 1.2s infinite ease-in-out both;
            }
        }

        .sk-circle2 {
            transform: rotate(45deg);
        }
        .sk-circle3 {
            transform: rotate(90deg);
        }
        .sk-circle4 {
            transform: rotate(135deg);
        }
        .sk-circle5 {
            transform: rotate(180deg);
        }
        .sk-circle6 {
            transform: rotate(225deg);
        }
        .sk-circle7 {
            transform: rotate(270deg);
        }
        .sk-circle8 {
            transform: rotate(315deg);
        }
        .sk-circle2:before {
            animation-delay: -1.1s;
        }
        .sk-circle3:before {
            animation-delay: -1s;
        }
        .sk-circle4:before {
            animation-delay: -0.9s;
        }
        .sk-circle5:before {
            animation-delay: -0.8s;
        }
        .sk-circle6:before {
            animation-delay: -0.7s;
        }
        .sk-circle7:before {
            animation-delay: -0.6s;
        }
        .sk-circle8:before {
            animation-delay: -0.5s;
        }
    `}
`;

const Spinner = () => (
    <Wrapper>
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
    </Wrapper>
);


export default Spinner;