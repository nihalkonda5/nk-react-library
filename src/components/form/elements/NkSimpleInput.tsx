

import React from 'react'
import { Form } from 'react-bootstrap'
import { config } from './NkFormElementTypes'

export default function NkSimpleInput({
    id,
    type,
    isTextarea,
    placeholder,
    label,
    defaultValue,
    required,
    valueChanged,
    description
}: config) {
    let attrs: any = { type: type || 'text' }

    if (isTextarea || type === 'textarea') {
        attrs = { as: 'textarea', rows: '5', cols: '20' }
    }

    return (
        <Form.Group
            style={{
                maxWidth: 600
            }}
            controlId={id}
        >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                style={{ maxWidth: 600 }}
                {...attrs}
                id={id}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required || false}
                onChange={(event) => {
                    valueChanged && valueChanged(id, event.target.value)
                }}
            />
            <Form.Text className='text-muted'>{description}</Form.Text>
        </Form.Group>
    )
}
