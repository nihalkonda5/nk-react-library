import React from 'react'
import { NkDictionaryUtils, NkStateManagerUtils } from '../../utils'

function embedMap(text: string, json: { [key: string]: string | number }) {
    Object.keys(json).forEach(k => { text = text.replace(`{${k}}`, `${json[k]}`) })
    return text;
}

export default function NkLocalizeText({
    text,
    map,
    languageStateKey = 'language',
    defaultLanguage = 'english'
}: {
    text: string,
    map?: { [key: string]: string | number },
    languageStateKey?: string,
    defaultLanguage?: string
}) {

    const [language, setLanguage] = React.useState(NkStateManagerUtils.getStateValue(languageStateKey, defaultLanguage));

    //const [reload, setReload] = React.useState(0);

    const [translatedText, setTranslatedText] = React.useState(NkDictionaryUtils.getDictionaryValue(text || '', language) || '');

    React.useEffect(() => {
        NkStateManagerUtils.addStateListener(languageStateKey, (state: string, value: any) => {
            console.log(state, value);
            setLanguage(value);
        })
        NkDictionaryUtils.addDictionaryListener(() => {
            setTranslatedText(embedMap(
                NkDictionaryUtils.getDictionaryValue(text || '', language),
                map || {}
            ))
        });
    }, [])

    React.useEffect(() => {
        setTranslatedText(embedMap(
            NkDictionaryUtils.getDictionaryValue(text || '', language),
            map || {}
        ))
    }, [language])

    //console.log(reload);

    return <>{translatedText}</>
}
