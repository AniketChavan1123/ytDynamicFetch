import React from 'react';
import VideoListItem from './video_list_item';
// used functional component bcz we are not storing anything in VideoList of VideoListItem
const VideoList=(props)=>{  // those props will arrive as an object called props as an argument to the function
                            // got array of videos in props named videos
    const VideoItems=props.videos.map((Singlevideo)=>{               // map takes single element from array and runs function on it
        return (<VideoListItem 
                    onVideoSelect={props.onVideoSelect}
                    key={Singlevideo.etag}
                    video={Singlevideo} />  
            );          // returning array of components
    });
    // key will distinguish one video from another using key tag
    // or it will show error like
    // Warning: Each child in an array or iterator should have a unique "key" prop.


    return(             
        <ul className="col-md-4 list-group">
            {VideoItems}       
        </ul>
    );
    // in functional component the props object is argument 
    //in class component the props are available anywhere in any method, we define as this.props
};
export default VideoList;