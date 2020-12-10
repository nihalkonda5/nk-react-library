class NkStateManagerUtils {
    state = {};

    localStorageKey = 'NkStateManagerUtils';

    getLocalStorageKey() {
        this.localStorageKey;
    }

    setLocalStorageKey(key: string) {
        this.localStorageKey = key;
    }

    loadState() {
        try {
            this.state = JSON.parse(window.localStorage.getItem(this.localStorageKey) || '{}');
        } catch (error) {
            this.state = {};
        }
    }

    backupState() {
        try {
            window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.state));
        } catch (error) {
            console.error(error);
        }
    }

    getStateValue(key: string, defaultValue: any) {
        try {
            if (this.state[key] !== null || this.state[key] !== undefined) {
                return this.state[key];
            }
        } catch (error) {
            console.error(error);
        }
        return defaultValue;
    }

    setStateValue(key: string, value: any) {
        this.state[key] = value;
        this.backupState();
    }

}

export default new NkStateManagerUtils();