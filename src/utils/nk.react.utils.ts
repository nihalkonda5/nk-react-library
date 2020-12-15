

import { NkRedirectRef } from "../components/container/helpers/NkRedirect";
import { NkToastPanelRef } from "../components/container/helpers/toast/NkToastPanel";
import { NkModalRef } from "../components/container/helpers/modal/NkModal";

class NkReactUtils {

    private static instance: NkReactUtils;

    ToastPanel!: NkToastPanelRef;
    location!: { latitude: number; longitude: number; raw: any; };
    Redirect!: NkRedirectRef;
    Modal!: NkModalRef;

    private constructor() {

    }

    static getInstance() {
        if (!NkReactUtils.instance)
            NkReactUtils.instance = new NkReactUtils();
        return NkReactUtils.instance;
    }

    setToastPanel(tp: NkToastPanelRef) {
        this.ToastPanel = tp;
    }

    setLocation(latitude: number, longitude: number, raw: any) {
        this.location = { latitude, longitude, raw };
    }

    setRedirect(rd: NkRedirectRef) {
        this.Redirect = rd;
    }

    setModal(md: NkModalRef) {
        this.Modal = md;
    }
}

export default NkReactUtils.getInstance();