import { Cancion } from "./cancion.model";

export class Lista{
    id?: number;
    genero: string;
    canciones?: Cancion[];

    constructor(genero: string, canciones?: Cancion[]){
        this.genero = genero;
        this.canciones= canciones || [];
    }
}