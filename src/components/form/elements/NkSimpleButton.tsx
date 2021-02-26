

import React from 'react'
import { Button } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'
import { config } from './NkFormElementTypes'

export default function NkSimpleButton<T>({
    id,
    inline,
    label,
    inputProps,
    formButtonClicked
}: config<T>) {
    return (
        <Button
            className={inline ? 'd-inline' : ''}
            {...inputProps}
            type='button'
            data-id={id}
            onClick={() => {
                formButtonClicked && formButtonClicked(id)
            }}
            style={{ margin: 10 }}
        >
            <NkLocalizeText text={label || 'Button'} />
        </Button>
    )
}
