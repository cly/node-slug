/*
var removeFormatting = function(text){
  return text;
};
var downCase = function(text){
  return text;
};
var replaceWhiteSpace = function(text){
  return text;
};
var collapse = function(text){
  return text;
};
var stripHtmlTags = function(text){
  return text;
};
var convertAccentedEntities = function(text){
  return text;
};
var convertMiscEntities = function(text){
  return text;
};
var convertMiscCharacters = function(text){
  return text;
};
var toAscii = function(text){
  return text;
};
*/

/**
 * text = string to be sluggified
 * options = {params}
 *  toLower
 */
var toSlug = function(text, options){
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
    ;
};

module.exports = {
  toSlug:toSlug
};
