import React from "react";

import style from './style.module.scss';

export default class Video extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            link: ""
        };

        this.generateVideo = this.generateVideo.bind(this);
    }

    generateVideo() {
        fetch("http://localhost:8080/api/video")
            .then(response => response.json())
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

        return (
            <div className={style.videoPage}>
                <h1 className={style.videoHeader}>Arts and Crafts for Kids </h1>
                <h2 className={style.subTitle}>Videos</h2>
                <h3 className={style.videoText}>{title}</h3>
                {/* <p><a href={link}>{link}</a></p> */}
                <button className={style.videoBtn} onClick={this.generateVideo}>Generate a Mystery Video!</button>
                <iframe height="764" width="100%" src={link} allowFullScreen >
                    
                </iframe>
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

