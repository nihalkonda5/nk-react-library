export default interface ModalProps {
    title?: string;
    label?: string;
    type: string;
    positiveLabel?: string;
    negativeLabel?: string;
    description?: string;
    defaultValue?: any;
    responseHandler?: Function;
    closedHandler?: Function;
}
