 /*!
  * @Project Name			: New
  * @Description			: This Script Block is to load the Qunit framework if the page is indended to unit testing 
  * @Created				: Rajesh Thoghuluva - Aug 07, 2015
  * @Last Modified 	    	        : <Enter Here>
  */
"use strict";

// Get the query string for unt testing
var path = document.getElementById('unitTestScript').src;
var queryValue = path.replace(/^[^\?]+\??/,'');

/* Load the CSS ot JS file into DOM
 *
 */
 function loadFile(/*String*/ type, /*String*/ URL, /*function*/ callback){
	 var fileref, loaded;
	 if(type === "CSS"){
		fileref = document.createElement("link");
       	fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", URL);
    }else{
		fileref = document.createElement("script");
        fileref.setAttribute("src", URL);
	}
	if (typeof fileref !== 'undefined'){
		 // execute callback function once file loaded into DOM
		  if (callback) {
			  fileref.onreadystatechange = fileref.onload = function() {
				if (!loaded) {
				  callback();
				}
				loaded = true;
			  };
			}
        document.getElementById("unitTestContainer").appendChild(fileref);
	}
 }

//Check if the page should be unit tested and load framwork core files and container divs using the flag passed throgh query string
if(typeof queryValue !== 'undefined' && queryValue === "unitTest=true"){
	
	dojo.addOnLoad(function(){
		dojo.place("<div id='qunit'></div>", 'unitTestContainer');
		dojo.place("<div id='qunit-fixture'></div>", 'unitTestContainer');
		
		//make it synchronous loading
		loadFile("CSS", "//code.jquery.com/qunit/qunit-1.18.0.css", function(){
			loadFile("JS", "//code.jquery.com/qunit/qunit-1.18.0.js", function(){
				loadFile("JS", "widget.test.js", function(){});					
			});		
		});
	});	
}
