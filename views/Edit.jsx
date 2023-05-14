const React = require("react");

class Edit extends React.Component {
  render() {
    const log = this.props.logs;
    console.log('logs',log)
    return (
      <div style={{ textAlign: "center" }}>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <label>Edit Title:</label>
          <br />
          <input type="text" name="title" defaultValue={`"${log.title}"`} />
          <br />
          <label>Edit Entry:</label>
          <br />
          <input type="textarea" name="entry" defaultValue={`"${log.entry}"`}/>
          <br />
          <label>Ship is broken</label>
          {log.shipIsBroken? 
          <input type="checkbox" name="shipIsBroken" defaultChecked /> 
          :
           <input type="checkbox" name="shipIsBroken"/>}
          {/* <input type="checkbox" name="shipIsBroken" defaultValue={log.shipIsBroken}/> */}
          <p>----------------</p>
          <input
            type="submit"
            value="Edit Log"
            style={{
              fontSize: "11pt",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          />
        </form>
        <br/>
        <br/>
        <hr/>
        <br />
        <button>
          <a
            href="/logs"
            style={{ textDecoration: "none", fontWeight: "bold" }}
          >
            Back To Homepage
          </a>
        </button>
      </div>
    );
  }
}

module.exports = Edit;
