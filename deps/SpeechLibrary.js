/**
 * A SpeakComponent that defines collections of words and rules
 * @param    String            Name of the library
 * @param    String            Token for segment tokenization
 * @param    String            Description of the library
 * @param    Function        Callback to fire when the symbol is discovered
 * @param    Array            List of words
 * @param    WordException    A WordException SpeakComponent
 */
var SpeechLibrary = function (name, token, description, list, action, exceptions) {
    'use strict';
    this.name = name || requirementFailed('Name is required');
    this.token = token || requirementFailed('Token is required');
    this.description = description || '';
    this.action = action || function (statement, position, mood, speak) {
        return getRandomItem(this.list);
    };
    this.list = list || [];
    this.exceptions = exceptions || new WordException();
}

module.exports = SpeechLibrary;