// import React, { PureComponent } from 'react'
// import { Button } from 'semantic-ui-react';
  
// class SPdetails extends PureComponent {
//     constructor(props) {
//         super(props)

//         this.state = {
//             teams: [],
//             selectedTeam: "",
//             validationError: "",
//             
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
 
      
//    
//       
//     render() {
//         const { selection } = this.state
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
// import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Button} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import './Login.css';
import axios from 'axios';
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
      redirectToReferrer: false
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
    const user = {
      selectedOption: this.state.selectedOption,
      selection : this.state.selection
    };

    axios.post(`http://localhost:3004/comments`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.redirect()
      })
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
        className="input100"
        style={{outline:'none',border:'none',height:'40px',marginBottom:'0'}} 
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
        className="input100"
        style={{outline:'none',border:'none',height:'40px',marginBottom:'0'}} 
      />
      );
    } 
  }
  redirect = () => {
    window.location.href = 'http://localhost:3000/Home';
    // maybe can add spinner while loading
    return null;
  }
  render() {
    return (
      <div class="login100">
      <div className="container-login">
        <MuiThemeProvider>   
        <div class="login h-500 sides">    
        <h1>Selling Product</h1> 
         <div class="ui container pt-5">
         <form onSubmit={this.handleSubmit} class="ui form">
    <div class="field">
    <label className="txt1 pb-11">SP Name</label><br/>
    <div>
    <DropDownMenu
          value={this.state.selection} 
          onChange={this.handleChange}   
          style={{width:'100%'}}
          className="input100"
         >
          <MenuItem value={1} primaryText="SP 1"/>
          <MenuItem value={2} primaryText="SP 2"/>
        </DropDownMenu>
    </div>
    </div>
    <div class="field">
    <label className="txt1 pb-11">Customer</label><br/>
      <div>
    {this.pageControl()}
    </div>
    </div>
    <div class="field">
    <div className="pb-l-55">
    <Button type="submit"  class="submit" color="primary">Submit</Button>
    </div>
    </div>
        </form>
        </div>
        </div>
        </MuiThemeProvider>
      </div>
      </div>
    );
  }
}


export default SPdetails;