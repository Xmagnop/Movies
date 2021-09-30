import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import api from '../../services/api';
import ContainerLoading from '../../components/loading';
import Header from '../../components/Header/header';
import { DetailsPage } from './styledMovieDetails';

export default function MovieDetails() {

    const history = useHistory();
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const getMovieDetails = async () => {
        api.get(`/movie/${id}?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US`)
            .then(res => {
                setMovieDetails(res.data.results);
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

    return (

        <>
            <DetailsPage>
                <Header input={false} />
                {isLoading ?
                    <ContainerLoading />
                    :
                    <h1>tela de detalhes</h1>
                }
            </DetailsPage>
        </>

    )

}