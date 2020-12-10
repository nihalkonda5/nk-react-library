declare class NkStateManagerUtils {
    state: {};
    localStorageKey: string;
    getLocalStorageKey(): void;
    setLocalStorageKey(key: string): void;
    loadState(): void;
    backupState(): void;
    getStateValue(key: string, defaultValue: any): any;
    setStateValue(key: string, value: any): void;
}
declare const _default: NkStateManagerUtils;
export default _default;
