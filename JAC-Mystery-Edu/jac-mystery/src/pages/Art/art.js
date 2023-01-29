import React, { useEffect, useState } from "react";
import Axios from "axios";

const ArtPage = () => {
    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [randomId, setRandomId] = useState(null);


    useEffect(() => {
        const fetchIds = async () => {
            try {
                const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects`)
                const random = Math.floor(Math.random() * result.data.objectIDs.length)
                setRandomId(random)
                const response = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${random}`)
                setArt(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
            }

        }
        fetchIds()
        if (art) {
            setLoading(false);
        }


    }, []);


    return (
        loading ? <h2>Loading...</h2> :
            <div>
                <h2>{art.title}</h2>
                <img className={StyleSheet.image} src={art.primaryImageSmall} alt='art' />
                <h2>{art.artistDisplayName}</h2>
                <h2>{art.elementDescription}</h2>
            </div>
    );
}

export default ArtPage
