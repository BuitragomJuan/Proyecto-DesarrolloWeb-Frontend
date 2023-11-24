import { Lista } from "./lista.model";

export class Cancion{
    id?: number; 
    album: string;
    artista: string;
    genero: string;
    nombre:string;
    rating:number;
    listaId?: number;
    lista?:Lista;

    constructor(album: string, artista: string, genero: string, nombre:string, rating:number, listaId?: number, lista?: Lista){
        this.album = album;
        this.artista = artista;
        this.genero = genero;
        this.nombre = nombre;
        this.rating = rating;
        this.listaId = listaId;
        this.lista = lista;
    }
}

