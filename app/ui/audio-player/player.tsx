import * as React from "react";
import { APITypes, PlyrInstance, PlyrProps, usePlyr } from "plyr-react";
import "plyr-react/plyr.css";
import { audioSource} from '../../lib/placeholder-data'

const videoOptions = undefined;

/* This code defines a custom React component called `CustomPlyrInstance` that uses the
`React.forwardRef` function to forward a ref to a child component. The component takes in two props:
`source` and `options`, which are used to configure the Plyr instance. */
const CustomPlyrInstance = React.forwardRef<APITypes, PlyrProps>(
  (props, ref) => {
    const { source, options = null } = props;
    const raptorRef = usePlyr(ref, { options, source });

    // Do all api access here, it is guaranteed to be called with the latest plyr instance
    React.useEffect(() => {
      /**
       * Fool react for using forward ref as normal ref
       * NOTE: in a case you don't need the forward mechanism and handle everything via props
       * you can create the ref inside the component by yourself
       */
      const { current } = ref as React.MutableRefObject<APITypes>;
      if (current.plyr.source === null) return;

      /* This code is accessing the Plyr instance API and adding event listeners to it. */
      const api = current as { plyr: PlyrInstance };
      api.plyr.on("ready", () => console.log("I'm ready"));
      api.plyr.on("canplay", () => {
        // NOTE: browser may pause you from doing so:  https://goo.gl/xX8pDD
        api.plyr.play();
        console.log("duration of audio is", api.plyr.duration);
      });
      api.plyr.on("ended", () => console.log("I'm Ended"));
    });

    return (
      <video
        ref={raptorRef as React.MutableRefObject<HTMLVideoElement>}
        className="plyr-react plyr"
      />
    );
  }
);

/* This code defines a functional component called `PlyrComponent` that renders a `CustomPlyrInstance`
component with a `ref` and `source` and `options` props. The`source` and `options` props are used to
configure the Plyr instance. The component is wrapped in a `div` with a class name of "wrapper". */
const PlyrComponent = () => {
  const ref = React.useRef<APITypes>(null);

  return (
    <div className="wrapper">
      {audioSource && (
        <CustomPlyrInstance
          ref={ref}
          source={audioSource}
          options={videoOptions}
        />
      )}
    </div>
  );
};

export default PlyrComponent;
