import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import api from '../../services/api';
import ContainerLoading from '../../components/loading';
import Header from '../../components/Header/header';
import { DetailsPage, DetailsContainer, DetailsPoster, DetailsContent, DetailsTitle, DetailsOverview, DetailsInfo, GenreCard, DetailsInfoContent } from './styledMovieDetails';
import StarIcon from '@material-ui/icons/Star';

export default function MovieDetails() {

    const history = useHistory();
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getMovieDetails = async () => {
        api.get(`/movie/${id}?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US`)
            .then(res => {
                setMovieDetails(res.data);
                console.log(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                alert("Erro na requisição dos filmes");
                history.push("/home");
                console.log(error);
            });
    }

    useEffect(() => {
        getMovieDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const img_500 = "https://image.tmdb.org/t/p/w500";

    return (

        <>
            <DetailsPage>
                <Header input={false} />
                {isLoading ?
                    <ContainerLoading />
                    :
                    <DetailsContainer>
                        <DetailsPoster alt={movieDetails.title} src={`${img_500}/${movieDetails.poster_path}`} />
                        <DetailsContent>
                            <DetailsTitle>{movieDetails.title}</DetailsTitle>
                            <DetailsOverview>{movieDetails.overview}</DetailsOverview>
                            <DetailsInfo>
                                {movieDetails.genres.map((item, index) => (
                                    <GenreCard key={index} >{item.name}</GenreCard>
                                ))}
                            </DetailsInfo>
                            <DetailsInfo>
                                    <DetailsInfoContent style={{ color: "white" }} >{movieDetails.runtime}min</DetailsInfoContent>
                                    <DetailsInfoContent style={{ color: "#0077be" }} >{movieDetails.vote_average}<StarIcon /></DetailsInfoContent>
                            </DetailsInfo>
                        </DetailsContent>
                    </DetailsContainer>
                }
            </DetailsPage>
        </>

    )

}