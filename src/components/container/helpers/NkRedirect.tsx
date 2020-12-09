
import React from 'react';
import { Redirect } from 'react-router-dom';
import { NkReactUtils } from '../../../utils';

export interface NkRedirectRef {
    redirect(path: string): any
}

export default function NkRedirect() {
    const [redirect, setRedirect] = React.useState<string | null>(null);

    React.useEffect(() => {

        const callback: NkRedirectRef = {
            redirect: (path: string) => {
                setRedirect(path);
            }
        };

        NkReactUtils.setRedirect(callback);

    }, [])

    return redirect ? <Redirect to={redirect} /> : <span />
}