import { NkRedirectRef } from "../components/container/helpers/NkRedirect";
import { NkToastPanelRef } from "../components/container/helpers/toast/NkToastPanel";
import { NkModalRef } from "../components/container/helpers/modal/NkModal";
declare class NkReactUtils {
    private static instance;
    ToastPanel: NkToastPanelRef;
    location: {
        latitude: number;
        longitude: number;
        raw: any;
    };
    Redirect: NkRedirectRef;
    Modal: NkModalRef;
    private constructor();
    static getInstance(): NkReactUtils;
    setToastPanel(tp: NkToastPanelRef): void;
    setLocation(latitude: number, longitude: number, raw: any): void;
    setRedirect(rd: NkRedirectRef): void;
    setModal(md: NkModalRef): void;
}
declare const _default: NkReactUtils;
export default _default;
