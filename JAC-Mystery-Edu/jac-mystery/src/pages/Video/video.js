import React, {useEffect, useState} from "react";
import Axios from "axios";

export default class Video extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            link: ""
        };

        this.generateVideo = this.generateVideo.bind(this);
    }

    generateVideo(){
        fetch("http://localhost:8080/api/video")
        .then(response => response. json())
        .then(data => {
            this.setState({
                title: data.title,
                link: data.link
            });
        })
    }

    componentDidMount() {
        this.generateVideo();
    }

    render() {
        let title = this.state.title;
        let link = this.state.link;

        return(
            <div>
                <h1>Random Art/Crafting Videos for Kids </h1>
                <h2>Video</h2>
                <h3 className="text">{title}</h3>
                <p className="text">{link}</p>

                <button onClick={this.generateVideo}>Click for a Video!</button>
            </div>
        )
    }
}

// const VideoPage = () => {

//     const [video, setVideo] = useState([]);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const fetchVideoData = async ()=> {
//             const result = await Axios(`http://localhost:8080/api/video`);
//             setVideo(result.data)
//         }

//         if(video){
//             setLoading(false);
//         }

//         const timer = setTimeout(()=>{
//             !video && fetchVideoData();
//         }, 1000);
//         return () => clearTimeout(timer);

//     }, [video]);

//     return (
//         <div>
//             <h2>Video Info</h2>
//             {loading ? <h3>Loading...</h3> : video.map(video => (
//                 <a key={video.id} href= {`video/${video.id}`}><p>{video.title}</p></a>
//             ))}
//         </div>
//     );
// }

// export default VideoPage;