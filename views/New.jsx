const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form action="/logs" method="POST">
          <label>Title:</label>
          <br />
          <input type="text" name="title" />
          <br />
          <label>Entry:</label>
          <br />
          <input type="textarea" name="entry" />
          <br />
          <label>Ship is broken</label>
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" value="Create Log" />
        </form>
        <hr />
        <a href="/logs" style={{ fontSize: "10pt" }}>
          Back to Home Page
        </a>
      </div>
    );
  }
}

module.exports = New;
