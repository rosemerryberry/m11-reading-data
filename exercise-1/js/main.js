// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
    // Use $.get to read in your `data/students.csv` dataset: remember, you must be running a local server
    $.get('data/students.csv', function(data, error) {
        // Parse the data using Papa.parse
        var parsedData = Papa.parse(data, {
        	header:true
        }).data;

        // Use jQuery to create a table, and store that in a variable
        var table = $('<table>');

        // Append a table header for each key in your first observation
        var keys = Object.keys(parsedData[0]);
        keys.map(function(d) {
            return (table.append('<th>' + d + '<td>'));
        });

        // Iterate through your array and create a new table row for each element in your array

        parsedData.map( function(d) {
            return(table.append('<tr>' + d + '</tr>'));
        })

        // Add a cell (<td>) for each key/value pair in your object
        var cell = Object.keys(parsedData)

        // Select your `sandbox` section, and append your table to it
        $("#sandbox").append(table); 

    });
});
