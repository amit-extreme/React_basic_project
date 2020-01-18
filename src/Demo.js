import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const Demo = ({name}) => {
    return <div className="maindiv_style">
        <h1>Hello {name}</h1>
        <p>Welcome to my channel</p>
    </div>
}
// class Demo extends Component {
//     render(){
//         return <div className="maindiv_style">
//          <h1>Hello {this.props.name}</h1>
//         <p>Welcome to my channel</p>
//         </div>
//     }
// }

export default Demo;