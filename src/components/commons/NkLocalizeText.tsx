import React from 'react'
import { NkDictionaryUtils, NkStateManagerUtils } from '../../utils'

export default function NkLocalizeText({
    text,
    languageStateKey = 'language',
    defaultLanguage = 'english'
}: {
    text: string,
    languageStateKey?: string,
    defaultLanguage?: string
}) {

    const [language, setLanguage] = React.useState(NkStateManagerUtils.getStateValue(languageStateKey, defaultLanguage));

    const [reload, setReload] = React.useState(0);

    React.useEffect(() => {
        NkStateManagerUtils.addStateListener(languageStateKey, (state: string, value: any) => {
            console.log(state, value);
            setLanguage(value);
        })
        NkDictionaryUtils.addDictionaryListener(() => {
            setReload(new Date().getTime());
        });
    }, [])

    console.log(reload);

    return <>{NkDictionaryUtils.getDictionaryValue(text, language)}</>
}
