import React, { useRef, useEffect } from "react";
import PhotoSphereViewer from "photo-sphere-viewer";

function PanoramaViewer() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewer = new window.PhotoSphereViewer({
      container: container.current!,
      panorama: "path/to/pano.jpg",
      default_position: { long: (-90 * Math.PI) / 180, lat: 0 },
      mousewheel: false,
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="pano-container" ref={container}></div>;
}

export default PanoramaViewer;
