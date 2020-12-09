

import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import NkFormElement from './elements/NkFormElement'
import { config } from './elements/NkFormElementTypes';

export default class MyForm extends Component<{
    title?: string
    description?: string
    formConfig: config[]
    formButtonClicked?: Function
    formSubmit: Function
}> {
    result: any = {}

    updateResult = (id: string, value: any) => {
        this.result[id] = value
    }

    componentDidMount() {
        this.props.formConfig.forEach((fc: config) => {
            if (fc.defaultValue !== undefined)
                this.updateResult(fc.id, fc.defaultValue)
        })
    }

    render() {
        return (
            <Form
                onSubmit={(event) => {
                    event.preventDefault()
                    this.props.formSubmit(this.result)
                }}
            >
                <h3>{this.props.title}</h3>
                <p className='text-muted'>{this.props.description}</p>
                {this.props.formConfig.map((fc: config) => (
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
