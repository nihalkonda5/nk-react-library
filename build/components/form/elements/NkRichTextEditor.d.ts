import { Component } from 'react';
import ReactQuillEditor from 'react-quill';
import * as QuillTypes from 'quill';
import { config } from './NkFormElementTypes';
export default class NkRichTextEditor extends Component<config> {
    quill: ReactQuillEditor;
    lastSelectionRange: QuillTypes.RangeStatic;
    insertImageLink(link: string): void;
    render(): JSX.Element;
}
