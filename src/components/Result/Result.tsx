import { IHotel } from "../../common/types"

interface IResultProps {
    hotel: IHotel;
}

export const Result = ({hotel}: IResultProps) => {
return <>
<img src={hotel.property.previewImage.url} alt={hotel.property.previewImage.caption} />
</>
}