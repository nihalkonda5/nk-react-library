

import { NkRedirectRef } from "../components/container/helpers/NkRedirect";
import { NkToastPanelRef } from "../components/container/helpers/toast/NkToastPanel";
import { NkModalRef } from "../components/container/helpers/modal/NkModal";

class NkReactUtils {
    ToastPanel!: NkToastPanelRef;
    location!: { latitude: number; longitude: number; raw: any; };
    Redirect!: NkRedirectRef;
    Modal!: NkModalRef;

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

export default new NkReactUtils();