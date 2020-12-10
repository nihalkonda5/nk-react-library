export default function NkLocalizeText({ textMap, languageStateKey, defaultLanguage }: {
    textMap: {
        [key: string]: string;
    };
    languageStateKey?: string;
    defaultLanguage?: string;
}): JSX.Element;
