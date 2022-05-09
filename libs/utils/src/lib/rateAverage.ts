export const rateAverage = ({ ratings, ratObjectLength }) => {
  let displayRating: number;
  const addScoure = ratings.map(({ Value }) => {
    if (Value.includes('%', Value)) {
      return +Value.replace('%', '');
    }
    if (Value.includes('/10', Value)) {
      const ratingData = Value.split('/');
      return (+ratingData[0] * 100) / +ratingData[1];
    } else {
      const ratingData = Value.split('/');
      return +ratingData[0] / +ratingData[1];
    }
  });
  const sumRating = addScoure.reduce((preArr, nextArr) => preArr + nextArr, 0);
  const averageRat = ((sumRating / ratObjectLength) * 5) / 100;

  if (Number(averageRat) === averageRat && averageRat % 1 !== 0) {
    const rateFixed = parseFloat(averageRat + '').toFixed(2);
    const splitData = (rateFixed + '').split('.');

    if (+splitData[1] < 50) {
      displayRating = +rateFixed;
    } else {
      displayRating = +rateFixed;
    }
  } else {
    displayRating = averageRat;
  }
  return { displayRating };
};

export default rateAverage;
