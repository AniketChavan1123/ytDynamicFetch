import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
// Create a new Component some HTML
// This component should produce some HTML

const API_KEY="AIzaSyC9kFIjqDO3JkSCmuB-sqd_H5jAJKuCdIo";


class App extends Component{             // class based components
    
    constructor(props)
    {
        super(props);
        this.state={videos:[],  // will contain list of videos
        selectedVideo: null}      // play selected video

        this.videoSearch("Elon Musk");
    }
    videoSearch(searchTerm) {
        console.log(searchTerm);
        YTSearch({ key: API_KEY, term: searchTerm }, (videoData) => {
          this.setState({
            videos: videoData,
            selectedVideo: videoData[0],
          });
        });
      }

    render(){
            return (
        <div>
            <SearchBar onSearchTermChange={(SearchTerm) => this.videoSearch(SearchTerm)}/>
            <VideoDetails video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
            videos={this.state.videos}/>     
        </div>
        );
        //passing list of videos whwn class component VideoList
        // passing data like this is referred to as passing props in react
        // the data that we are passing from app to videoList videos is referred to as a prop
    }

    // when app runs first time the constructor is called  by the time Yt API fetch data , it starts rendering App and 
    // couldn't find videos[0] bcz yt search result are not available yet
}
//Take this component's generated HTML and put it on the page(in the DOM)
// the instance of App class as <App />
ReactDOM.render(<App />,document.querySelector(".container"));
//<App/> it is instance of class