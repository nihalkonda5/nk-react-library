
import React from 'react'
import { NkReactUtils } from '../../../../utils';
import NkToast from './NkToast';

export interface NkToastPanelRef {
    addToast(title: string, body: string): any
}

export default function NkToastPanel({ onLoad }: { onLoad(): void }) {
    console.log('NkToastPanel rendering')
    const [toastList, setToastList] = React.useState<{
        title: string,
        body: string,
        disappearIn: number
    }[]>([]);
    const [counter, setCounter] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        console.log('toastList', toastList, 'counter', counter);
    }, [toastList, counter])

    React.useEffect(() => {
        console.log('NkToastPanel useEffect []')
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        })
        const callback: NkToastPanelRef = {
            addToast: (title: string, body: string) => {
                setToastList((prevState) => {
                    const ctime = new Date().getTime();
                    console.log('ToastList', prevState);
                    prevState = prevState.filter((t) => t.disappearIn > ctime);
                    prevState.push({
                        title, body, disappearIn: ctime + 5000
                    })
                    setCounter(ctr => ctr + 1);
                    return prevState;
                })
            }
        };

        NkReactUtils.setToastPanel(callback);
        onLoad();
    }, [])

    return (
        <div style={{
            position: 'absolute',
            top: 15 + scrollY,
            right: 10
        }}>
            {
                toastList.map((toast) => <NkToast
                    title={toast.title || ''}
                    body={toast.body || ''}
                    disappearIn={toast.disappearIn - new Date().getTime()}
                    key={toast.disappearIn} />)
            }
        </div>
    )
}
