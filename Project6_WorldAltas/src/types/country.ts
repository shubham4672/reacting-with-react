export interface country {
    name: {
        common: string;
    };
    population: number;
    region: string;
    capital?: string[];
    flags: {
        png: string;
    }
}