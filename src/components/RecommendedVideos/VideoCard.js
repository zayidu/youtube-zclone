import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './videoCard.css';

function Video({ image, title, channel, views, timestamp, channelImg }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar className="videoCard__avatar" alt={channel} src={channelImg} />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
