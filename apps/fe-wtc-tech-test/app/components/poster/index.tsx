import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UNAVAILABLE_IMAGE } from '../helper/constant';
export interface IPosterImage {
  poster: string;
  title: string;
}

const useStyles = makeStyles({
  imgResponsive: {
    verticalAlign: 'middle',
    maxWidth: '100%',
    height: '100%',
    borderRadius: '20px',
    paddingBottom: '5px',
  },
  imgWrapper: {
    height: '250px',
    maxWidth: '80%',
  },
});

export const PosterImage = (props: IPosterImage) => {
  const classes = useStyles();
  const { poster, title } = props;
  const posterImg = poster ? poster : UNAVAILABLE_IMAGE;
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = (e) => {
    if (!imageLoadError) {
      e.target.onerror = null;
      e.currentTarget.src = UNAVAILABLE_IMAGE;
      setImageLoadError(!imageLoadError);
    }
  };

  return (
    <div className={classes.imgWrapper}>
      <img
        className={classes.imgResponsive}
        src={posterImg}
        onError={handleImageError}
        alt={title}
      />
    </div>
  );
};

export default PosterImage;
