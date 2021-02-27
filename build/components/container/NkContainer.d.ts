import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';
export default function NkContainer({ headerComponent, requireLocation, stateKey, children, dictionary, shouldBodyBeRelative, shouldBodyBeFluid }: {
    headerComponent: JSX.Element;
    requireLocation?: boolean;
    stateKey?: string;
    children: any;
    dictionary?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    shouldBodyBeRelative?: boolean;
    shouldBodyBeFluid?: boolean;
}): JSX.Element;
