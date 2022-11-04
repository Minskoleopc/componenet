// import React from 'react';

// class SearchBar extends React.Component {
//   state = { term: '' };

//   onFormSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={e => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

import React from "react";

class SearchBar extends React.Component {

  state = {term:''};

  // onInputChange = (event)=>{
  //   console.log('hello')
  //   console.log(event.target.value)
  //   this.setState({term:event.target.value})
  // }


  render() {
    return (
      <div className="ui segement"> 
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
              <input 
              type= "text"
              value={this.state.term}
              onChange = {e => this.setState({ term: e.target.value })}
              //onChange = {this.onInputChange}
              // onClick =  {this.onInputClick}
              // onSubmit = {this.onSubmitB}
              />
          </div>
        </form>
      </div>
    )
  }

}

export default SearchBar





