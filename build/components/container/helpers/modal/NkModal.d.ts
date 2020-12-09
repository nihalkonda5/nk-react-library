interface IModalOperation {
    title: string;
    description?: string;
    defaultValue?: string;
    positiveLabel?: string;
    negativeLabel?: string;
    positiveWarning?: boolean;
}
export interface NkModalRef {
    prompt(data: IModalOperation): Promise<string | null>;
    confirm(data: IModalOperation): Promise<boolean | null>;
}
export default function NkModal(): JSX.Element;
export {};
