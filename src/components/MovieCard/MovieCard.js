import React from 'react';
import { CardMovie, MoviePoster, MovieTitle, MovieInfo, MovieDetails } from './styledMovieCard';
import StarIcon from '@material-ui/icons/Star';
import { useHistory } from 'react-router';

export default function MovieCard(props){

    const history = useHistory();
    const img_300 = "https://image.tmdb.org/t/p/w300";

    return(
        <>
            <CardMovie onClick={()=>history.push(`/home/${props.id}`)} >
                <MoviePoster alt={props.title} src={`${img_300}/${props.poster}`} />
                <MovieTitle>{props.title}</MovieTitle>
                <MovieDetails>
                    <MovieInfo style={{ color: "white" }} >{props.date}</MovieInfo>
                    <MovieInfo style={{ color: "#0077be" }} >{props.rating}<StarIcon /></MovieInfo>
                </MovieDetails>
            </CardMovie>
        </>
    )

}