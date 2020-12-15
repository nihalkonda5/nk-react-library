import React from 'react'
import { NkDictionaryUtils, NkStateManagerUtils } from '../../utils'

function translateText(source: string, map: { [key: string]: string | number } = {}, language: string) {
    const regex = /[+-]?([0-9]*[.])?[0-9]+/g;
    const numbers = source.match(regex) || [];
    const MROX_NUM_MROX = 'MROX_NUM_MROX';
    source = source.replace(regex, MROX_NUM_MROX)

    let translation = NkDictionaryUtils.getDictionaryValue(source || '', language);

    Object.keys(map).forEach(k => { translation = translation.replace(new RegExp(`{${k}}`, 'g'), `${map[k]}`); })
    numbers.forEach(n => { translation = translation.replace(MROX_NUM_MROX, n); })
    return translation;
}

export default function NkLocalizeText({
    text,
    map,
    customRender,
    languageStateKey = 'language',
    defaultLanguage = 'english'
}: {
    text: string,
    map?: { [key: string]: string | number },
    customRender?: (text: string) => JSX.Element
    languageStateKey?: string,
    defaultLanguage?: string
}) {

    const [language, setLanguage] = React.useState(NkStateManagerUtils.getStateValue(languageStateKey, defaultLanguage));

    //const [reload, setReload] = React.useState(0);

    const [translatedText, setTranslatedText] = React.useState(NkDictionaryUtils.getDictionaryValue(text || '', language) || '');

    const updateTranslatedText = () => {
        setTranslatedText(translateText(text, map, language))
    };

    React.useEffect(() => {
        NkStateManagerUtils.addStateListener(languageStateKey, (state: string, value: any) => {
            console.log(state, value);
            setLanguage(value);
        })
        NkDictionaryUtils.addDictionaryListener(() => {
            updateTranslatedText();
        });
    }, [])

    React.useEffect(() => {
        updateTranslatedText();
    }, [language])

    return customRender ? customRender(translatedText) : <>{translatedText}</>
}
