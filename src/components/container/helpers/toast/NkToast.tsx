
import React from 'react'
import { Toast } from 'react-bootstrap';
import { NkLocalizeText } from '../../../commons';

export default function NkToast({
    title,
    body,
    disappearIn
}: {
    title: string,
    body?: string,
    disappearIn?: number
}) {
    const [show, setShow] = React.useState(true);

    if (!disappearIn || disappearIn <= 0)
        return <span />;

    return (
        <Toast
            style={{ minWidth: 300 }}
            onClose={() => { setShow(false) }}
            show={show}
            delay={disappearIn || 3000}
            autohide>
            <Toast.Header>
                <strong className="mr-auto" >
                    <NkLocalizeText text={title} />
                </strong>
            </Toast.Header>
            <Toast.Body>
                {(body || '').split('\n').map((s, i) => <span key={i}>
                    <NkLocalizeText text={s} />
                    <br />
                </span>)}
            </Toast.Body>
        </Toast>
    )
}
