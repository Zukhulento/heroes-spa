import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroePage = () => {
  const { id } = useParams();
  //* Aquí abajo lo que se hace es recordar la data de heroe hasta que el id cambie
  const heroe =  useMemo(()=> getHeroById(id), [id]);
  const navigate = useNavigate()
  const { alter_ego, superhero, publisher, first_appearance, characters } =
    heroe;

  const onNavigateBack = () => {
    //! Esto retorna una posición en el historial
    navigate(-1)
  };

  if (!heroe) return <Navigate to={"/marvel"} />;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          className="img-thumbnail animate__animated animate__bounceInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearence: </b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters} </p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
