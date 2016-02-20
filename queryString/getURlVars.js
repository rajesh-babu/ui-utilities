/**
 * Parse the URL for vars
 * @function
 * @return {object} name value pairs
 */
 function getUrlVars() {
      var vars = [],
        hash;
      var hashes = window.location.search.substring(1).split('&');
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
 }
//example usage
var qryStrValue = getUrlVars()["qryStr"];
