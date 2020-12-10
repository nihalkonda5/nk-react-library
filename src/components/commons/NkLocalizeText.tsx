import React from 'react'
import { NkStateManagerUtils } from '../../utils'

export default function NkLocalizeText({
    textMap,
    languageStateKey = 'language',
    defaultLanguage = 'english'
}: {
    textMap: { [key: string]: string },
    languageStateKey?: string,
    defaultLanguage?: string
}) {
    const language = NkStateManagerUtils.getStateValue(languageStateKey, defaultLanguage);

    return <>{textMap[language] || textMap[defaultLanguage] || textMap[Object.keys(textMap)[0]]}</>
}
