interface config {
    id: string;
    type: 'rich-text' | 'button' | 'submit' | 'select' | 'custom' | 'input' | 'number' | 'email' | 'password' | 'textarea';
    label?: string;
    placeholder?: string;
    description?: string;
    inline?: boolean;
    isTextarea?: boolean;
    required?: boolean;
    defaultValue?: any;
    valueList?: any[];
    valueChanged?(id: string, value: any): any;
    liveSuggestions?: Function;
    formButtonClicked?: Function;
    customComponent?(c: config): JSX.Element;
}
export type { config };
