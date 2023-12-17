import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, Point, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { houses } from "../data/houses";
import Navbar from "../components/Navbar";

const Map = () => {
    const customIcon = new Icon(
        {
            // iconUrl:"https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-house-icon-png-image_313784.jpg",
            iconUrl: require("../img/home-button.png"),
            iconSize: [38, 38] //size of the icon
        }
    )
    return (
        <div>
            <Navbar/>
            <MapContainer center={[43.07, -89.40]} zoom={13}>
            <h2 style={{ fontSize:"25px",position:"relative", top:"0",left:"6vh",color:"white", backgroundColor: "transparent", zIndex:999}}>This map shows the affordable housing in Madison, WI area.</h2>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png  "
                />
                <MarkerClusterGroup
                // chunkedLoading
                // iconCreateFunction={createCustomClusterIcon}
                >
                    {houses.map(house => (
                        <Marker position={house.coord} icon={customIcon}>
                            <Popup>
                                <h3>Information about this apartment</h3>
                                Name: {house.apName}<br />
                                Address: {house.address}<br />
                                <a href={house.official_site} target='_blank'>Official Site</a><br />
                                <a href={house.source} target='_blank'>Data Source</a>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}

export default Map;

