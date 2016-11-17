
interface Read<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    findById: (id: string, callback: (error: any, result: T) => void) => void;
    findByCriteria: (criteria: any, callback: (error: any, result: T[]) => void) => void;
    findOneByCriteria: (criteria: any, callback: (error: any, result: T) => void) => void;
}

export = Read;
