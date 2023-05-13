const React = require("react");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
class Index extends React.Component {
  render() {
    const { logs } = this.props;
    // console.log("idx props", logs);
    return (
      <div style={{ textAlign: "center" }}>
        {logs.map((logObj, i) => {
          return (
            <>
              <h1 key={i} style={{ listStyle: "none" }}>
                <a href={`/logs/${logObj._id}`}>{i}</a>
                {"       "}
                {capitalizeFirstLetter(logObj.title)}'s Logs
              </h1>
              <hr />
            </>
          );
        })}
        <br />
        <button>
          <a
            href="/logs/new"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Enter New Log
          </a>
        </button>
      </div>
    );
  }
}

module.exports = Index;
