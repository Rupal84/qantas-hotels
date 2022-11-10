import { useMemo, useRef } from 'react';
import { Icon } from '@iconify/react';
interface IRating {
  rating: number;
  ratingType?: 'SELF' | 'EXTERNAL'
}
export const Rating = ({rating}: IRating) => {
  const numOfFullRatings = Math.trunc(rating);
  const hasHalfRating = useMemo(() => {
    const halfRating = rating - numOfFullRatings;
    return !!halfRating;
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [rating]) ;
  const halfRatingRef = useRef<boolean>(hasHalfRating);
  const getIconType = (index: number): string => {
    if(index < numOfFullRatings) {
      return "ion:star"
    } else if( halfRatingRef.current) {
      
      halfRatingRef.current = false;
      return "ion:star-half";
    } else {
      return "ion:star-outline";
    }
  }
  const getIcons = () => {
    return [1, 2, 3, 4, 5].map((_, index) => (
      <Icon key={`icon-${index}`} icon={getIconType(index)} color='orange' />
     ))
  }
  return (<>{getIcons()}</>)
  
}