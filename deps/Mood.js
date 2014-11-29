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

/**
 * Throws an error message
 * @param    String    Error Message
 */
function requirementFailed(message) {
  throw new Error(message);
}

function Mood(name, influencers, punctuations, emoticons, filter, exceptions) {
  this.name = name || requirementFailed('Name is required');
  this.influencers = influencers || [];
  this.punctuations = punctuations || [];
  this.emoticons = emoticons || [];
  this.filter = filter || function (statement) {
    return statement;
  };
  this.exceptions = exceptions || new WordException();
}

module.exports = Mood;