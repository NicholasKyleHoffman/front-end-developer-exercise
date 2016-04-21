var React = require('react');
var Griddle = require('griddle-react');

var apiResults = function() {
    var json = null;

    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users',
        dataType: 'json',
        async: false,
        data: null,
        success: function(data) {
            json = data;
        }
    });
    return json;
};

export default class EventTeam extends React.Component {
    render () {
      return (<div id="results">
      <Griddle results={apiResults()} tableClassName="table" showFilter={true} showPager={false} loadingComponent={"Loading..."}
      filterPlaceholderText={"Find by name"} resultsPerPage={apiResults().length}
      showSettings={false} columns={["name", apiResults().length]} useFixedHeader={true}/>
      </div>);
      // need to bring emails beneath names, add Members component on right side of table, style rows
    }
};
