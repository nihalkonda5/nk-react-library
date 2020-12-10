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

    const [language, setLanguage] = React.useState(NkStateManagerUtils.getStateValue(languageStateKey, defaultLanguage));

    React.useEffect(() => {
        NkStateManagerUtils.addStateListener(languageStateKey, (state: string, value: any) => {
            console.log(state, value);
            setLanguage(value);
        })
    }, [])

    return <>{textMap[language] || textMap[defaultLanguage] || textMap[Object.keys(textMap)[0]]}</>
}
