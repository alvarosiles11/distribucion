import SSocket from 'servisofts-socket';
import Parent from './index';
import Service from '../../index';

export default class Actions {
    static _getReducer = (props) => {
        return props.state[Parent.component + "Reducer"];
    }
    static getAll = (props) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.data;
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                // service: Service.ServiceName,
                component: Parent.component,
                version: Parent.version,
                type: "getAll",
                estado: "cargando",
                // key_usuario: props.state.usuarioReducer.usuarioLog.key,
            })
            return null;
        }
        return data;
    }

		static geocode = (data, props) => {
			var reducer = props.state.locationGoogleReducer;
			if (reducer.geocode[data.latitude.toFixed(6) + "," + data.longitude.toFixed(6)]) {
					return reducer.geocode[data.latitude.toFixed(6) + "," + data.longitude.toFixed(6)];
			}
			if (reducer.estado == "cargando" && reducer.type == "geocode") {
					return null;
			}
			// console.log("PIDIENDO====", data.latitude.toFixed(6) + "," + data.longitude.toFixed(6))
			SSocket.send({
					service: "geolocation",
					component: 'locationGoogle',
					// version: Parent.version,
					type: "geocode",
					estado: "cargando",
					data: data

			})
			return null;
	}

	static autoComplete = (data, props) => {
			var reducer = props.state.locationGoogleReducer;
			if (reducer.autoComplete[data.direccion]) {
					return reducer.autoComplete[data.direccion];
			}
			if (reducer.estado == "cargando" && reducer.type == "autoComplete") {
					return null;
			}
			SSocket.send({
					service: "geolocation",
					component: 'locationGoogle',
					// version: Parent.version,
					type: "autoComplete",
					estado: "cargando",
					direccion: data.direccion,
					data: data

			})
			return null;
	}


    static getByKey = (key, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        return data[key];
    }

    static registro = (data, props) => {
        SSocket.send({
            // service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "registro",
            estado: "cargando",
            // key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        })
    }
    static editar = (data, props) => {
        SSocket.send({
            // service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            // key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        })
    }
    static eliminar = (data, props) => {
        SSocket.send({
            // service: Service.ServiceName,
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            // key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: {
                ...data,
                estado: 0,
            }
        })
    }
}