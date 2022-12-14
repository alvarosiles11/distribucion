import {SIcon, SImage, SMarker, SView} from "servisofts-component";
import SSocket from "servisofts-socket";

const Marker = props => {
  var obj = props.data;
  var size = 28;
  const url = SSocket.api.root + "restaurante/" + obj.key;
  return (
    <SMarker
      lat={obj.latitude}
      lng={obj.longitude}
      {...props}
      tracksViewChanges={true}
    >
      <SView
        width={size}
        height={size}
        style={{
          alignItems: "center",
        }}
      >
        <SIcon name={"MarcadorMapa"} width={size} height={size} />
        <SView
          style={{
            position: "absolute",
            top: size * 0.03,
            width: size * 0.56,
            height: size * 0.56,
            backgroundColor: "blue",
            borderRadius: size,
            overflow: "hidden",
          }}
          center
        >
          <SImage
            src={url}
            style={{
              position: "absolute",
              resizeMode: "cover",
              width: size * 0.56,
              height: size * 0.56,
            }}
          />
        </SView>
      </SView>
    </SMarker>
  );
};
export default Marker;
