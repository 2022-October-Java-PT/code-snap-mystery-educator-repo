import React, { useEffect, useState } from "react";
import Axios from "axios";
import style from './style.module.scss';

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

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!art || !art.primaryImageSmall) {
            window.location.reload();}
            }, 3500);
            return ()=>clearTimeout(timer);
    }, [art]);
    
    function refreshPage(){ 
        window.location.reload(); 
    }

    return (
        loading ? <h2>Loading...</h2> :
            <div className={style.art}>
                <button className={style.artBtn} onClick={refreshPage }>New Mystery Art</button>
             
                <h2 className={style.artTitle}>Title: {art.title}</h2>
                <h2 className={style.artArtist}>Artist: {art.artistDisplayName}</h2>
                <img className={style.image} src={art.primaryImageSmall} alt='art' />
               
                
            </div>
    );
}

export default ArtPage
