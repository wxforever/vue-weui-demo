/**
* get parameters from url
* @method getQuery
* @param {String} key
* @param {String} url
* @return {String | Array}
*/
 
  function getQuery( key , url )
{
    url = url || window.location.href;
    var rts = [],rt;
    var queryReg = new RegExp( '(^|\\?|&)' + key + '=([^&]*)(?=&|#|$)' , 'g' );
    while ( ( rt = queryReg.exec( url ) ) != null )
    {
        rts.push( decodeURIComponent( rt[ 2 ] ) );
    }
    if ( rts.length == 0 ) return null;
    if ( rts.length == 1 ) return rts[ 0 ];
    return rts;
};
 
/**
* set parameters for url
* @method setQuery
* @param {String} key
* @param {String | Array} value
* @param {String} url
* @return {String}
*/
var isArray = function(obj) { 
return Object.prototype.toString.call(obj) === '[object Array]'; 
};

 function  setQuery ( key , value , url )
{
    url = url || window.location.href;
    url = url.replace( new RegExp( '(^|\\?|&)' + key + '=[^&]*(?=&|#|$)' , 'g' ) , '' );
    //如果移除了问号，搜索到的第一个&变成问号
     /\?/.test( url )?"":url=url.replace(/&/,"?");
    value = isArray( value ) ? value : [ value ];
    
    for ( var i = value.length - 1;i >= 0;i --)
    {

        value[ i ] = encodeURIComponent( value[ i ] );
    }
    
    var p = key + '=' + value.join( '&' + key + '=' );
    return url + (location.search? '&' : '?' ) + p; // /\?/.test( url ) 改为location.search
};

 function  removeQuery ( key, url )
{
    url = url || window.location.href;
    url = url.replace( new RegExp( '(^|\\?|&)' + key + '=[^&]*(?=&|#|$)' , 'g' ) , '' );
   //如果移除了问号，搜索到的第一个&变成问号
     /\?/.test( url )?"":url=url.replace(/&/,"?");
     return url;

};
//add function  to window
window.getQuery=getQuery;
window.setQuery=setQuery;
window.removeQuery=removeQuery;
