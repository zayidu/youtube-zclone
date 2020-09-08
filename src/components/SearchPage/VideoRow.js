import React from 'react';
import './videoRow.css';
function VideoRow({
  views,
  subs,
  description,
  image,
  title,
  timestamp,
  channel,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headLine">
          {channel} •{' '}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs} </span> Subscribers
          </span>
          {views} views • {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
