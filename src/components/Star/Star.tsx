import { FaStar } from "react-icons/fa";
 interface IStar {
    filled: boolean;
    onClick?: () => void;
}
export const Star = ({ filled, onClick } : IStar) => {
  return (
    <FaStar 
     color={filled ? "orange" : "lightgray"} 
     onClick={onClick} />
  );
}