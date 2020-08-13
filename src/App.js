import React, { Component} from 'react';
import Projects from './Projects';
import Link from './Link';
import Sites from './Sites'
import profile from './assets/profile.png'

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const ComponentClassInstance = new ComponentClass();


class App extends Component {
    state = { displayBio: false }
    // constructor(){
    //     super();
    //     this.state = { displayBio: false };
    
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
}

    toggleDisplayBio(){
        this.setState({ displayBio: !this.state.displayBio });
    }
    render(){
        return (
            <div>
 
                <h1>Hello!</h1>
                <p>my name is Alex.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
    {
        this.state.displayBio ? (
            <div>
        <p>I live in San Antonio</p>
        <p>My favorite language is Javascript.</p>
        <button onClick={this.toggleDisplayBio}>Show Less</button>
        </div>
    ) : (
        <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
        </div>
    )
        }
        <hr />
        <Projects />
        <Link />
        </div>
        )
}
}
export default App;