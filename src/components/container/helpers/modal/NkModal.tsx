

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

    const modalResponse = (primary: boolean | null) => {
        return () => {
            if (data.type === 'confirm') {
                data.resolve(primary);
            } else if (data.type === 'prompt') {
                data.resolve(primary === null || primary === false ? null : value);
            }
            setShow(false);
        }
    }

    return (
        <Modal show={show} onClose={modalResponse(null)} onHide={modalResponse(null)}>
            <Modal.Header closeButton onHide={modalResponse(null)}>
                <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            {data.body && <Modal.Body>
                {data.body}
            </Modal.Body>}
            <Modal.Footer>
                {data.buttons.hasNegativeButton && <Button variant="secondary" onClick={modalResponse(false)}>
                    {data.buttons.negativeLabel || 'Cancel'}
                </Button>}
                <Button variant={data.buttons.positiveWarning ? "danger" : "primary"} onClick={modalResponse(true)}>
                    {data.buttons.positiveLabel || 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
