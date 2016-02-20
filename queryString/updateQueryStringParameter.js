/**
 * Determine whether the character '?' or '&' based on existing URL while adding the query string
 * @function
 * @param {string} uri
 * @param {string} key
 * @param {string} value
 * @return {string}
 */
function updateQueryStringParameter(uri, key, value) {
      var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i"),
        separator = uri.indexOf('?') !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
      } else {
        return uri + separator + key + "=" + value;
      }
}
