import styled from "styled-components";

export const CardMovie = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 300px;
    background-color: #282c34;
    border-radius: 10px;
    margin: 5px 0;
    @media(max-width: 320px) {
        width: 240px
    }
`;

export const MoviePoster = styled.img`
    border-radius: 10px;
    width: 100%;
`;

export const MovieTitle = styled.b`
    color: white;
    padding-top: 8px;
`;

export const MovieInfo = styled.p`
    margin-block-start: 1;
    margin-block-end: 0;
    font-weight: lighter;
    padding-bottom: 5px;
`;

export const MovieDetails = styled.div`
    display: flex;
    flex-flow: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;