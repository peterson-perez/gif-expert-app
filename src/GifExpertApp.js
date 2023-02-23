
import React, { Fragment, useState } from "react"
import AddCategories from "./components/AddCategories"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch']);

    //  const handleAdd = () => {
    //     //  setCategories([...categories, 'HunterxHunter'])
    //      setCategories( (cats) => [...cats, 'HunterXHunter'])
    //  }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategories categories={categories} setCategories={setCategories} />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map((category) => (
                        < GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp




