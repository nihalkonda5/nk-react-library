export interface NkToastPanelRef {
    addToast(title: string, body: string): any;
}
export default function NkToastPanel({ ref }: {
    ref(data: NkToastPanelRef): any;
}): JSX.Element;
