interface SDKConfig {
    baseUrl: string;
}
export declare const SDKConfig: SDKConfig;
export declare const initHanbiroReactSDK: ({ baseUrl }: SDKConfig) => void;
export declare const isDevelopment: () => boolean;
export declare const getBaseUrl: () => string;
export declare const getGroupwareUrl: () => string;
export {};
