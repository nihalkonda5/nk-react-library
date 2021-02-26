interface config<T> {
    id: string,
    type: 'rich-text' | 'button' | 'submit' | 'select' | 'custom' | 'input' | 'number' | 'email' | 'password' | 'textarea',
    label?: string,
    placeholder?: string,
    description?: string,
    inline?: boolean,
    isTextarea?: boolean,
    required?: boolean,
    defaultValue?: any,
    inputProps?: { [k: string]: string },
    valueList?: { label: string, value: T }[]
    valueChanged?(id: string, value: { label: string, value: T } | any): any,
    liveSuggestions?: Function,
    formButtonClicked?: Function,
    customComponent?(c: config<T>): JSX.Element
}

export type {
    config
}