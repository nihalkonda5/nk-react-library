import React from 'react'
import { Dropdown, Form } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'
import { config } from './NkFormElementTypes'

export default function NkDropdownMenu({
    id,
    valueList,
}: config) {

    return (
        <Dropdown id={id}>
            <Dropdown.Toggle as={React.forwardRef(
                ({ children, onClick }: { children: any, onClick: any }, ref: any) =>
                    <span
                        ref={ref}
                        onClick={onClick}
                        style={{
                            fontWeight: 'bolder',
                            fontSize: 25
                        }}
                    >
                        {children}
                    </span>
            )}>
                &#8942;
            </Dropdown.Toggle>

            {valueList && <Dropdown.Menu>
                {
                    valueList.map(v =>
                        <Dropdown.Item onClick={v.onClick}><NkLocalizeText text={v.label} /></Dropdown.Item>
                    )
                }
            </Dropdown.Menu>}
        </Dropdown>
    )
}
