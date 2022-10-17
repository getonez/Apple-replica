import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Section/youtubecss/Youtube.css'

const Youtubevideos = () => {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9")
            .then((response) => response.json())
            .then((data) => {
                const youtubevideos = data.items;
                setVideo(youtubevideos);
            })
    }, []);

    // console.log(video);

    return (
        <div className='allvideos container bg-white my-3'>
            <div className=' row '>
            <div className='text-center'>
                <div className='title-wraper fw-bolder text-dark video-title-wrapper my-5'>
                    <h1>Latest Videos</h1>
                </div>
            </div>
            {video?.map((singlevideo, i) => {
                let vidId = singlevideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let display = (
                    <div key={i} className='col-sm-12 col-md-4'>
                        <div className='singlevideo'>
                        <div className='video_thumbnails'>
                            <a href={vidLink} target="_blank" rel="noreferrer">
                                <img src={singlevideo.snippet.thumbnails.high.url} alt="Apple Videos Thumbnails" />
                            </a>
                        </div>
                        <div className='videoInfo text-start'>
                            <div className="videoTitle fw-bold ">
                                <a href={vidLink} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                    {singlevideo.snippet.title}
                                </a>
                            </div>
                            <div className="videoDesc">
                                {singlevideo.snippet.description}
                            </div>
                        </div>
                        </div>
                    </div>
                )
                return display;
                
            })}
            {/* {display} */}
            </div>
        </div>
    )
}

export default Youtubevideos;