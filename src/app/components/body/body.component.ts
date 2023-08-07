import { Component } from '@angular/core';
import { ImagenTecnologia } from 'src/app/models/imagen-tecnologia';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  imagenesTecnologia: Array<ImagenTecnologia>;
  IMAGEN_FOLDER: string = "assets/imagenes/";
  proyectos: Array<Proyecto>;
  
  constructor() {
    this.imagenesTecnologia = [{ path: this.IMAGEN_FOLDER + "icon-git.svg", descripcion: "Icono de Git", nombre: "Git" },
      { path: this.IMAGEN_FOLDER + "icon-github.svg", descripcion: "Icono de github", nombre: "Github" },
      { path: this.IMAGEN_FOLDER + "icon-debian.svg", descripcion: "Icono de Debian", nombre: "Debian" },
      { path: this.IMAGEN_FOLDER + "icon-html.svg", descripcion: "Icono de Html", nombre: "Html" },
      { path: this.IMAGEN_FOLDER + "icon-css.svg", descripcion: "Icono de Css", nombre: "Css" },
      { path: this.IMAGEN_FOLDER + "icon-js.svg", descripcion: "Icono de Js", nombre: "Js" },
      { path: this.IMAGEN_FOLDER + "icon-nodejs.svg", descripcion: "Icono de NodeJs", nombre: "NodeJs" },
      { path: this.IMAGEN_FOLDER + "icon-java.svg", descripcion: "Icono de Java", nombre: "Java" },
    {path: this.IMAGEN_FOLDER + "icon-spring-boot.svg", descripcion: "Icono de Spring Boot", nombre: "Spring Boot" }];
   
    this.proyectos = [{
      descripcion: "Este es un proyecto de la facultad el cual trata de un tienda de mascotas. El proyecto fue realizado en Spring Boot",
      url: "https://github.com/CachaSan10/repositorio-tp2"
    }, {
      descripcion: "Esta es un proyecto de la facultad es cual trata de una pagina de salud. El proyecto fue realizado en Spring Boot",
      url: "https://github.com/CachaSan10/TP_FINAL_2023-PV"
    }
    ];
  }

}
