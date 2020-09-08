import React from 'react';
import './searchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import { Link } from 'react-router-dom';

function SearhPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      {/* <Link to="https://www.youtube.com/user/zayidu11"> */}
      {/* <a href="https://www.youtube.com/user/zayidu11" target="_blank"> */}
      <ChannelRow
        image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/37907292_1920032391392076_8776234502180569088_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=4jU2UoDpfj4AX_wAGsw&_nc_ht=scontent.ffjr1-4.fna&oh=0b8dc58d4db9d0aa291907a754b0f413&oe=5F7BFFD3"
        channel="Zayidu Ansari"
        verified
        subs="7.1M"
        noOfVideos={15}
        description="Programmer || Coding || CrossFit || coding=true. this.setState({Zayidu: True}) Subscribe for awesome contents. Love Love!!!"
      />
      {/* </Link> */}
      {/* </a> */}
      <hr />

      <VideoRow
        views="10M"
        subs="7.1M"
        description="#WWYDFT2 PERFORM SOMETHING AWESOME FOR #OP2"
        image="https://i.ytimg.com/vi/ghTVBpROZuo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDBKbbcXamh_jBDp2CGICKQT5QXuQ"
        title="#WWYDFT2 PERFORM SOMETHING AWESOME FOR #OP2"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />

      <VideoRow
        views="7M"
        subs="7.1M"
        description="#WWYDFT2 PERFORM SOMETHING AWESOME FOR #OP2"
        image="https://i.ytimg.com/vi/8MhRXPhLGJo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDDTpIMh-0iLR13buH-CiFIUAQ9pQ"
        title="Zayidu"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />

      <VideoRow
        views="5.4M"
        subs="7.1M"
        description="One Plus Tweaks"
        image="https://i.ytimg.com/vi/vj5Py1-ahMc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB_bvwWPCtB_rYwX4LjQr8AfCy3-w"
        title="One Plus Tweaks"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />
      <VideoRow
        views="6.2M"
        subs="7.1M"
        description="Rooting OnePlus"
        image="https://i.ytimg.com/vi/5hGweDMrtSs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSNIWOHbQ9MN76OlyevfgsLbmqJA"
        title="Rooting OnePlus"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />
      <VideoRow
        views="5.4M"
        subs="7.1M"
        description="One Plus Tweaks"
        image="https://i.ytimg.com/vi/vj5Py1-ahMc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB_bvwWPCtB_rYwX4LjQr8AfCy3-w"
        title="One Plus Tweaks"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />
      <VideoRow
        views="6M"
        subs="7.1M"
        description="Rooting OnePlus"
        image="https://i.ytimg.com/vi/5hGweDMrtSs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSNIWOHbQ9MN76OlyevfgsLbmqJA"
        title="Rooting OnePlus"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />
      <VideoRow
        views="6M"
        subs="7.1M"
        description="Rooting OnePlus"
        image="https://i.ytimg.com/vi/5hGweDMrtSs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSNIWOHbQ9MN76OlyevfgsLbmqJA"
        title="Rooting OnePlus"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />
      <VideoRow
        views="6M"
        subs="7.1M"
        description="Rooting OnePlus"
        image="https://i.ytimg.com/vi/5hGweDMrtSs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCSNIWOHbQ9MN76OlyevfgsLbmqJA"
        title="Rooting OnePlus"
        timestamp="4 yeats ago"
        channel="Zayidu Ansari"
      />
    </div>
  );
}

export default SearhPage;
