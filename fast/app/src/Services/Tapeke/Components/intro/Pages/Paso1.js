import React from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SText, SNavigation, SView, SIcon, STheme, SImage } from 'servisofts-component';
class Paso1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage hidden disableScroll center>
                <SView flex center col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <SView col={"xs-12"} >
                        <SHr height={20} />
                        <SView col={"xs-12"} center>
                            <SImage src={require('../../../../../Assets/img/paso1.png')} style={{
                                borderRadius: 8,
                                // width: 300,
                                height: 380,
                                // size: 'contain'
                            }} />
                        </SView>
                        <SHr height={30} />
                        <SView col={"xs-12"} center>
                            <SText color={STheme.color.text} fontSize={21} style={{ fontWeight: "bold" }} center >Buscar en el mapa</SText>
                            <SHr height={15} />
                            <SText color={STheme.color.gray} fontSize={13} center height={45}>No tienes que ir muy lejos para encontrar un buen restaurante, hemos proporcionado todos los
                                restaurantes que está cerca de ti</SText>
                        </SView>
                    </SView>
                    <SHr height={60} />
                    <SView col={"xs-12"} row>
                        <SView col={"xs-4"} onPress={() => {
                            SNavigation.navigate("login");
                        }}>
                            <SText fontSize={16} color={STheme.color.gray}>Saltar</SText>
                        </SView>
                        <SView col={"xs-4"} center row>
                            <SView width={10} height={10} backgroundColor={STheme.color.primary} style={{ borderRadius: 15 }}></SView>
                            <SView width={8} />
                            <SView width={10} height={10} backgroundColor={STheme.color.lightGray} style={{ borderRadius: 15 }}></SView>
                            <SView width={8} />
                            <SView width={10} height={10} backgroundColor={STheme.color.lightGray} style={{ borderRadius: 15 }}></SView>
                        </SView>
                        <SView col={"xs-4"} style={{ alignItems: "flex-end" }} onPress={() => {
                            SNavigation.navigate("intro/paso2");
                        }}>
                            <SIcon name="Flecha1" width={15} height={15} fill={STheme.color.primary}></SIcon>
                        </SView>
                    </SView>
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Paso1);