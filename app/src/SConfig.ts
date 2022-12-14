import { SThemeThemes } from "servisofts-component";
// import SConfig_Inputs from "./SConfig_Inputs";
const SThemeProps: SThemeThemes = {
  default: {
    barStyle: "light-content",
    barColor: "#FA790E",
    text: "#000000",
    primary: "#FA790E",
    secondary: "#ffffff",
    info: "#DE5738",
    background: "#ffffff",
    card: "#eeeeee99",
  },
  dark: {
    barStyle: "light-content",
    barColor: "#FA790E",
    text: "#ffffff",
    primary: "#FA790E",
    secondary: "#000000",
    info: "#DE5738",
    background: "#000000",
    card: "#44444499",
  },
};

const SocketProps = {
  debug: true,
  name: "tapeke",
  // host: '192.168.3.2',
  // ssl: false,
  host: "tapekeapp.com",
  ssl: true,

  port: {
    native: 10031,
    web: 20031,
    http: 30031,
  },
  cert: "MIID0DCCArigAwIBAgIEYgRJTTANBgkqhkiG9w0BAQsFADCBqTELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxDzANBgNVBAsMBnRhcGVrZTEeMBwGA1UEAwwVdGFwZWtlLnNlcnZpc29mdHMuY29tMScwJQYJKoZIhvcNAQkBFhhyaWNreS5wYXouZC45N0BnbWFpbC5jb20wHhcNMjIwMjA5MjMwNzU3WhcNMjIwMjEwMjMwNzU3WjCBqTELMAkGA1UEBhMCQk8xEjAQBgNVBAgMCUF2IEJhbnplcjETMBEGA1UEBwwKU2FudGEgQ3J1ejEXMBUGA1UECgwOU2Vydmlzb2Z0cyBTUkwxDzANBgNVBAsMBnRhcGVrZTEeMBwGA1UEAwwVdGFwZWtlLnNlcnZpc29mdHMuY29tMScwJQYJKoZIhvcNAQkBFhhyaWNreS5wYXouZC45N0BnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCaIRwLARQqohcmnm44B3Qca60sKgo/H6tXeQ7tQyvrMAmNZ2mcod0xDpUFnyEu9Ua+Bb9kF1PCPB0udqLmKG5ZeXoHkSRNF/yM++IxzjUDjNw13hyh/2cfi7GvEC2gUer5TBl0ZJWVGGcXUywlFo5DtH2uAbO8QKnnpqYEqAH9fbiP9P7TqbpkbEcMz8bgsDc8+RJB5nqcc/jdUCRA9n6a1ey3ncH26qtInsp/m0reF+MTJBzMJbYU9erUAP/GKcwmy4NE2UiFwu0QDF6AjuaI3m3FJ5Gp2z59aJeaXdHAx2SiB0wsZuw6Xun29RcGZ2KQk6iIkKg+xFU9E7AnI33BAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAGASGpT2VF+qrPj8cRwMIttnsxT/eOKWjG6gL3RewnBen7bTmAg4qjZ4TYLte6aLbbu6V/WDh52WN5rarLj3/KOHfcKmsKHpjfCuapcGEisRvB9Hpx9sePqxsEm0wjjpyfArX+Yd2E6/hFeeDnWitjgtMe5NvvSDdnVOaUliZPzbMlUT+SB60zZC00PhNCJIr+uKdApVRBabMUMNlZoM5O2fiJ7KlpKnkZWh4Xsgs2cb97pbOYfXo5NU9C+F2tjoAOkBUZVXduKTnYeojvWgyK1YNDzOeX4F3gAXpwkXdH38NtuIpSKDsMmfWRk+YU931YYAck6aBhTSEGvRe3OdQHM=",
  apis: {
    // servicio:"https://servicio.ss.lo/http/",
    roles_permisos: "https://rolespermisos.servisofts.com/http/",
    // rp: "http://192.168.0.21:30016/"
  },
  timeReconnect: 100000,
};

const SMapa = {
  key: "AIzaSyBmVFt8VV6M9TF2bANTqhztIUlxf2NhrKU",
  lat: -17.7828686,
  lng: -63.1796417,
  zoom: 14.7,
};
const SPuntero = {
  lat: -17.783903160362055,
  lng: -63.18054276526859,
  text: "My Marker",
};
export default {
  SocketProps,
  SThemeProps,
  // SConfig_Inputs,
  SMapa,
  SPuntero,
};
