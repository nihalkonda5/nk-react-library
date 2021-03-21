import React from 'react'
import { Form } from 'react-bootstrap'
import { NkLocalizeText } from '../commons';
import NkFormElement from './elements/NkFormElement'
import { config } from './elements/NkFormElementTypes';

export default function NkForm<T>({
    title,
    description,
    formConfig,
    formButtonClicked,
    formSubmit
}: {
    title?: string
    description?: string
    formConfig: config<T>[]
    formButtonClicked?: Function
    formSubmit: (result: { [key: string]: any }) => void
}) {
    const [result, setResult] = React.useState<{ [key: string]: any }>({});

    const updateResult = (id: string, value: any, override: boolean = true) => {
        if (!override) {
            //not trying to override
            if (result[id]) {
                //value is already available
                return;
            }
        }
        setResult((prevResult: { [key: string]: any }) => {
            prevResult[id] = value;
            return prevResult;
        });
    };

    React.useEffect(() => {
        formConfig.forEach((fc: config<T>) => {
            if (fc.defaultValue !== undefined)
                updateResult(fc.id, fc.defaultValue, false);
        });
    }, [formConfig])

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault();
                formSubmit(result);
            }}
        >
            {title && <h3><NkLocalizeText text={title} /></h3>}
            {description && <p className='text-muted'><NkLocalizeText text={description} /></p>}
            {formConfig.map((fc: config<T>) => (
                <NkFormElement
                    key={fc.id}
                    elementConfig={{
                        ...fc,
                        valueChanged: updateResult,
                        formButtonClicked: formButtonClicked
                    }}
                />
            ))}
        </Form>
    )
}

/*
export default class MyForm<T> extends Component<{
    title?: string
    description?: string
    formConfig: config<T>[]
    formButtonClicked?: Function
    formSubmit: (result: { [key: string]: any }) => void
}> {
    result: { [key: string]: any } = {}

    updateResult = (id: string, value: any) => {
        this.result[id] = value
    }

    componentDidMount() {
        this.props.formConfig.forEach((fc: config<T>) => {
            if (fc.defaultValue !== undefined)
                this.updateResult(fc.id, fc.defaultValue)
        })
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <Form
                onSubmit={(event) => {
                    event.preventDefault()
                    this.props.formSubmit(this.result)
                }}
            >
                {this.props.title && <h3><NkLocalizeText text={this.props.title} /></h3>}
                {this.props.description && <p className='text-muted'><NkLocalizeText text={this.props.description} /></p>}
                {this.props.formConfig.map((fc: config<T>) => (
                    <NkFormElement
                        key={fc.id}
                        elementConfig={{
                            ...fc,
                            valueChanged: this.updateResult,
                            formButtonClicked: this.props.formButtonClicked
                        }}
                    />
                ))}
            </Form>
        )
    }
}
*/