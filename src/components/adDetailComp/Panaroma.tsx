import { Pannellum } from "pannellum-react";
import * as React from 'react';
function ImagePreview = () => {
  const [yaw, setYaw] = React.useState(0);
  const [pitch, setPitch] = React.useState(0);
  const panImage: any = React.useRef(null);
  return (
    <>
      <div> Pitch: {pitch} </div>
      <div> Yaw: {yaw} </div>
      <Pannellum
        width="100%"
        height="500px"
        image="https://i2.wp.com/www.samrohn.com/wp-content/uploads/le-meridien-bedroom-panorama.jpg?resize=1200%2C600"
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onMouseup={(event) => {
          setPitch(panImage.current.getViewer().mouseEventToCoords(event)[0]);
          setYaw(panImage.current.getViewer().mouseEventToCoords(event)[1]);
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={12.41}
          yaw={117.76}
          handleClick={(evt, name) => console.log(name)}
          name="image info"
        />
      </Pannellum>
    </>
  )
}