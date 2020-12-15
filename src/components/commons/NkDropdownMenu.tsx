import React from 'react'
import { Dropdown } from 'react-bootstrap'
import NkLocalizeText from './NkLocalizeText'

export default function NkDropdownMenu({
    id,
    valueList,
}: {
    id?: string,
    valueList: { label: string, onClick(event: React.MouseEvent): void }[]
}) {

    return (
        <Dropdown id={id || 'dropdown'}>
            <Dropdown.Toggle as={React.forwardRef(
                ({ children, onClick }: { children: any, onClick: any }, ref: any) =>
                    <span
                        ref={ref}
                        onClick={onClick}
                        style={{
                            fontWeight: 'bolder',
                            fontSize: 25,
                            cursor: 'pointer',
                            padding: 10
                        }}
                    >
                        {children}
                    </span>
            )}>
                &#8942;
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    valueList.map(v =>
                        <Dropdown.Item onClick={v.onClick}><NkLocalizeText text={v.label} /></Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}
