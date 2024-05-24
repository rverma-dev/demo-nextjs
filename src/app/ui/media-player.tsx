import { useEffect, useRef } from 'react';
import 'plyr-react/plyr.css';
import Plyr, { APITypes, PlyrProps, PlyrInstance } from 'plyr-react';
import Hls from 'hls.js';

interface MediaPlayerProps {
  src: string;
  video?: boolean;
}

const MediaPlayer = ({ src, video = true }: MediaPlayerProps) => {
  const ref = useRef<APITypes>(null);

  useEffect(() => {
    const loadMedia = () => {
      const mediaElement = document.getElementById('plyr') as HTMLMediaElement;

      if (video && Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(mediaElement);

        if (ref.current) {
          // @ts-ignore
          ref.current.plyr.media = mediaElement;
        }

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          (ref.current?.plyr as PlyrInstance).play();
        });
      } else {
        mediaElement.src = src;
        mediaElement.addEventListener('loadedmetadata', () => {
          mediaElement.play();
        });
      }
    };

    loadMedia();
  }, [src, video]);

  return (
    <Plyr
      id="plyr"
      options={{ volume: 0.1 }}
      source={{} as PlyrProps['source']}
      ref={ref}
    />
  );
};

export default MediaPlayer;
