import { City } from "../City/city";
import { country } from "./country";

export class CountryModel {
    constructor(public Id: number ,public Code:string, public Name: string, public NameAr: string, public Cities: City[]) { }
    getObj(country: country) {
        this.Id = country.id
        this.Name = country.name
        this.NameAr = country.nameAr
        this.Code = country.code
        
    }
}


