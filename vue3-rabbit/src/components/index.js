import ImgView from './ImgView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        app.component('XtxSku', XtxSku)
        app.component('ImgView', ImgView)
    }
}