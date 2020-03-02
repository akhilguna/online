import React, { PureComponent } from 'react'

class SPdetails extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            selectedTeam: "",
            validationError: "",
            list: [
                {
                    "SP_Name": "SP 1",
                    "Customers": ["Maligai", "store", "Store 2"]
                },
                {
                    "SP_Name": "SP 2",
                    "Customers": ["SKS 1", "RET store 1", "Store 2"]
                }
            ]
        }
    }

    // componentDidMount() {
    //     fetch("")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             let teamsFromApi = data.map(team => {
    //                 return { value: team, display: team }
    //             });
    //             this.setState({
    //                 teams: [{ value: '', display: '(Select your favourite team)' }].concat(teamsFromApi)
    //             });
    //         }).catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <div>
                Hello
                {/* <select
                    value={this.state.selectedTeam}
                    onChange={e =>
                        this.setState({
                            selectedTeam: e.target.value,
                            validationError:
                                e.target.value === ""
                                    ? "You must select your favourite team"
                                    : ""
                        })
                    }
                >
                    {this.state.teams.map(team => (
                        <option
                            key={team.value}
                            value={team.value}
                        >
                            {team.display}
                        </option>
                    ))}
                </select>
                <div
                    style={{
                        color: "red",
                        marginTop: "5px"
                    }}
                >
                    {this.state.validationError}
                </div> */}

            </div>
        )
    }
}

export default SPdetails