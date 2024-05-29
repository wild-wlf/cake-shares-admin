import styled from "styled-components";

export const StyledCheckBox = styled.div`
    display: flex;
    align-items: center;
    color: ${({$color}) => ($color ? "var(--white)" : "var(--black)")};
    .labelTitle {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        color: var(--white);
        cursor: pointer;
    }
    .custom-checkbox {
        height: 100%;
        display: flex;
        align-items: flex-start;
        input[type="checkbox"] {
            position: relative;
            border: 2px solid #d9d9d9;
            background: none;
            cursor: pointer;
            line-height: 0;
            margin: 0 0.6em 0 0;
            outline: 0;
            padding: 0 !important;
            vertical-align: text-top;
            height: 20px;
            width: 20px;
            border-radius: 4px;
            appearance: none;
            opacity: 0.5;
        }

        input[type="checkbox"]:hover {
            opacity: 1;
        }

        input[type="checkbox"]:checked {
            background-color: #408f8c;
            opacity: 1;
            &:before {
                content: "";
                position: absolute;
                right: 50%;
                top: 50%;
                width: 5px;
                height: 10px;
                border: solid #fff;
                border-width: 0 2px 2px 0;
                margin: -1px -0.5px 0 0px;
                transform: rotate(45deg) translate(-50%, -50%);
                z-index: 2;
            }
        }

        input[type="checkbox"]:before {
            content: "";
            position: absolute;
            right: 50%;
            top: 50%;
            width: 4px;
            height: 9px;
            margin: -1px -0.5px 0 0px;
            transform: rotate(45deg) translate(-50%, -50%);
            z-index: 2;
        }
    }
`;
