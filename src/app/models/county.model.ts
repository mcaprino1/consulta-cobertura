export class CountyModel {
    code: string;
    name: string;
    ineCode: number;
    regionCode: string;

    constructor(code, name, ine, region) {
        this.code = code;
        this.name = name;
        this.ineCode = ine;
        this.regionCode = region;
    }
}