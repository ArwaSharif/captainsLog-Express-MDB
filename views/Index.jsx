const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log("idx props", logs.title);
    return (
      <div>
        <ul>
          {logs.map((logObj, i) => {
                return(
                    <li key={i}>
                        <a href={`/logs/${i}`}>{i}</a>{"       "} 
                        {logObj.title},
                        {logObj.entry},
                        {logObj.shipIsBroken
                  ? `Ship is Broken`
                  : `Ship is not Broken`}
                    </li>
                )
            })}
        </ul>
        <br />
        <a href="/logs/new">Enter New Log</a>
      </div>
    );
  }
}

module.exports = Index;
