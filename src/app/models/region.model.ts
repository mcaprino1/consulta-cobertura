export class RegionModel {

    code: string;
    name: string;
    ineCode: number;
    
    constructor(code, name, ine) {
        this.code = code;
        this.name = name;
        this.ineCode = ine;
    }
    
}