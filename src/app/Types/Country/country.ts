import { City } from "../City/city";

export class country {
    constructor(
        public id: number = 0, 
        public name: string = '', 
        public nameAr: string = '',
         public code: string = '' ,
         public cities :City[] ) { }
}
