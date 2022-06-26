import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [availableMeals, setAvailableMeals] = useState([]);

  const fetchMealsHandler = useCallback(async () => {
    setFetchError(null);
    setIsLoading(true);
    try {
      const result = await fetch(
        "https://react-http-971fb-default-rtdb.firebaseio.com/meals.json"
      );

      if (!result.ok) {
        setFetchError(true);
        return;
      }
      setFetchError(false);

      const data = await result.json();
      // console.log(data);

      const loadedMeals = [];
      for (const key of Object.keys(data)) {
        const dataItem = data[key];
        const meal = {
          ...dataItem,
          id: key,
        };
        loadedMeals.push(meal);
      }

      setAvailableMeals(loadedMeals);
    } catch (e) {
      setFetchError("Failed to fetch meals");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let cardContent;
  if (fetchError) cardContent = <p>{fetchError}</p>;
  else if (isLoading) cardContent = <p>Loading...</p>;
  else cardContent = <ul>{mealsList}</ul>;

  return (
    <section className={classes.meals}>
      <Card>{cardContent}</Card>
    </section>
  );
};

export default AvailableMeals;
