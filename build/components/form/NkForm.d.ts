import { Component } from 'react';
import { config } from './elements/NkFormElementTypes';
export default class MyForm extends Component<{
    title?: string;
    description?: string;
    formConfig: config[];
    formButtonClicked?: Function;
    formSubmit: Function;
}> {
    result: any;
    updateResult: (id: string, value: any) => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
