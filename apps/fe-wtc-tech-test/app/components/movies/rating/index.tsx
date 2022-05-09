import React from 'react';
import {
  StarIcon,
  StarBorderIcon,
  StarHalfIcon,
} from '@mono-nx-test-with-nextjs/ui';
import { makeStyles, createStyles } from '@material-ui/core/styles';
interface IselectedStars {
  selectedStars: number;
}
const useStyles = makeStyles(() =>
  createStyles({
    star: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: '8px',
    },
  })
);

export const StarRating = ({ selectedStars }: IselectedStars) => {
  const TOTAL_STAR = 5;
  let voteAverage: number;
  const classes = useStyles();
  if (Number(selectedStars) === selectedStars && selectedStars % 1 !== 0) {
    const splitData = (selectedStars + '').split('.');
    if (+splitData[1] < 50) {
      voteAverage = +splitData[0];
    } else {
      voteAverage = +splitData[0] + 0.5;
    }
  } else {
    voteAverage = selectedStars;
  }

  const ratingStartIcons = () => {
    return [...Array(TOTAL_STAR)].map((el, i) =>
      // check if current star should be half
      i < voteAverage && i + 1 > voteAverage ? (
        <StarHalfIcon key={i} />
      ) : i < voteAverage ? (
        <StarIcon key={i} />
      ) : (
        <StarBorderIcon key={i} />
      )
    );
  };

  return (
    <>
      <div className={classes.star}>{ratingStartIcons()}</div>
    </>
  );
};

export default StarRating;
