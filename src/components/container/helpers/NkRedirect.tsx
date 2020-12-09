
import React from 'react';
import { Redirect } from 'react-router-dom';

export interface NkRedirectRef {
    redirect(path: string): any
}

export default function NkRedirect({ ref }: {
    ref(data: NkRedirectRef): any
}) {
    const [redirect, setRedirect] = React.useState<string | null>(null);

    React.useEffect(() => {
        ref({
            redirect: (path: string) => {
                setRedirect(path);
            }
        })
    }, [])

    return redirect ? <Redirect to={redirect} push /> : <span />
}