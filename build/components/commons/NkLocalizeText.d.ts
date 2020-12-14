export default function NkLocalizeText({ text, map, languageStateKey, defaultLanguage }: {
    text: string;
    map?: {
        [key: string]: string | number;
    };
    languageStateKey?: string;
    defaultLanguage?: string;
}): JSX.Element;
