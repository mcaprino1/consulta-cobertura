export interface RegionsResponseModel{
    regions: Array<Region>;
    statusCode: number;
    statusDescription: string;
    errors: object;
}

interface Region {
    regionId: string;
    regionName: string;
    ineRegionCode: number;
}
