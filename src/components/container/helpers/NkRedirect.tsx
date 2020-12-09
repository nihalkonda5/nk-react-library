
import React from 'react';
import { Redirect } from 'react-router-dom';
import { NkReactUtils } from '../../../utils';

export interface NkRedirectRef {
    redirect(path: string): any
}

export default function NkRedirect({ ref }: {
    ref(data: NkRedirectRef): any
}) {
    const [redirect, setRedirect] = React.useState<string | null>(null);

    React.useEffect(() => {

        const callback: NkRedirectRef = {
            redirect: (path: string) => {
                setRedirect(path);
            }
        };

        ref && ref(callback);

        NkReactUtils.setRedirect(callback);

    }, [ref])

    return redirect ? <Redirect to={redirect} push /> : <span />
}