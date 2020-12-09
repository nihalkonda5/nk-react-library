
import React from 'react';
import { NkReactUtils } from '../../../utils';
import { withRouter } from 'react-router-dom';

export interface NkRedirectRef {
    redirect(path: string): any
}

export default withRouter(function NkRedirect(props) {
    // const [redirect, setRedirect] = React.useState<string | null>(null);

    // React.useEffect(() => {
    //     console.log('NkRedirect', redirect);
    // }, [redirect])

    React.useEffect(() => {

        const callback: NkRedirectRef = {
            redirect: (path: string) => {
                // setRedirect(path);
                props.history.push(path);
            }
        };

        NkReactUtils.setRedirect(callback);

    }, [])
    return <></>;
    // return redirect ? <Redirect to={redirect} /> : <span />
});