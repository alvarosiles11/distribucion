import React, { Component } from "react";
import { TextInput } from 'react-native';
import { connect } from "react-redux";
import { SButtom, SDate, SHr, SIcon, SInput, SLoad, SNavigation, SPage, SPopup, SText, STheme, SThread, SView } from "servisofts-component";
import PButtom from "../../../../../../Components/PButtom";
import Header from "./components/Header";

import SSocket from 'servisofts-socket';
import usuario from "../..";

class SmsValidation extends Component {
  constructor(props) {
    super(props);

    this.key = SNavigation.getParam("key");
    this.type = SNavigation.getParam("type");
    this.usuario = {
      Nombres: SNavigation.getParam("Nombres"),
      Apellidos: SNavigation.getParam("Apellidos"),
      Telefono: SNavigation.getParam("Telefono"),
      Correo: SNavigation.getParam("Correo"),
      Password: SNavigation.getParam("Password"),
      gmail_key: SNavigation.getParam("gmail_key"),
      facebook_key: SNavigation.getParam("facebook_key"),
    }
    this.state = { loading: false };
    this.campo = {};
  }

  componentDidMount() {
    this.solicitarCodigo()
  }
  verificar() {
    if (!this.inpCodigo.verify()) return null;
    if (this.inpCodigo.getValue().length < 5) {
      SPopup.alert("El codigo debe tener 5 digitos");
      return;
    }
    this.setState({ loading: true });
    SSocket.sendPromise({
      component: "sms_code",
      type: "verificar",
      estado: "cargando",
      code: this.inpCodigo.getValue(),
    }).then(res => {
      this.setState({ loading: false });
      usuario.Actions.registro(this.usuario, this.props);
      SNavigation.reset("usuario/carga")
    }).catch(err => {
      this.setState({ loading: false });
    })
  }
  solicitarCodigo() {
    var telefono = this.usuario?.Telefono
    if (!telefono) {
      alert("error no telefono")
      return;
    }
    var telefonoFormat = "+" + telefono.replace(/\D/g, '');
    this.setState({ loading: true });
    SSocket.sendPromise({
      component: "sms_code",
      type: "registro",
      estado: "cargando",
      data: {
        phone: telefonoFormat
      }
    }).then(res => {
      this.setState({ loading: false });
    }).catch(err => {

      if (err.error == "existe_codigo") {
        this.state.fecha_on = err.fecha_on;
        this.state.validSecond = err.validSecond;
        this.setState({ loading: false });

        return;
      }
      this.setState({ loading: false });

      SPopup.alert(err.error)

    })

  }
  getVolverAEnviar() {
    var mensage = "volver a enviar.";
    if (this.state.fecha_on) {
      var millis = new SDate(this.state.fecha_on).diffTime(new SDate());
      var seconds = Math.floor(millis / 1000);
      var restante = this.state.validSecond - seconds;
      if (restante > 0) {
        mensage = "reenviar en " + restante + " segundos.";
        new SThread(500, "hiloTime", true).start(() => {
          this.setState({ timeReintent: restante });
        })
      }
    }
    return <SText center font='Roboto' fontSize={16} color={"#666666"} style={{
      textDecorationLine: "underline",
    }} onPress={() => {
      if (this.state.loading) return;
      if (restante > 0) return;

      this.solicitarCodigo()
    }}>{mensage}</SText>
  }
  render() {
    return (<>
      <SPage title={""}>
        <SView col={"xs-12"} center backgroundColor={'transparent'}>
          <Header title={"Introduce el codigo enviado por sms al numero.\n" + this.usuario.Telefono} />
          <SHr height={50} />
          <SView col={"xs-11 sm-9 md-7 lg-6 xl-4"} center  >
            <SInput
              type="number"
              isRequired={true}
              maxLength={5}
              center
              ref={r => this.inpCodigo = r}
              style={{ borderRadius: 8, backgroundColor: STheme.color.card, fontSize: 16, height: 48, textAlign: "center", paddingRight: 12 }}
              placeholder={"_    _    _    _    _"} />
            <SHr height={50} />
            <SView row>
              <SText center font='Roboto' fontSize={16} color={"#666666"}>{"No recibiste el codigo?"}</SText>
              <SView width={8} />
              {this.getVolverAEnviar()}
            </SView>
            <SHr height={50} />

            <PButtom
              width={"100%"}
              props={{
                type: "outline"
              }}
              onPress={() => {
                if (this.state.loading) return;
                this.verificar()
              }}
            >{this.state.loading ? <SLoad /> : "ENVIAR"}</PButtom>
          </SView>
          <SHr height={20} />
        </SView>
      </SPage>
    </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(SmsValidation);
