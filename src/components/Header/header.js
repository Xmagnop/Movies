import React from 'react';
import { HeaderHome, SearchInput, LogoImg } from './styledHeader';
import Logo from '../../images/logo-movies.png';
import { useHistory } from 'react-router';

export default function Header(props) {

    const history = useHistory();

    return (

        <>
            <HeaderHome>
                <LogoImg alt="Logo" src={Logo} onClick={() => { history.push("/home") }} />
                {props.input &&
                    <SearchInput onChange={(e) => props.changeFilter(e)} onKeyUp={props.submitFilter} placeholder="Pesquisar" />
                }
            </HeaderHome>
        </>

    )

}