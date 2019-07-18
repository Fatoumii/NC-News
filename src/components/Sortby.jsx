import React from "react";
class Sortby extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select className="sortby" onChange={this.handleChange}>
            <option>Sort-by:</option>
            <option value="date">Date</option>
            <option value="commentCount">Comment Count</option>
          </select>
        </form>
        <form>
          <select className="order">
            <option>Order:</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
  };
  handleChange = () => {};
}

export default Sortby;
