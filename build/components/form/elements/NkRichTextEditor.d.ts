import { Component } from 'react';
import ReactQuillEditor from 'react-quill';
import * as QuillTypes from 'quill';
import { config } from './NkFormElementTypes';
export default class NkRichTextEditor<T> extends Component<config<T>> {
    quill: ReactQuillEditor;
    lastSelectionRange: QuillTypes.RangeStatic;
    insertImageLink(link: string): void;
    render(): JSX.Element;
}
