import styled from "styled-components";

export const Page = styled.div`
    padding: 20px 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
    justify-content: space-between;
`;

export const Arrow = styled.button`
    border-radius: 100%;
    color: #bbb;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 1;
    font-size: 3rem;
    position: relative;
    :disabled {
        cursor: no-drop;
    }
    ${(props) => (props.directionLeft ? "left: 10px;" : "right: 10px")}
`;

export const Values = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    font-size: 1.2rem;
    color: #323232;

    span {
        font-weight: bold;
    }
`;

export const ChangePage = styled.button`
    margin-left: 10px;
    border-radius: 100px;

    ${(props) =>
        props.actived
            ? `color: #ccc;`
            : `color: transparent; border: 1px solid #ccc`}
`;

export const ButtonList = styled.a`
    cursor: pointer;
`;
