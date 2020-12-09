

import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NkReactUtils } from '../../../../utils';
import NkSimpleInput from '../../../form/elements/NkSimpleInput'

interface IModalOperation {
    title: string,
    description?: string,
    defaultValue?: string,
    positiveLabel?: string,
    negativeLabel?: string,
    positiveWarning?: boolean
}

export interface NkModalRef {
    prompt(data: IModalOperation): Promise<string | null>
    confirm(data: IModalOperation): Promise<boolean | null>
}

export default function NkModal() {
    console.log('NkModal rendering')
    const [show, setShow] = React.useState(false);

    const [data, setData] = React.useState({
        title: '',
        type: 'custom',
        body: <span />,
        buttons: {
            hasNegativeButton: false,
            negativeLabel: '',
            positiveLabel: '',
            positiveWarning: false
        },
        resolve: (value: any) => { console.log(value) },
        reject: (error: any) => { console.error(error) }
    })

    const [value, setValue] = React.useState(null);

    React.useEffect(() => {
        console.log('NkModal useEffect []')
        const callback: NkModalRef = {
            prompt: (data) => {
                setShow(true);
                const promise = new Promise<string | null>((resolve, reject) => {

                    setData({
                        type: 'prompt',
                        title: data.title,
                        body: (
                            <NkSimpleInput
                                id=''
                                type=''
                                label={data.description}
                                defaultValue={data.defaultValue}
                                valueChanged={(id, value) => { console.log(id, value); setValue(value); }} />
                        ),
                        buttons: {
                            hasNegativeButton: true,
                            negativeLabel: data.negativeLabel || 'Cancel',
                            positiveLabel: data.positiveLabel || 'Submit',
                            positiveWarning: data.positiveWarning || false
                        },
                        resolve,
                        reject
                    });

                });

                return promise;
            },
            confirm: (data) => {
                setShow(true);
                const promise = new Promise<boolean | null>((resolve, reject) => {

                    setData({
                        type: 'confirm',
                        title: data.title,
                        body: <p>{data.description}</p>,
                        buttons: {
                            hasNegativeButton: true,
                            negativeLabel: data.negativeLabel || 'No',
                            positiveLabel: data.positiveLabel || 'Yes',
                            positiveWarning: data.positiveWarning || false
                        },
                        resolve,
                        reject
                    });

                });

                return promise;
            }
        };

        NkReactUtils.setModal(callback);
    }, [])

    return (
        <Modal show={show} onClose={() => {
            if (data.type === 'confirm') {
                data.reject(new Error('Confirm closed'));
            } else if (data.type === 'prompt') {
                data.reject(new Error('Prompt closed'));
            }
            setShow(false);
        }}>
            <Modal.Header closeButton>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {data.body}
            </Modal.Body>
            <Modal.Footer>
                {data.buttons.hasNegativeButton && <Button variant="secondary" onClick={() => {
                    if (data.type === 'confirm') {
                        data.resolve(false);
                    } else if (data.type === 'prompt') {
                        data.resolve(null);
                    }
                    setShow(false);
                }}>{data.buttons.negativeLabel || 'Cancel'}</Button>}
                <Button variant={data.buttons.positiveWarning ? "warning" : "primary"} onClick={() => {
                    if (data.type === 'confirm') {
                        data.resolve(true);
                    } else if (data.type === 'prompt') {
                        data.resolve(value);
                    }
                    setShow(false);
                }}>{data.buttons.positiveLabel || 'Submit'}</Button>
            </Modal.Footer>
        </Modal>
    )
}
