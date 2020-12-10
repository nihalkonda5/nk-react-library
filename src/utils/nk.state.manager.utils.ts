
class NkStateManagerUtils {
    state: { [key: string]: any } = {};
    stateListeners: { [key: string]: ((state: string, value: any) => void)[] } = {};
    localStorageKey = 'NkStateManagerUtils';

    getLocalStorageKey() {
        this.localStorageKey;
    }

    setLocalStorageKey(key: string) {
        this.localStorageKey = key;
    }

    addStateListener(key: string, listener: ((state: string, value: any) => void)) {
        if (!this.stateListeners[key])
            this.stateListeners[key] = []

        this.stateListeners[key].push(listener);
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

    async setStateValue(key: string, value: any) {
        this.state[key] = value;
        this.backupState();
        if (this.stateListeners[key]) {
            this.stateListeners[key].forEach(l => l(key, value));
        }
    }

}

export default new NkStateManagerUtils();