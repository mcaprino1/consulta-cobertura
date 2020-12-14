export interface CountiesResponseModel {   
    coverageAreas: Array<County>;
    statusCode: number;
    statusDescription: string;
    errors: object;
}

interface County {
    countyCode: string;
    regionCode: string;
    ineCountyCode: number;
    queryMode: number;
    coverageName: string;
}