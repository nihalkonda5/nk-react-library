

import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NkReactUtils } from '../../../../utils';
import { NkLocalizeText } from '../../../commons';
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

export default function NkModal({ onLoad }: { onLoad(): void }) {
    console.log('NkModal rendering')

    const [data, setData] = React.useState({
        show: false,
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
                console.log('NkModal prompt', data);
                const promise = new Promise<string | null>((resolve, reject) => {

                    setData({
                        show: true,
                        type: 'prompt',
                        title: data.title,
                        body: (
                            <NkSimpleInput
                                id=''
                                type=''
                                label={data.description}
                                defaultValue={data.defaultValue}
                                valueChanged={(id, value) => { setValue(value); }} />
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
                console.log('NkModal confirm', data);
                const promise = new Promise<boolean | null>((resolve, reject) => {

                    setData({
                        show: true,
                        type: 'confirm',
                        title: data.title,
                        body: <p><NkLocalizeText text={data.description || ''} /></p>,
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
        onLoad();
    }, [])



    const modalResponse = (primary: boolean | null) => {
        return () => {
            if (data.type === 'confirm') {
                data.resolve(primary);
            } else if (data.type === 'prompt') {
                data.resolve(primary === null || primary === false ? null : value);
            }
            setData({
                ...data,
                show: false
            });
        }
    }

    console.log('NkModal render', data);

    return (
        <>
            {(data.show) && <Modal show={data.show} onClose={modalResponse(null)} onHide={modalResponse(null)}>
                <Modal.Header closeButton onHide={modalResponse(null)}>
                    <Modal.Title>
                        <NkLocalizeText text={data.title} />
                    </Modal.Title>
                </Modal.Header>
                {data.body && <Modal.Body>
                    {data.body}
                </Modal.Body>}
                <Modal.Footer>
                    {data.buttons.hasNegativeButton && <Button variant="secondary" onClick={modalResponse(false)}>
                        <NkLocalizeText text={data.buttons.negativeLabel} />
                    </Button>}
                    <Button variant={data.buttons.positiveWarning ? "danger" : "primary"} onClick={modalResponse(true)}>
                        <NkLocalizeText text={data.buttons.positiveLabel} />
                    </Button>
                </Modal.Footer>
            </Modal>}
        </>
    )
}
