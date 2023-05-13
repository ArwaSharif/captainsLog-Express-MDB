const React = require('react');

class Index extends React.Component {
  render() {
    const {log} = this.props.logs
    console.log(log)
    return (
        <div>
            <ul>
            {/* {log.map((logObj, i) => {
                return(
                    <li key={i}>
                        {i}{"       "} 
                        {logObj.title},
                        {logObj.entry},
                        {logObj.shipIsBroken}
                    </li>
                )
            })} */}
           </ul> 
           <br />
           <a href='/logs/new'>Enter New Log</a>
        </div>);
  }
}

module.exports = Index;