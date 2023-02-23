import React from 'react';

const GifGrifItem = ({ title, id, url }) => {



    return (  
            <div className='card animate__animated animate__backInLeft'>
                <img src={url} alt={id} className='gifs'></img>
                <p className='title'>{title}</p>
            </div>
    )

};

export default GifGrifItem;