//  COMPONENT CONFIG
const component = "usuario_restaurante"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import lista from "./Pages/lista";
import registro from "./Pages/registro";



export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        ["admin/" + component]: lista,
        ["admin/" + component + "/registro"]: registro,
    },
    Components: {
    }
}