import React, { useState, useEffect } from 'react';
import { PageHome, HeaderHome, SearchInput, ListContainer } from './styledHome';
import Logo from '../images/logo-movies.png';
import api from '../services/api';
import MovieCard from '../components/MovieCard';

export default function HomePage() {

    const [movies, setMovies] = useState([])

    // const printMovies = () =>{
    //     console.log(movies);
    // }

    const getMovies = async () => {
        await api.get(`/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=1`)
            .then(res => {
                setMovies(res.data.results);
                // printMovies();
            })
            .catch(error => {
                alert("Erro na requisição dos filmes")
                console.log(error);
            });
    }

    useEffect(() => {
        getMovies();
    });

    return (
        <>
            <PageHome>
                <HeaderHome>
                    <img alt="" src={Logo} />
                    <SearchInput placeholder="Pesquisar" />
                </HeaderHome>
                {movies ? <ListContainer>
                    {movies.map((item, index) => (
                        <MovieCard poster={item.poster_path} title={item.title} date={item.release_date} rating={item.vote_average} key={index} />
                    ))}
                </ListContainer> : <h1>carregando</h1> }
            </PageHome>
        </>
    )

}