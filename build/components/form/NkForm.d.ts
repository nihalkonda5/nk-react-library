import { config } from './elements/NkFormElementTypes';
export default function NkForm<T>({ title, description, formConfig, formButtonClicked, formSubmit }: {
    title?: string;
    description?: string;
    formConfig: config<T>[];
    formButtonClicked?: Function;
    formSubmit: (result: {
        [key: string]: any;
    }) => void;
}): JSX.Element;
