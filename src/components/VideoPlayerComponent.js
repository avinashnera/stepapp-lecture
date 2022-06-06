import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayerComponent(props) {
    const { url } = props;
    return <ReactPlayer url={url} width="100%" height="100%"></ReactPlayer>;
}

export { VideoPlayerComponent };