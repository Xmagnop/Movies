import React, { useState, useEffect } from 'react';
import { PageHome, HeaderHome, SearchInput, ListContainer } from './styledHome';
import Logo from '../images/logo-movies.png';
import api from '../services/api';
import MovieCard from '../components/MovieCard/MovieCard';
import CustomPagination from '../components/Pagination/pagination';

export default function HomePage() {

    const [movies, setMovies] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [searchTitle, setSearchTitle] = useState("")
    // const [filteredMovies, setFilteredMovies] = useState([])

    const getMovies = async () => {
        api.get(`/movie/popular?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&page=${page}`)
            .then(res => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages);
            })
            .catch(error => {
                alert("Erro na requisição dos filmes")
                console.log(error);
            });
    }

    const getFilteredMovies = async () =>{
        if(searchTitle === "" || searchTitle === undefined){
            getMovies();
        }else{
            api.get(`/search/movie?api_key=05219aef37ad48f79afaed988d4298e6&language=en-US&query=${searchTitle}&page=${page}&include_adult=false`)
            .then(res => {
                setMovies(res.data.results);
                setTotalPages(res.data.total_pages);
            })
            .catch(error => {
                alert("Erro na requisição dos filmes")
                console.log(error);
            });
        }
    }

    const handleFilter = () =>{
        setTimeout(getFilteredMovies, 2000);
    }

    useEffect(() => {
        getMovies();
    },[page]);

    // useEffect(() => {
    //     console.log(movies)
    // }, [movies]);

    return (
        <>
            <PageHome>
                <HeaderHome>
                    <img alt="" src={Logo} />
                    <SearchInput onChange={(e)=>setSearchTitle(e.target.value)} onKeyUp={handleFilter} placeholder="Pesquisar" />
                </HeaderHome>
                {movies ?
                    <ListContainer>
                            {movies.map((item, index) => (
                                <MovieCard poster={item.poster_path} title={item.title} date={item.release_date} rating={item.vote_average} key={index} />
                            ))}
                    </ListContainer> : <h1>carregando</h1>}
                    <CustomPagination setPage={setPage} total={totalPages} />
                    <p>{page}</p>
                    {/* <Pagination count={totalPages} boundaryCount={1} color="primary" shape="circular" /> */}
            </PageHome>
        </>
    )

}