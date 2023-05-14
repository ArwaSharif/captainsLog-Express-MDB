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
        <br />
        <h1 style={{ color: "orangered" }}> Captain's Log </h1>
        <hr/>
        {logs.map((logObj, i) => {
          return (
            <>
              <h3 key={i} style={{ listStyle: "none" }}>
                <a href={`/logs/${logObj._id}`}>{i}</a>
                {"       "}
                {capitalizeFirstLetter(logObj.title)}
              </h3>
              <button>
              <a href={`/logs/${logObj._id}/edit`} style={{ textDecoration: "none", fontWeight: "bold" }} >EDIT LOG</a>
              </button>
              <form action={`/logs/${logObj._id}?_method=DELETE`} method="POST">
                <input
                  type="submit"
                  value="DELETE LOG"
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                />
              </form>
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
