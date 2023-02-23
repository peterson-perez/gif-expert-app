import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
import GifGrifItem from './GifGridItem';
// import { getGifs } from './helpers/GetGifs';

export default function GifGrid({ category }) {
    // const [images, setImages] = useState([]);
  const { data:images, loading } = useFetchGifs( category );
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [ category ]);

    return (
        <>
            <h3 className="animate__animated animate__backInLeft"> {category} </h3>

            {loading && <p className="animate__animated animate__backInLeft">cargando</p> }

            <div className='card-grid'>
                {
                    images.map((img) => (
                        <GifGrifItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
