class NkDictionaryUtils {
    dictionary: { [key: string]: { [key: string]: string } };

    dictionaryListeners: Function[];

    constructor() {
        this.dictionary = {};
        this.dictionaryListeners = [];
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

export default new NkDictionaryUtils();