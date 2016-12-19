      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
    	   // grab the CSV
    	  
    	   $.get("arrestsandcrimes.csv", function(csvString) {
    	      // transform the CSV string into a 2-dimensional array
    	      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

    	      // this new DataTable object holds all the data
    	      var data = new google.visualization.arrayToDataTable(arrayData);

    	      // this view can select a subset of the data at a time
    	      var view = new google.visualization.DataView(data);
    	      view.setColumns([0,1,2]);

    	     // set chart options
    	     var options = {
    	        width: 1000,
    	    	height: 400,
    	    	bar: {groupWidth: '85%'},
    	    	series: {
    	            0: { axis: 'ARRESTS' }, // Bind series 0 to an axis named 'distance'.
    	            1: { axis: 'CRIMES' } // Bind series 1 to an axis named 'brightness'.
    	          },
    	        axes: {
    	            y: {
    	              ARRESTS: {label: 'ARRESTS'}, // Left y-axis.
    	              CRIMES: {side: 'right', label: 'CRIMES'} // Right y-axis.
    	            }
    	        },
    	        hAxis: {format : ' #',title: data.getColumnLabel(0), minValue: data.getColumnRange(0).min, maxValue: data.getColumnRange(0).max, ticks: data.getDistinctValues(0),slantedText: true, slantedTextAngle: 90},
    	        vAxis: {title: data.getColumnLabel(1), minValue: data.getColumnRange(1).min, maxValue: data.getColumnRange(1).max},  
    	     };

    	     // create the chart object and draw it
    	     var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    	     chart.draw(view, options);
    	  });
      }