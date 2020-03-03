// import React, { PureComponent } from 'react'
// import { Button } from 'semantic-ui-react';
// import Select from 'react-select';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';

// const Customers = [
//     {  value: 'Maligai',label: 'Maligai' },
//     {  value: 'store',label: 'store' },
//     {  value: 'store2',label: 'store2' },
// ]
// const Customer1 = [
//     {  value: 'SKS1',label: 'SKS1' },
//     {  value: 'RET store 1',label: 'RET store 1' },
//     {  value: 'store2',label: 'store2' },
// ]
// const SP_Name = [
//     {  value: 'SP 1',label: 'SP 1' },
//     {  value: 'SP 2',label: 'SP 2' },
// ]
  
// class SPdetails extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.state = {
//             teams: [],
//             selectedTeam: "",
//             validationError: "",
//             selection : 1,
//             selectedOption: null,
//             list: [
//                 {
//                     "SP_Name": "SP 1",
//                     "Customers": ["Maligai", "store", "Store 2"]
//                 },
//                 {
//                     "SP_Name": "SP 2",
//                     "Customers": ["SKS 1", "RET store 1", "Store 2"]
//                 }
//             ]
//         }
//     }
//     handleChange1 = selection => {
//         this.setState({ selection });
//       };

//     // componentDidMount() {
//     //     fetch("")
//     //         .then((response) => {
//     //             return response.json();
//     //         })
//     //         .then(data => {
//     //             let teamsFromApi = data.map(team => {
//     //                 return { value: team, display: team }
//     //             });
//     //             this.setState({
//     //                 teams: [{ value: '', display: '(Select your favourite team)' }].concat(teamsFromApi)
//     //             });
//     //         }).catch(error => {
//     //             console.log(error);
//     //         });
//     // }
 
//       handleChange1 = selectedOption => {
//         this.setState({ selectedOption });
//       };
      
//    
//       
//     render() {
//         const { selection } = this.state;
//         return (
//             <div>
//                 {/* <select
//                     value={this.state.selectedTeam}
//                     onChange={e =>
//                         this.setState({
//                             selectedTeam: e.target.value,
//                             validationError:
//                                 e.target.value === ""
//                                     ? "You must select your favourite team"
//                                     : ""
//                         })
//                     }
//                 >
//                     {this.state.teams.map(team => (
//                         <option
//                             key={team.value}
//                             value={team.value}
//                         >
//                             {team.display}
//                         </option>
//                     ))}
//                 </select>
//                 <div
//                     style={{
//                         color: "red",
//                         marginTop: "5px"
//                     }}
//                 >
//                     {this.state.validationError}
//                 </div> */}
                
//                 
//     }
// }
import React, { Component } from 'react';
import Select from 'react-select';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Button} from 'semantic-ui-react';
import './Login.css';


const Customers = [
        {  value: 'Maligai',label: 'Maligai' },
        {  value: 'store',label: 'store' },
        {  value: 'store2',label: 'store2' },
    ]
const Customer1 = [
        {  value: 'SKS1',label: 'SKS1' },
        {  value: 'RET store 1',label: 'RET store 1' },
        {  value: 'store2',label: 'store2' },
    ]

class SPdetails extends Component {
  constructor() {
    super();
    this.state = {
      selection : 1,
      selectedOption: null,
    };
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event, index, value) {
    //set selection to the value selected
    this.setState({ selection : value });

  }
  handleChange1 = selectedOption => {
    this.setState({ selectedOption });
  };
  
  handleSubmit = event => {
    event.preventDefault();

    // const user = {
    //   selectedOption: this.state.selectedOption,
    //   selection : this.state.selection
    // };

    // axios.post(`http://localhost:3004/comments`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }
  pageControl(){
    if( this.state.selection === 1){
      const { selectedOption } = this.state;
      return (
        <Select
        value={selectedOption}
        onChange={this.handleChange1}
        options={Customers}
        placeholder="select"
      />
      );
    } else if( this.state.selection === 2) {
      const { selectedOption } = this.state;
      return (
        <Select
        value={selectedOption}
        onChange={this.handleChange1}
        options={Customer1}
        placeholder="select"
      />
      );
    } 
  }
  

  render() {
    
    return (
      <div className="container-login">
        <MuiThemeProvider>   
        <div class="login">    
        <h1>Selling Product</h1> 
         <div class="ui container pt-5">
         <form onSubmit={this.handleSubmit} class="ui form" action="/">
    <div class="field">
    <DropDownMenu
          value={this.state.selection} 
          onChange={this.handleChange}   
          style={{width:'100%'}}
         >
          <MenuItem value={1} primaryText="SP 1"/>
          <MenuItem value={2} primaryText="SP 2"/>
        </DropDownMenu>
    </div>
    <div class="field">
    {this.pageControl()}
    </div>
    <div class="field">
    <Button variant="contained" color="primary" type="submit" href="/Home">Submit</Button>
    </div>
        </form>
        </div>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default SPdetails;