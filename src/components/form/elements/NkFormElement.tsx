

import React from 'react'
import { config } from './NkFormElementTypes'
import SubmitButton from './NkSubmitButton'
import SimpleInput from './NkSimpleInput'
import SimpleButton from './NkSimpleButton'
import MyRichTextEditor from './NkRichTextEditor'

export default function NkFormElement({
    elementConfig
}: {
    elementConfig: config
}) {
    switch (elementConfig.type) {
        case 'rich-text':
            return <MyRichTextEditor {...elementConfig} />
        case 'button':
            return <SimpleButton {...elementConfig} />
        case 'submit':
            return <SubmitButton {...elementConfig} />
        default:
            return <SimpleInput {...elementConfig} />
    }
}
