import styled from "styled-components";

export const ButtonBack = styled.button`
    padding: 10px;
    margin-top: 10px;
    margin-left: 30px;
    background-color: #d7aa59;
    border: #d7aa59 1px solid;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;

    :hover {
        background-color: transparent;
        color: #d7aa59;
    }
`;

export const Div = styled.div`
    display: grid;
    gap: 10px;
    justify-content: center;
    padding: 30px 0 60px 0;
    grid-template-columns: repeat(auto-fill, ${(props) => props.percentage ? props.percentage : ''});
`;
