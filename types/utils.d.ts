export declare const toArray: (obj: any) => any[];
export declare const ensureArray: (obj: any) => any[];
export declare const ensureParam: <T = any>(name: string, value: T) => T;
export declare const ensureParamString: (name: string, value: any) => string;
export declare const ensureID: (id: string | number) => string;
export declare const isValidID: (id: any) => boolean;
export declare const asID: (id: string | number) => string;
export declare const toObject: <T>(a: T[], key: (a: T) => string) => Record<string, T>;
export declare const mergeIds: (source: string[], second: string[], unique: boolean) => string[];
export declare const isEqual: (a: any, b: any) => boolean;
