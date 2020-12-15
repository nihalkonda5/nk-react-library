

import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { NkLocalizeText } from '../commons';
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
                {this.props.title && <h3><NkLocalizeText text={this.props.title} /></h3>}
                {this.props.description && <p className='text-muted'><NkLocalizeText text={this.props.description} /></p>}
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
