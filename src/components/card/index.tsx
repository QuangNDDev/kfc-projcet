import { Food } from "../../model/food";
import "./index.scss";
type CardProps = {
  //hien thi thong tin cua 1 cai food
  food: Food;
};
function Card({ food }: CardProps) {
  return (
    <div className="food-card">
      <div className="food-card__image">
        <img src={food.image} alt="" />
      </div>
      <div className="food-card__wrapper">
        <div className="food-card__content">
          <div className="name">
            <span>{food.name}</span>
          </div>
          <div className="price">
            <span>{food.price}</span>
          </div>
        </div>
        <div className="food-card__description">
          <span>
            {food.description.substring(0, 100)}
            {food.description.length > 100 && "..."}
          </span>
        </div>
        <div className="food-card__btn">
          <button className="button">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
