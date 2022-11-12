import { useMemo, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Wrapper } from './styles';
interface IRating {
    rating: number;
    ratingType?: 'self' | 'star';
}
export const Rating = ({ rating, ratingType }: IRating): JSX.Element => {
    const isStar = ratingType === 'star';
    const numOfFullRatings = Math.trunc(rating);
    const hasHalfRating = useMemo(() => {
        const halfRating = rating - numOfFullRatings;
        return !!halfRating;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);
    const halfRatingRef = useRef<boolean>(hasHalfRating);
    const getIconType = (index: number): string => {
        if (index < numOfFullRatings) {
            return isStar ? 'ion:star' : 'ion:ellipse-sharp';
        } else if (halfRatingRef.current) {
            halfRatingRef.current = false;
            return isStar ? 'ion:star-half' : 'ion:contrast-outline';
        } else {
            return isStar ? 'ion:star-outline' : 'ion:ellipse-outline';
        }
    };
    const getIcons = () => {
        return [1, 2, 3, 4, 5].map((_, index) => (
            <Icon
                key={`icon-${index}`}
                icon={getIconType(index)}
                color="orange"
            />
        ));
    };
    return <Wrapper>{getIcons()}</Wrapper>;
};
