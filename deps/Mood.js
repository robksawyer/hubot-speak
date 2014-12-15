/**
 * A SpeakComponent that defines mood.
 * @param    String            Name of the mood.
 * @param    Array            List of influencers.
 * @param    Array            List of punctations.
 * @param    Array            List of emoticons.
 * @param    WordException    A WordException SpeakComponent
 */
'use strict';

var WordException = require('./WordException');
var name, influencers, punctuations, emoticons, filter, exceptions;
/**
 * Throws an error message
 * @param    String    Error Message
 */
function requirementFailed(message) {
  throw new Error(message);
}

function Mood(name, influencers, punctuations, emoticons, filter, exceptions) {
  name = name || requirementFailed('Name is required');
  influencers = influencers || [];
  punctuations = punctuations || [];
  emoticons = emoticons || [];
  filter = filter || function (statement) {
    return statement;
  };
  exceptions = exceptions || new WordException();
}

module.exports = Mood;