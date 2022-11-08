import { useState } from 'react';
import {Star} from '../Star';
interface IRating {
  onChange: (rating: number) => void;
}
export const Rating = ({onChange}: IRating) => {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating: number) => {
    setRating(newRating);
    onChange?.(newRating);
  };
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );
}