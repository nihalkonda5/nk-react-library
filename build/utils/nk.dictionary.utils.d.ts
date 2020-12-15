declare class NkDictionaryUtils {
    private static instance;
    dictionary: {
        [key: string]: {
            [key: string]: string;
        };
    };
    dictionaryListeners: Function[];
    private constructor();
    static getInstance(): NkDictionaryUtils;
    addDictionaryListener(func: Function): void;
    setDictionary(dict: {
        [key: string]: {
            [key: string]: string;
        };
    }): Promise<void>;
    getDictionaryValue(source: string, language: string): string;
}
declare const _default: NkDictionaryUtils;
export default _default;
