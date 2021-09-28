import React from 'react';
import { CardMovie, MoviePoster, MovieTitle, MovieInfo, MovieDetails } from './styledMovieCard';

export default function MovieCard(props){

    const img_300 = "https://image.tmdb.org/t/p/w300";

    return(
        <>
            <CardMovie>
                <MoviePoster alt={props.title} src={`${img_300}/${props.poster}`} />
                <MovieTitle>{props.title}</MovieTitle>
                <MovieDetails>
                    <MovieInfo style={{ color: "white" }} >{props.date}</MovieInfo>
                    <MovieInfo style={{ color: "#0077be" }} >{props.rating}</MovieInfo>
                </MovieDetails>
            </CardMovie>
        </>
    )

}