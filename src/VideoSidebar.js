import React, {useState} from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

const VideoSidebar = ({likes, shares, messages }) => {
  const [liked, setLiked] = useState(false)
  const [messaged, setMessaged] = useState(false)
  const [shared, setShared] = useState(false)

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? 
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} /> 
          : <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)} />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" onClick={(e) => setMessaged(true)} />
        <p>{messaged ? messages + 1 : messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" onClick={(e) => setShared(true)} />
        <p>{shared ? shares + 1 : shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
