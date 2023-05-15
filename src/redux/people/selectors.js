import { useSelector } from "react-redux";

export const getPeople = () => {
  const people = useSelector((state) => state.people.list);

  return people;
};
