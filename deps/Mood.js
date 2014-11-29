/**
 * A SpeakComponent that defines mood.
 * @param    String            Name of the mood.
 * @param    Array            List of influencers.
 * @param    Array            List of punctations.
 * @param    Array            List of emoticons.
 * @param    WordException    A WordException SpeakComponent
 */
var Mood = function (name, influencers, punctuations, emoticons, filter, exceptions) {
    'use strict';
    this.name = name || requirementFailed('Name is required');
    this.influencers = influencers || [];
    this.punctuations = punctuations || [];
    this.emoticons = emoticons || [];
    this.filter = filter || function(statement) {
      return statement;
    };
    this.exceptions = exceptions || new WordException();
}

module.exports = Mood;