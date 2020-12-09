

import React from 'react'
import { Button } from 'react-bootstrap'
import { config } from './NkFormElementTypes'

export default function NkSubmitButton({
    id,
    inline,
    defaultValue,
    label,
    valueChanged
}: config) {
    return (
        <Button
            className={inline ? 'd-inline' : ''}
            variant='primary'
            type='submit'
            data-id={id}
            style={{ margin: 10 }}
            value={defaultValue}
            onClick={() => {
                valueChanged && valueChanged(id, defaultValue)
            }}
        >
            {label || 'Submit'}
        </Button>
    )
}
