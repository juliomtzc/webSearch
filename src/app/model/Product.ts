  export class Product {
   private codigo:  number;
   private nombre: string;




   //Define Constructor
   constructor(codigo: number, nombre: string) {
     this.codigo  = codigo;
     this.nombre = nombre;
   }


    ////Define Methods
   getName(): string {
     return `${this.nombre}`;
 }

 }

