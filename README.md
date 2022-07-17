## install package

import AnimatedImage from "npm-test-bram";

## use component

<AnimatedImage
image="./images/hero.jpg"
alt="test image"
width="100%"
height="528px"
loadingComplete={() => {
setLoadedImage(true);
setHasLoaded(true);
}}
startAnimation={loadedImage}
initialDelay="0"
easeDuration=".3"
/>
