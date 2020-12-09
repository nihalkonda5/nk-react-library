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
export default function NkModal(this: any, { ref }: {
    ref(data: NkModalRef): any;
}): JSX.Element;
export {};
