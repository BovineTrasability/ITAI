import { animal } from "../data/animales";

export const getAnimalById = ( id ) => animal.find( animal => animal.id === id );