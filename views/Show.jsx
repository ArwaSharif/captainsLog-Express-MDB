const React = require("react");

class Show extends React.Component {
  render() {
    //w/ only this.props, it was showing two objs, setting and logs
    const logs = this.props.logs;
    // console.log('show props', logs)
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Title:</h1>
        <h2 style={{color: 'orangered'}}>{logs.title}</h2>
        {/* <br /> */}
        <h1>Entry:</h1>
        <h2 style={{color: 'orangered'}}>"{logs.entry}"</h2>
        {/* <br /> */}
        <h1>Ship Status:</h1>
        <h2 style={{color: 'orangered'}}>
          {logs.shipIsBroken
            ? `"Ship is broken and needs repairs."`
            : `"Ship is not broken."`}
        </h2>
        <br />
        <hr />
        <a href="/logs" style={{ fontSize: "10pt" }}>
          Back to Home Page
        </a>
      </div>
    );
  }
}

module.exports = Show;
