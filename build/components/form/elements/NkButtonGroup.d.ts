interface INkButtonGroup<T> {
    id?: string;
    valueList: {
        label: string;
        value: T;
    }[];
    defaultValue?: {
        label: string;
        value: T;
    };
    valueChanged(id: string, value: {
        label: string;
        value: T;
    }): void;
}
export default function NkButtonGroup<T>({ id, defaultValue, valueChanged, valueList }: INkButtonGroup<T>): JSX.Element;
export {};
