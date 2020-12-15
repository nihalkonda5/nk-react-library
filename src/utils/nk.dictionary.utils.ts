class NkDictionaryUtils {

    private static instance: NkDictionaryUtils;

    dictionary: { [key: string]: { [key: string]: string } };

    dictionaryListeners: Function[];

    private constructor() {
        this.dictionary = {};
        this.dictionaryListeners = [];
    }

    static getInstance(): NkDictionaryUtils {
        if (!NkDictionaryUtils.instance)
            NkDictionaryUtils.instance = new NkDictionaryUtils();
        return NkDictionaryUtils.instance;
    }

    addDictionaryListener(func: Function) {
        this.dictionaryListeners.push(func);
    }

    async setDictionary(dict: { [key: string]: { [key: string]: string } }) {
        this.dictionary = dict;
        this.dictionaryListeners.forEach(d => d());
    }

    getDictionaryValue(source: string, language: string) {
        return this.dictionary[source] ? (this.dictionary[source][language] || source) : source;
    }
}

export default NkDictionaryUtils.getInstance();