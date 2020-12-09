import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';
export default class NkContainer extends Component<{
    headerComponent: JSX.Element;
    requireLocation?: boolean;
}> {
    render(): JSX.Element;
}
