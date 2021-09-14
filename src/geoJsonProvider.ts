import departementsJson from "../assets/geoJson/departements.json";
import regionsJson from "../assets/geoJson/regions.json";
import arrondissementsJson from "../assets/geoJson/arrondissements.json";;
import communesJson from "../assets/geoJson/communes.json";

/**
 * Permet de récupérer les fichiers geoJson.
 * Les valeurs possible sont departements, regions et arrondissements.
 * @param name nom de json a récupérer
 */
export function geoJsonProvider(name: string) {
    var result;
    switch (name) {
        case 'regions':
            result = regionsJson;
            break;
        case 'departements':
            result = departementsJson;
            break;
        case 'arrondissements':
            result = arrondissementsJson;
            break;
        case 'communes':
            result = communesJson;
            break;
    }
    return result;
}
