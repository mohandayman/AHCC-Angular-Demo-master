export class County {
    constructor(public ID: number = 0, 
        public Name: string = '', 
        public NameAr: string = '',
         public Code: string = '' ,
         public CreatedOn :string = new Date().toISOString(),) { }
}
