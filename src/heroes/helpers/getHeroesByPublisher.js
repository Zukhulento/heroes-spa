import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    // Publishers de los que se tienen datos
    const validPublishers = [ "DC Comics", "Marvel Comics" ]
    // Validando que esté incluido el prop de publisher en los que se tienen
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    }
    // Esto crea un arreglo nuevo con solo los heroes del publisher que se pide
    return heroes.filter( heroe => heroe.publisher === publisher )
};
