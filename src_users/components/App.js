import React from "react";
import {connect} from "react-redux";
import {ProgressBar} from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // pre-render logic

  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    // the first time we load the app, we need that users list
  }
  handleSearch(event) {
    const name = event.target.name;
    console.log(event.target.value);
    /* this.setState({
        [name]: event.target.value
    }); */
  }
  // render
  render() {
    // show the loading state while we wait for the app to load const {users,
    // children} = this.props;
    /* if (!users.length) {
      return (<ProgressBar active now={100}/>);
    } */

    // render
    return (
      <div className="wrapper">
        <div>
          <Menu handleSearch = {this.handleSearch}/>
        </div>
        <div className="container">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || []
  };
}
export default connect(mapStateToProps)(App);
