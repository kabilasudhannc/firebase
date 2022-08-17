import { LazyLoadImage } from "react-lazy-load-image-component";

type _Props = {
    alt? : string,
    height? : any,
    src? : any,
    width? : any,
};

const LazyImage = ( image : _Props ) => (
  
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width} />
);

export default LazyImage;