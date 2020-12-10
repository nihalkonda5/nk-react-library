declare class NkStateManagerUtils {
    state: {
        [key: string]: any;
    };
    stateListeners: {
        [key: string]: ((state: string, value: any) => void)[];
    };
    localStorageKey: string;
    getLocalStorageKey(): void;
    setLocalStorageKey(key: string): void;
    addStateListener(key: string, listener: ((state: string, value: any) => void)): void;
    loadState(): void;
    backupState(): void;
    getStateValue(key: string, defaultValue: any): any;
    setStateValue(key: string, value: any): Promise<void>;
}
declare const _default: NkStateManagerUtils;
export default _default;
