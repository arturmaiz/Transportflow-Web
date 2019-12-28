import React, {Component} from 'react';

let networks = ["DVB", "BVG", "DB"];

class NetworkSwitch extends Component {
    constructor(props) {
        super();

        this.state = {
            network: (localStorage.getItem("network") || "").toLowerCase()
        }
    }

    setActiveNetwork(event) {
        localStorage.setItem("network", event.target.id.toLowerCase());
        this.setState({network: event.target.id.toLowerCase()});
        this.props.onChange()
    }

    render() {
        return (
            <div className={"px-1 bg-gray-300 dark\\:bg-gray-700 dark\\:text-white focus:outline-none trans rounded-lg flex"}>
                {networks.map((value, index) => {
                    return (
                        <button key={index}
                                id={value}
                                onClick={this.setActiveNetwork.bind(this)}
                                className="w-24 focus:outline-none"
                        >
                            <div id={value} className={"my-1 py-1 trans bg-none "  + (this.state.network === value.toLowerCase() ? "rounded bg-gray-100 dark\\:bg-gray-600" : "")}>{value}</div>
                        </button>
                    )
                    }
                )}
            </div>
        );
    }
}

export default NetworkSwitch;