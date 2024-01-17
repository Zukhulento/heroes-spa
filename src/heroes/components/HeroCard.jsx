import { Link } from "react-router-dom";
// Este componente ayuda con la lógica de definir si se muestra o no
// los characters
const CharactersByHero = ({ characters, alter_ego }) => {
  return alter_ego === characters ? <></> : <p>{characters} </p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col ">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImage} className="card-img animate__animated animate__fadeIn" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {
                // Aquí se manda a llamar el componente para renderizar según contenido con los props que necesita
                <CharactersByHero
                  characters={characters}
                  alter_ego={alter_ego}
                />
              }
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link className="btn btn-outline-primary" to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
