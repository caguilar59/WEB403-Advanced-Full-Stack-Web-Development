import React from "react";
import Lists from "./Lists";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
    };
  }

  getLists = () => {
    this.setState({ loading: true });

    fetch("http://localhost:5000/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        this.setState({ loading: false, alldata: result });
      })
      .catch((error) => {
        console.error("Unable to fetch posts:", error);
        this.setState({ loading: false });
      });
  };

  render() {
    const listTable = this.state.loading ? (
      <span role="status">Loading Data....Please be patience.</span>
    ) : (
      <Lists alldata={this.state.alldata} />
    );

    return (
      <div className="container py-4">
        <span className="title-bar">
          <h1 className="h3 mb-3">Books</h1>
          <button type="button" className="btn btn-primary mb-3" onClick={this.getLists}>
            Get Lists
          </button>
        </span>
        {listTable}
      </div>
    );
  }
}

export default App;
