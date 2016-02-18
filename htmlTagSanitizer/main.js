/**
 * Recursively removes any html including self closing html tags and JS Injection through JS self executable function 
 * @function
 * @param {string}
 */
 function htmlTagsSanitizer(string){
      	  
    //the below recursively removes any html tags that may exist in the search string
    var result = string.replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/ig, "");
      
    //the below recursively removes any self closing html tags that may exist in the search string
    result = result.replace(/<([^>]+?)([^>]*?)>/ig,"");
      
    //remove any string after javascript
    result = result.replace(/javascript:(.*)/ig,"");
      
    //remove any string after URL
    result = result.replace(/URL(.*)/ig,"");
      
    //remove any string after %
    return result = result.replace(/\%[0-9]/ig,"");

 }
var str = "|test'javascript:(function () {})";

console.log(htmlTagsSanitizer(str));
