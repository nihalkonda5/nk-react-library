
import React from 'react'
import NkToast from './NkToast';

export interface NkToastPanelRef {
    addToast(title: string, body: string): any
}

export default function NkToastPanel({ ref }: {
    ref(data: NkToastPanelRef): any
}) {
    const [toastList, setToastList] = React.useState<{
        title: string,
        body: string,
        disappearIn: number
    }[]>([]);
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        })
        console.log('NkToastPanel ref trouble', ref)
        ref && ref({
            addToast: (title: string, body: string) => {
                const ctime = new Date().getTime();
                const _toastList = toastList.filter((t) => t.disappearIn > ctime);
                _toastList.push({
                    title, body, disappearIn: ctime + 5000
                })
                setToastList(_toastList);
            }
        });
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
