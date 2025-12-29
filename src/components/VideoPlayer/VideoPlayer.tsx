import type React from 'react';
import './VideoPlayer.scss';
import { useState } from 'react';

type Props = {
  videoSRC: string;
  thumbnailSRC: string;
  alt?: string;
  position?: string;
};

export const VideoPlayer: React.FC<Props> = ({
  videoSRC,
  thumbnailSRC,
  alt,
  position = 'center',
}) => {
  const [showThumbnail, setShowThumbnail] = useState(true);

  const playVideo = () => setShowThumbnail(false);

  return (
    <div className="video-player">
      {showThumbnail ? (
        <img src={thumbnailSRC} alt={alt && 'Video'} style={{ objectPosition: position }} />
      ) : (
        <iframe
          src={`${videoSRC}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}

      {showThumbnail && <button onClick={playVideo} className="video-player__play-btn"></button>}
    </div>
  );
};
