export interface NkRedirectRef {
    redirect(path: string): any;
}
export default function NkRedirect({ ref }: {
    ref(data: NkRedirectRef): any;
}): JSX.Element;
