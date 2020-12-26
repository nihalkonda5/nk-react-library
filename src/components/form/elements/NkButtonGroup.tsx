

import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'

interface INkButtonGroup<T> {
    id?: string,
    valueList: { label: string, value: T }[],
    defaultValue?: { label: string, value: T },
    valueChanged(id: string, value: { label: string, value: T }): void
}

export default function NkButtonGroup<T>({
    id,
    defaultValue,
    valueChanged,
    valueList
}: INkButtonGroup<T>) {

    const [selectedButton, setSelectedButton] = React.useState<{ label: string, value: T }>(
        defaultValue || valueList[0]
    )

    React.useEffect(() => {
        if (selectedButton.value) {
            valueChanged && valueChanged(id || '', selectedButton)
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
