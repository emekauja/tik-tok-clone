import React, { useState, useEffect } from 'react';
import Video from './Video'
import db from './firebase'
import './App.css';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, shares, messages, likes}) => (
            <Video 
              url={url} 
              channel={channel}
              description={description}
              song={song}
              shares={shares}
              messages={messages}
              likes={likes}
            />
            )
          )}
       </div>
    </div>

  );
}

export default App;
