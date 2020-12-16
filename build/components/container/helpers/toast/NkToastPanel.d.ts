export interface NkToastPanelRef {
    addToast(title: string, body: string): any;
}
export default function NkToastPanel({ onLoad }: {
    onLoad(): void;
}): JSX.Element;
