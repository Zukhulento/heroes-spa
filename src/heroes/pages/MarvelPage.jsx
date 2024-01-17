import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
  return (
    <div>
      <h1 className="animate__animated animate__headShake">
        Marvel Comics
      </h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
