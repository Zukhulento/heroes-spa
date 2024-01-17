import { HeroList } from "../components/HeroList"

export const DCPage = () => {
  return (
    <div>
      <h1 className="animate__animated animate__headShake">
        DC Comics
      </h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  )
}
