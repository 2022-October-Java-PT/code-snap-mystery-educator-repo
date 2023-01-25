import React, {useEffect, useState} from "react";
import Axios from "axios";

const ArtPage = () => {

    const {id} = randomNum();
    const [art, setArt] = useState(null);
    const [loading, setLoading] = useState(true);

randomNum(() =>
    Math.floor((Math.random() * 10000) + 1));


useEffect(() => {
    const fetchArtData = async ()=> {
        const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        setArt(result.data);
    }

        if(art){
        setLoading(false);
        }

        const timer = setTimeout(()=>{
            !art &&fetchArtData();
        },250);
        return ()=>clearTimeout(timer);
           
        

    }, [art]);

    return (
        loading ? <h2>Loading</h2> :
        <div>
        <h2>art.title</h2>
        <image className={StyleSheet.image} src={art.primaryImageSmall} alt='art' />
        <h2>art.artistDisplayName</h2>
        </div>
    );
}

export default ArtPage
