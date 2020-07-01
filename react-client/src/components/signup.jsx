
import React, { Component } from 'react';
class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return (
         <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="Form1">
                <label className="Label1" htmlFor="Email">Email</label>
                <input type="text" id="Email" className="Input1" placeholder="Enter your Email" Email="Email" value={this.state.Email} onChange={this.handleChange} />
              </div>
              <div className="Form1">
                <label className="Label1" htmlFor="password">Password</label>
                <input type="password" id="password" className="Input1" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="Form1">
              <Router>
      <div>
          <button className="Button1"><Link to="/signup">SIGINUP Up</button>
     <Switch>
          <Route path="/signup">
            </>
          </Route>
         </Switch>
      </div>
    </Router>

              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;