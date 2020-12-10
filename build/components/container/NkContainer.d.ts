import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';
export default function NkContainer({ headerComponent, requireLocation, stateKey, children }: {
    headerComponent: JSX.Element;
    requireLocation?: boolean;
    stateKey?: string;
    children: any;
}): JSX.Element;
