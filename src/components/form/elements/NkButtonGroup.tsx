

import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'
import { config } from './NkFormElementTypes'

export default function NkButtonGroup({
    id,
    defaultValue,
    valueChanged,
    valueList
}: config) {
    const [selectedButton, setSelectedButton] = React.useState(
        defaultValue || { label: '', value: null }
    )

    React.useEffect(() => {
        if (selectedButton.value) {
            valueChanged && valueChanged(id, selectedButton)
        }
    }, [selectedButton])

    return (
        <ButtonGroup
            id={id}
            style={{
                border: '1px solid #007bff',
                borderRadius: '0.35rem'
            }}
        >
            {valueList && valueList.map(({ label, value }) => (
                <Button
                    key={label}
                    onClick={() => {
                        if (selectedButton.label !== label)
                            setSelectedButton({ label, value })
                    }}
                    variant={
                        label === selectedButton.label ? 'primary' : 'outline-primary'
                    }
                    style={{
                        borderColor: 'transparent'
                    }}
                >
                    <NkLocalizeText text={label} />
                </Button>
            ))}
        </ButtonGroup>
    )
}
