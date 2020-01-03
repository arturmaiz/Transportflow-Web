import React, {Component} from 'react';
import "../../css/wagenreihung.css";

class Wagenreihung extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sectors: []
        }
    }

    componentDidMount() {
        this.parseWagons();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps === this.props)
            return;
        this.parseWagons();
    }

    parseWagons() {
        let sectors = [];
        let currentSector = {
            name: "",
            wagons: []
        };
        this.props.wagons.forEach((wagon, index) => {
            if (wagon.fahrzeugsektor !== currentSector.name) {
                if (currentSector.name !== "")
                    sectors.push(Object.assign({}, currentSector));
                currentSector = {
                    name: wagon.fahrzeugsektor,
                    wagons: []
                }
            }
            if (wagon.type === "LOK" || wagon.type.includes("STEUERWAGEN") || wagon.type === "TRIEBKOPF") {
                if (index === 0) {
                    wagon.orientation = "left";
                } else if (index === this.props.wagons.length-1) {
                    wagon.orientation = "right";
                } else if (this.props.wagons[index-1].type === "LOK" || this.props.wagons[index-1].type.includes("STEUERWAGEN")) {
                    wagon.orientation = "left";
                } else {
                    wagon.orientation = "right";
                }
            } else {
                wagon.orientation = "";
            }
            currentSector.wagons.push(wagon);
        });
        this.setState({sectors: sectors});
        console.log(sectors)
    }

    render() {
        return (
            <>
                {this.state.sectors.length > 0 ?
                    <div className="station">
                        <div className="platform">
                            {this.state.sectors.map((sector, index) => {
                                return (
                                    <div className="platform-part" key={index}>
                                        <div className="platform-id">{sector.name}</div>
                                        <div className="wagon-wrapper">
                                            {sector.wagons.map((wagon, index) => {
                                                if (wagon.orientation === "left")
                                                    return (
                                                        <div key={index} className={"wagon engine-left" + (wagon.type.includes("ERSTEKLASSE") ? " first-class" : "")}>
                                                            <div className="wagon-parts">
                                                                <div className="triangle-top"/>
                                                                <div className="triangle-back"/>
                                                                <div className="box">{wagon.wagonNumber}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                else if (wagon.orientation === "")
                                                    return (
                                                        <div key={index} className={"wagon" + (wagon.type.includes("ERSTEKLASSE") ? " first-class" : "")}>
                                                            <div className="wagon-parts">
                                                                <div className="box">{wagon.wagonNumber}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                else if (wagon.orientation === "right")
                                                    return (
                                                        <div key={index} className={"wagon engine-right" + (wagon.type.includes("ERSTEKLASSE") ? " first-class" : "")}>
                                                            <div className="wagon-parts">
                                                                <div className="box">{wagon.wagonNumber}</div>
                                                                <div className="triangle-back"/>
                                                                <div className="triangle-top"/>
                                                            </div>
                                                        </div>
                                                    );
                                                return (<></>);
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                :
                    <></>
                }
            </>
        );
    }
}

/*
<ion-icon name="ios-train"/>
                                        {" "}
                                        <span className="text-base pb-1 truncate">{wagon.type
                                            .replace("REISEZUGWAGEN", "")
                                            .replace("LOK", "Lok")
                                            .replace("TRIEBKOPF", "Triebkopf")
                                            .replace("ERSTEZWEITEKLASSE", "1. & 2. Klasse")
                                            .replace("ERSTEKLASSE", "1. Klasse")
                                            .replace("ZWEITEKLASSE", "2. Klasse")
                                            .replace("HALBSPEISEWAGEN", "Halbspeisewagen ")
                                            .replace("SPEISEWAGEN", "Speisewagen ")
                                            .replace("DOPPELSTOCKSTEUERWAGEN", "Doppelstocksteuerwagen ")
                                            .replace("DOPPELSTOCKWAGEN", "Doppelstockwagen ")
                                            .replace("STEUERWAGEN", "Steuerwagen ")

                                        }</span>
                                        </span>
                                        <span className="whitespace-no-wrap">
                                        <span
                                            className="text-base">{wagon.wagonNumber !== null ? <>(Wagen {wagon.wagonNumber})</> : ""}</span> {wagon.fahrzeugsektor}
                                    </span>
 */

export default Wagenreihung;