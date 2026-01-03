import type React from 'react';
import { useState } from 'react';
import { Spinner } from '../Spinner';
import './VideoPlayer.scss';
import clsx from 'clsx';

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
  const [isIframeLoading, setIsIframeLoading] = useState(false);

  const playVideo = () => {
    setShowThumbnail(false);
    setIsIframeLoading(true);
  };

  return (
    <div className="video-player">
      {showThumbnail && (
        <>
          <img
            src={thumbnailSRC}
            alt={alt ?? 'Video thumbnail'}
            style={{ objectPosition: position }}
          />
          <button onClick={playVideo} className="video-player__play-btn" />
        </>
      )}

      {!showThumbnail && (
        <>
          {isIframeLoading && (
            <div className="video-player__spinner">
              <Spinner size={48} />
            </div>
          )}

          <iframe
            className={clsx('video-player__video', {
              'video-player__video--loading': isIframeLoading,
            })}
            src={`${videoSRC}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; encrypted-media; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsIframeLoading(false)}
          />
        </>
      )}
    </div>
  );
};
