
interface config {
    id: string
    type: string
    label?: string
    placeholder?: string
    description?: string
    inline?: boolean
    isTextarea?: boolean
    required?: boolean
    defaultValue?: any
    valueList?: any[]
    valueChanged?(id: string, value: any): any
    liveSuggestions?: Function
    formButtonClicked?: Function
}

export type { config }
