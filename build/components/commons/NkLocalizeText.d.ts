export default function NkLocalizeText({ text, map, customRender, languageStateKey, defaultLanguage }: {
    text: string;
    map?: {
        [key: string]: string | number;
    };
    customRender?: (text: string) => JSX.Element;
    languageStateKey?: string;
    defaultLanguage?: string;
}): JSX.Element;
