import styled from "styled-components";

export const PageHome = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #0d253f;
    flex-flow: column;
`;

export const HeaderHome = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-around;
    padding: 2%;
    background-color: inherit;
    box-shadow: 0px 1px 5px black;
    margin-bottom: 10px;
    @media(max-width: 500px) {
        flex-flow: column;
    }

`;

export const SearchInput = styled.input`
    border-radius: 15px;
    padding: 1%;
    outline: none;
    box-shadow: 0px 2px 5px #888888;
    @media(max-width: 500px) {
        margin: 5%;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-around;
`;