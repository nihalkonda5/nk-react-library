import { Component } from 'react';
import { config } from './elements/NkFormElementTypes';
export default class MyForm<T> extends Component<{
    title?: string;
    description?: string;
    formConfig: config<T>[];
    formButtonClicked?: Function;
    formSubmit: Function;
}> {
    result: any;
    updateResult: (id: string, value: any) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
