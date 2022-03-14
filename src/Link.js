import React, { Component} from 'react';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const ComponentClassInstance = new ComponentClass();


class Link extends Component {

    render(){
        return (
            <div>
            <h3><a href="https://github.com/alexanderross936" target="_blank">My Github</a></h3>
            </div>
        )
}
}
export default Link;