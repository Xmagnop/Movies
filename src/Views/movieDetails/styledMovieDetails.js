import styled from "styled-components";

export const DetailsPage = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    flex-flow: column;
    background-color: #0d253f;
`;

export const DetailsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    @media(max-width: 1024px){
        flex-flow: column;
        align-items: center;
    }
`;

export const DetailsPoster = styled.img`
    border-radius: 15px;
    max-width: 90%;
`;

export const DetailsContent = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const DetailsTitle = styled.h1`
    color: white;
`;

export const DetailsOverview = styled.p`
    background-color: #282c34;
    color: white;
    border-radius: 15px;
    font-size: 1rem;
    padding: 10px;
    min-height: 200px;
    max-width: 500px;
    min-width: 200px;
`;

export const DetailsInfo = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

export const DetailsInfoContent = styled.p`
    margin-block-start: 1;
    margin-block-end: 1;
    font-size: 1.3rem;
    margin-left: 10px;
    font-weight: lighter;
    padding-bottom: 5px;
`;

export const GenreCard = styled.div`
    border-radius: 20px;
    margin: 2px;
    padding: 5px;
    font-weight: bold;
    background-color: #f4f4f4;
    color: orange;
`;