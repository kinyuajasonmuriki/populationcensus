    var initials = [-0.427787, 36.9432071];
	var map = L.map('map').setView(initials, 10);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
	}).addTo( map );
	var geojsonLayer = L.geoJson(nyeri_census,{
		style: styles,
		onEachFeature: eachPolygon
	}).addTo(map);
	var panMarker = [-0.426787, 36.9422071];
	var makePan = L.marker(panMarker, {
    draggable: true,
    keyboard: true,
    title: "Drag to pan the layer.",
	}).bindLabel('Search Co-ordinates!').addTo(map);
	makePan.bindPopup('<i id="marker-info">Drag to Pan Map and get Point Coordinates of a point.</i>').openPopup();
	makePan.on('dragend', function(e){
   var panLocation = makePan.getLatLng();
    makePan.getPopup().setContent('<i id="marker-loc" >Marker Location Coordinates </br>Latitude : '+panLocation.lat+'. <br />Longitude : '+panLocation.lng+'.').openOn(map);
	map.panTo(panLocation);
	});

	    var map_doc = "<h2>Map Documentation</h2><p>This is a simple map of nyeri county intended to help visualize demographic data using geospatial technology.</br>Operations supported in the system includes:-  <ol class='doc'>" +
	          "<li>County Constituency Listings</li>" +
	           "<li>Query and Get properties related to a specific constituency</li>" +
	          "<li>Know Area of various constituencies in Nyeri County</li>" +
	          "<li>Thematic Representation of Population in Nyeri County</li>" +
	          "<li>OpenStreetMap Basemap</li></ol>"+
	        "<h3>Events and Methods Supported</h3><ol class='events'>" +
	            "<li>Mouse-hover on map to get details of the on-hiover constituency</li>"+
	             "<li>Map click to get details of the clicked constituency.</li>"+
	             "<li>Master marker - Drag of the marker pans the map, click produces info-window showing the corrdinates of the point on which the marker rests.</li>"+
	             "<li>Others....</li>"+
	             "</ol></p>";
	        $(".basics-doc").html(map_doc);
	var selected = "<h3>your selection</h3>";
	$('.selection').html(selected);
	function layerInfo(info){
	    var selected = "<h3>your selection</h3>";
	    var district = info.DISTNAME;
	    var location = info.LOCNAME;
	    var area = info.SQ_KM;
	    var perimeter = info.PERIMETER;
        var province = info.PROVNAME;
        var density = info.POPDENS2;
        var female = info.FEMALE;
        var male = info.MALE;
	    var info = "<p id='selected-feature'>Constituency Name  &rarr; &rarr;  &rarr;  "+district+"</br>Location   &rarr; &rarr;  &rarr;   "+location+"</br>Area   &rarr; &rarr;  &rarr;   "+area+" KM<sup>2</sup></br>Perimeter   &rarr; &rarr;  &rarr;   "+perimeter+" KM </br>Populatin Density   &rarr; &rarr;  &rarr;   "+density+"</br>Males Count   &rarr; &rarr;  &rarr;   "+male+"</br>Females Count   &rarr; &rarr;  &rarr;   "+female+"</br>Total Population Count   &rarr; &rarr;  &rarr;   "+ parseInt(female+male)+"</P>";
	    selected += info;
	    $('.selection').html(selected);
	}


	function styles(feature){
        var total = feature.properties.MALE+feature.properties.FEMALE;
        console.log(feature, total);
		return{
			fillColor: generateColors(total),
			fillOpacity: 0.9,
			color: '#F9FAFB',
			opacity: 0.5,
			lineWeight: 0.3
		}
	}

 function codeGen(){
     return parseInt(Math.random() * 255); 
 }

 
	function generateColors(total){
       if(total > 99999){
           
       }else{
          var color = 'rgb('+codeGen()+','+codeGen()+','+codeGen()+')';
           return color;
          
       }
        
	}

	var legend = L.control({position: 'bottomright'});
	legend.onAdd = function(map){
		var container = L.DomUtil.create('div','legend');
		var labels = [
			"Area Greater than 700.",
			"Area Greater than 650 but Less than 700.",
			"Area Greater than 450 but Less than 650.",
			"Area Greater than 250 but Less than 450.",
			"Area Greater than 150 but Less than 250.",
			"Area Greater than 60 but Less than 150.",
			"Area Greater than 25 but Less than 60.",
			"Area Less than 25"
		];
		var intervals = [701, 651, 451, 251, 151, 61, 25.001, 24.999];
		var subInterval = [];
		for (var i = 0; i < intervals.length; i++){
			subInterval[i] = intervals[i]*Math.pow(10, 8);
			//console.log(subInterval[i]);
		}
		container.innerHTML = '<div class = "legend-container" style="background: green; color: yellow; font-size: 12pt"><h3>Approx Area (X10 <sup>8</sup> M<sup>2</sup>)</h3></div>';

		for(var count=0; count < intervals.length; count++){
			container.innerHTML += '<i style="background: ' + generateColors(subInterval[count]) + '" id="label-colors"></i><i>' +labels[count]+'</i></br>';

		}
		//container.innerHTML += '<h3>Hello </h3><p style="background: green; color: yellow; font-size: 11pt">Here goes the content</p>';
		return container;
	}
	//legend.addTo(map);

	function eachPolygon(layer, polygon){
	polygon.on( 'mouseover', function(){
		this.setStyle(
			{
			fillColor: "white",
			fillOpacity: 0.7,
			color: "yellow",
			weight: 1
			}
			);
       //console.log(layer.properties);
		})
		.on('mouseout', function(e){
			geojsonLayer.resetStyle(e.target);
		})
    /*
		  .on('dbclick', function(){
			map.fitBounds(this.getBounds());
	   })*/
        .on('click', function(){
         layerInfo(layer.properties);
        })

        .bindLabel(layer.properties.LOCNAME + "<br/>Total Population: " + layer.properties.TOTAL2 +"</br>Approximate Area"+layer.properties.SQ_KM+" KM<sup>2</sup>");

		  }
