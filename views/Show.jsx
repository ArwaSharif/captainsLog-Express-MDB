const React = require("react");
const { format, formatDistance, formatRelative, subDays } = require("date-fns");
class Show extends React.Component {
  render() {
    //w/ only this.props, it was showing two objs, setting and logs
    const logs = this.props.logs;
    // console.log('show props', logs)
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Title:</h1>
        <h2 style={{ color: "orangered" }}>{logs.title}</h2>
        {/* <br /> */}
        <h1>Entry:</h1>
        <h2 style={{ color: "orangered" }}>"{logs.entry}"</h2>
        {/* <br /> */}
        <h1>Ship Status:</h1>
        <h2 style={{ color: "orangered" }}>
          {logs.shipIsBroken
            ? `"Ship is broken and needs repair"`
            : `"Ship is not broken"`}
        </h2>
        <p>-----------------------</p>
        <h5>Date of Entry:</h5>
        <h6 style={{ color: "orangered" }}>
          {format(logs.createdAt, "MM-dd-yyyy HH:mm:SS aaaa")}
        </h6>
        {/* <br /> */}
        <hr />
        <button>
          <a
            href="/logs"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Back to Home Page
          </a>
        </button>
      </div>
    );
  }
}

module.exports = Show;
