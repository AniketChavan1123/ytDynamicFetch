import React from 'react';
const VideoListItem=(props)=>{
    const video=props.video;        // get video from argument props---single video
    const onVideoSelect=props.onVideoSelect;
    //get image
    const imageUrl=video.snippet.thumbnails.default.url;
    console.log(video);
    // when list item is clicked perform onClick
    return( 
    <li onClick={()=>onVideoSelect(video)} 
    className="list-group-i"> 
    <div className="Video-list media">
        <div className="media-left">
            <img className="media-object" src={imageUrl} />    
        </div>

        <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
        </div>

    </div>
    </li>      // will show a single video with thumnail and title
    );
};

export default VideoListItem;