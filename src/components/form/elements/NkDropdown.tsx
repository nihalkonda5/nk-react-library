import React from 'react'
import { Form } from 'react-bootstrap'
import { config } from './NkFormElementTypes'

export default function NkDropdown({
    id,
    valueList,
    defaultValue,
    required,
    valueChanged
}: config) {

    return (
        <Form.Group
            style={{
                maxWidth: 600
            }}
            controlId={id}
        >
            <Form.Control
                style={{ maxWidth: 600 }}
                id={id}
                as="select"
                defaultValue={defaultValue}
                required={required || false}
                onChange={(event) => {
                    valueChanged && valueChanged(id, event.target.value)
                }}
            >
                {
                    valueList?.map(v => <option value={v.value}>{v.label}</option>)
                }
            </Form.Control>
        </Form.Group>
    )
}
