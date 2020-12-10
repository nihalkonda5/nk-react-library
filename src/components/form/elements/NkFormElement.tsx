

import React from 'react'
import { config } from './NkFormElementTypes'
import NkSubmitButton from './NkSubmitButton'
import NkSimpleInput from './NkSimpleInput'
import NkSimpleButton from './NkSimpleButton'
import NkRichTextEditor from './NkRichTextEditor'
import NkDropdown from './NkDropdown'

export default function NkFormElement({
    elementConfig
}: {
    elementConfig: config
}) {
    switch (elementConfig.type) {
        case 'rich-text':
            return <NkRichTextEditor {...elementConfig} />
        case 'button':
            return <NkSimpleButton {...elementConfig} />
        case 'submit':
            return <NkSubmitButton {...elementConfig} />
        case 'select':
            return <NkDropdown {...elementConfig} />
        case 'custom':
            //@ts-ignore
            return <elementConfig.customComponent {...elementConfig} />;
        default:
            return <NkSimpleInput {...elementConfig} />
    }
}
