import styled from "styled-components";

export const LoaderWrap = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoaderStyled = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid var(--primary);
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    position: relative;

    &::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border-left: 4px solid var(--green);
        border-bottom: 4px solid transparent;
        animation: rotation 0.5s linear infinite reverse;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
