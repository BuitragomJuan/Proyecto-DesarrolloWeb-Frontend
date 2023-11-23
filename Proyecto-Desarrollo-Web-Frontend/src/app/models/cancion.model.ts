import { Listas } from "./listas.model";

export class Cancion{
    id?: number; 
    album: string;
    artista: string;
    genero: string;
    nombre:string;
    rating:number;
    lista: Listas;

    constructor(album: string, artista: string, genero: string, nombre:string, rating:number, lista:Listas){
        this.album = album;
        this.artista = artista;
        this.genero = genero;
        this.nombre = nombre;
        this.rating = rating;
        this.lista = lista;
    }
}

