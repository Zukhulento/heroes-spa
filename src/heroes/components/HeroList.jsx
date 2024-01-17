import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  // Se guarda la info de los heroes y se memoriza a menos que cambie el valor de publisher
  const heroes = useMemo(() =>getHeroesByPublisher(publisher),[publisher])
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {heroes.map((heroe) => (
          <HeroCard key={heroe.id} {...heroe} />
        ))}
    </div>
  );
};
