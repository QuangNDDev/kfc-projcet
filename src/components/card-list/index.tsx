import { useEffect, useState } from "react";
import { Food } from "../../model/food";
import Card from "../card";
import api from "../config/api";
import { toast } from "react-toastify";
import "./index.scss";

function CardList() {
  const [foods, setFoods] = useState<Food[]>([]);
  const fetchFoods = async () => {
    try {
      const response = await api.get("product");
      setFoods(response.data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    fetchFoods();
  }, []);
  return (
    <div className="card-list">
      {foods.map((food) => (
        <Card food={food} />
      ))}
    </div>
  );
}

export default CardList;
