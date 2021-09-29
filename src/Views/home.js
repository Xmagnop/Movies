import React, { useState, useEffect } from 'react';
import { PageHome, HeaderHome, SearchInput, ListContainer } from './styledHome';
import Logo from '../images/logo-movies.png';
import api from '../services/api';
import MovieCard from '../components/MovieCard/MovieCard';
import CustomPagination from '../components/Pagination/pagination';
import ContainerLoading from '../components/loading';

export default function HomePage() {

    const [movies, setMovies] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [searchTitle, setSearchTitle] = useState("")
    const [isLoading, setIsloading] = useState(true)

    const getMovies = async () => {
        api.get(`/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=${page}`)
            .then(res => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages);
                setIsloading(false);
            })
            .catch(error => {
                alert("Erro na requisição dos filmes")
                console.log(error);
            });
    }

    const getFilteredMovies = async () => {
        if (searchTitle === "" || searchTitle === undefined) {
            getMovies();
        } else {
            api.get(`/search/movie?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&query=${searchTitle}&page=${page}&include_adult=false`)
                .then(res => {
                    setMovies(res.data.results);
                    setTotalPages(res.data.total_pages);
                    setIsloading(false);
                })
                .catch(error => {
                    alert("Erro na requisição dos filmes")
                    console.log(error);
                });
        }
    }

    const handleChangeFilter = (e) => {
        setSearchTitle(e.target.value);
        setPage(1);
    }

    const submitFilter = () => {
        if (!isLoading) {
            setIsloading(true);
        }
        if (searchTitle !== "" || searchTitle !== undefined) {
            setTimeout(getFilteredMovies, 2000);
        } else {
            setTimeout(getMovies, 2000);
        }
    }

    useEffect(() => {
        if (searchTitle !== "" || searchTitle !== undefined) {
            getFilteredMovies();
        } else {
            getMovies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <>
            <PageHome>
                <HeaderHome>
                    <img alt="" src={Logo} />
                    <SearchInput onChange={(e) => handleChangeFilter(e)} onKeyUp={submitFilter} placeholder="Pesquisar" />
                </HeaderHome>
                {isLoading ?
                    <ListContainer>
                        <ContainerLoading />
                    </ListContainer>
                    :
                    <ListContainer>
                        {movies.map((item, index) => (
                            <MovieCard poster={item.poster_path} title={item.title} date={item.release_date} rating={item.vote_average} key={index} />
                        ))}
                    </ListContainer>
                }
                <CustomPagination setPage={setPage} pagecurrent={page} total={totalPages} />
            </PageHome>
        </>
    )

}