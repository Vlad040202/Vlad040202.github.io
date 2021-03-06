/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application

 */
 function view(idBlock){
 	style = document.getElementById(idBlock).style;
    style.display = (style.display == 'block') ? 'none' : 'block';
 }
 function addMarkers() {
  // create map objects
  var Hobbycenter_marker = new H.map.Marker({lat:55.7899091,  lng:37.5889767}),      
      batut_marker = new H.map.Marker({lat:55.800827, lng:37.5923902}),      
      kvest_marker = new H.map.Marker({lat:55.8044772, lng:37.5824446}),    
      karaoke_marker = new H.map.Marker({lat:55.783465, lng:37.5723813}),  
      cinema_marker = new H.map.Marker({lat:55.7775, lng:37.5985873}),  
      fun_group = new H.map.Group();

  // add markers to the group
  fun_group.addObjects([Hobbycenter_marker, batut_marker, kvest_marker, karaoke_marker, cinema_marker]);
  map.addObject(fun_group);
  fun_group.setVisibility(1);

  
}

function VisibilityFunGroup() {

}


function moveMapToBerlin(map){
  map.setCenter({lat:55.7899, lng:37.5938471});       
  map.setZoom(15);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'X9bSdPviwocCnp4WBrA1',
  app_code: '76IlRvjEHdQ2A89SBkeczA',
  useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

//Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(
	document.getElementById('map'),
	 platform.getMapTileService({
	        	type: 'base'
	    	}).createTileLayer(
	        	'maptile',
	        	'reduced.day',
	        	256 * pixelRatio, // bigger tile size for retina
	        	'png'
	    	)
	 )

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
moveMapToBerlin(map);

//add marker to map
addMarkers();

var searcForm = document.form.f1;

console.log(searcForm.old);