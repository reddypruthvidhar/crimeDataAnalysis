    
	  	
    

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
    	   // grab the CSV
    	  
    	   $.get("primarytype_topcrimes.csv", function(csvString) {
    	      // transform the CSV string into a 2-dimensional array
    	      var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

    	      // this new DataTable object holds all the data
    	      var data = new google.visualization.arrayToDataTable(arrayData);

    	      // this view can select a subset of the data at a time
    	      var view = new google.visualization.DataView(data);
    	      view.setColumns([0,1]);

    	     // set chart options
    	     var options = {
    	    		 title: 'Share of top 10 Crimes'
    	     };

    	     // create the chart object and draw it
    	     var chart = new google.visualization.PieChart(document.getElementById('chart_div4'));
    	     chart.draw(view, options);
    	  });
      }