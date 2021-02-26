

import React from 'react'
import { Button } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'
import { config } from './NkFormElementTypes'

export default function NkSubmitButton<T>({
    id,
    inline,
    defaultValue,
    inputProps,
    label,
    valueChanged
}: config<T>) {
    return (
        <Button
            className={inline ? 'd-inline' : ''}
            variant='primary'
            type='submit'
            data-id={id}
            style={{ margin: 10 }}
            {...inputProps}
            value={defaultValue}
            onClick={() => {
                valueChanged && valueChanged(id, defaultValue)
            }}
        >
            <NkLocalizeText text={label || 'Submit'} />
        </Button>
    )
}
