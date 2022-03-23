import styled from "styled-components";

export const CardStyle = styled.div`
    /* width: 350px; */
    height: 450px;
    background-color: #fff;
    color: black;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    width: ${(props) => (props.width !== null ? props.width : "29%")};
`;

export const CardTitle = styled.h4`
    font-weight: bold;
    font-size: 1.2rem;
    color: #323232;
`;

export const CardSubtitle = styled.h6`
    font-size: 1rem;
    margin-top: 0.5rem;
`;

export const Synopsis = styled.p`
    width: 100%;
    margin: 10px 0;
    text-align: justify;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

export const Badge = styled.div`
    background-color: #fff2db;
    color: #d7aa59;
    display: block;
    padding: 0 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 500;
    width: max-content;
    margin-bottom: 2px;
`;

export const Button = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 90%;
    font-size: 1.2rem;
    margin: auto 0;
    color: #ccc;

    button {
        margin: 0 auto 20px auto;
        padding: 10px 16%;
        background-color: #fafbfd;
    }
`;
