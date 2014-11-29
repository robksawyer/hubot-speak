/**
 * A SpeakComponent that defines collections of words and rules
 * @param    String            Name of the library
 * @param    String            Token for segment tokenization
 * @param    String            Description of the library
 * @param    Function        Callback to fire when the symbol is discovered
 * @param    Array            List of words
 * @param    WordException    A WordException SpeakComponent
 */
'use strict';

var WordException = require('./WordException');
var name, token, description, action, list, exceptions;
/**
 * Throws an error message
 * @param    String    Error Message
 */
function requirementFailed(message) {
  throw new Error(message);
}

/**
 * Returns a random element from an arrary
 * @param    Array    List to use (defaults to the internal SpeechLibrary list)
 * @returns    String
 */
function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function SpeechLibrary(name, token, description, list, action, exceptions) {
  name = name || requirementFailed('Name is required');
  token = token || requirementFailed('Token is required');
  description = description || '';
  action = action || function (statement, position, mood, speak) {
    return getRandomItem(list);
  };
  list = list || [];
  exceptions = exceptions || new WordException();
}

module.exports = SpeechLibrary;