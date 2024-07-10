import React from 'react';
import { Helmet } from 'react-helmet-async';
import FavIcon from '../Image/favicon.webp';

const MetaTags = (props) => {

    return (
        <Helmet>
            <title data-rh="true">{props.title}</title>
            <link rel="icon" type="image/webp" href={FavIcon}></link>
        </Helmet>
    )
}
export default MetaTags;