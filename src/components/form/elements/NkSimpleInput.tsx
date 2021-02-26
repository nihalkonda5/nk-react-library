

import React from 'react'
import { Form } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'
import { config } from './NkFormElementTypes'

export default function NkSimpleInput<T>({
    id,
    type,
    isTextarea,
    placeholder,
    label,
    defaultValue,
    required,
    inputProps,
    valueChanged,
    description
}: config<T>) {
    let attrs: any = { type: type || 'text', ...inputProps }

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
            <Form.Label>
                <NkLocalizeText text={label || ''} />
            </Form.Label>
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
            <Form.Text className='text-muted'><NkLocalizeText text={description || ''} /></Form.Text>
        </Form.Group>
    )
}
