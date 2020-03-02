import React from 'react';
import PropTypes from "prop-types"

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => {console.log("I am clicked")} }/>
//       </React.Fragment>   
//     )
//  }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3}
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!!</div>
}

//型チェック
User.propTypes = {
  name: PropTypes.string,
  //isRequiredで必須チェックをかける
  age: PropTypes.number.isRequired
}

export default App;
