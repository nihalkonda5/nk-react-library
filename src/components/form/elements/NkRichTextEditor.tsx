

import React, { Component } from 'react'
import ReactQuillEditor from 'react-quill'
import Quill from 'quill'
import * as QuillTypes from 'quill'
//@ts-ignore
import MagicUrl from 'quill-magic-url'
import { config } from './NkFormElementTypes'
import { Form } from 'react-bootstrap'
import { NkLocalizeText } from '../../commons'
//import ReactQuill from 'react-quill'

export default class NkRichTextEditor extends Component<config> {
    //@ts-ignore
    quill: ReactQuillEditor

    //@ts-ignore
    lastSelectionRange: QuillTypes.RangeStatic

    insertImageLink(link: string) {
        console.log(this.quill, link)

        if (!link) return

        this.quill
            .getEditor()
            .insertEmbed(this.lastSelectionRange.index, 'image', link)
    }

    render() {
        Quill.register('modules/magicUrl', MagicUrl)

        return (
            <div>
                <Form.Group controlId={this.props.id}>
                    <Form.Label>
                        <NkLocalizeText text={this.props.label || ''} />
                    </Form.Label>
                    <ReactQuillEditor
                        id={this.props.id}
                        style={{
                            maxWidth: 600
                        }}
                        ref={(el) => {
                            //@ts-ignore
                            this.quill = el
                            console.log(this.quill)
                        }}
                        theme='snow'
                        defaultValue={this.props.defaultValue || ''}
                        onChange={(
                            content: string,
                            // delta: QuillTypes.Delta,
                            // source: QuillTypes.Sources
                        ) => {
                            // console.log(content,delta,source);
                            this.props.valueChanged && this.props.valueChanged(this.props.id, content)
                        }}
                        modules={{
                            magicUrl: true,
                            toolbar: {
                                container: [
                                    ['bold', 'italic', 'underline', 'strike'],
                                    ['clean'],
                                    [{ list: 'ordered' }, { list: 'bullet' }],
                                    ['link'],
                                    ['image'] // add image here
                                ],
                                handlers: {
                                    image: () => {
                                        //@ts-ignore
                                        this.lastSelectionRange = this.quill
                                            .getEditor()
                                            .getSelection()
                                        // this.imageLinkModal.openModal()
                                    }
                                }
                            }
                        }}
                    />

                    <Form.Text className='text-muted'><NkLocalizeText text={this.props.description || ''} /></Form.Text>
                </Form.Group>

                {/* <MyModal
                        ref={(el) => {
                            this.imageLinkModal = el
                        }}
                        type='prompt'
                        modalProps={{
                            title: 'Image Upload',
                            label: 'Image Link',
                            description: 'Please enter the Image link here.',
                            defaultValue: '',
                            responseHandler: (value) => {
                            this.insertImageLink(value)
                            }
                        }}
                        /> */}
            </div>
        )
    }
}
