/**
 * A list of word exceptions/triggers for a SpeakComponents.
 * @param    Object    Dictionary of callbacks for specific words/regular expressions as the property.
 */
var WordException = function(dictionary) {
    this.dictionary = dictionary || {};
}

/**
 * Finds and replaces all word exceptions in a statement.
 * @param    String    Statement
 * @returns    String    Statement
 */
WordException.prototype.find = function (statement) {
    'use strict';
    var i, results;
    for (i in this.dictionary) {
        if (this.dictionary.hasOwnProperty(i)) {
            results = new RegExp(i).exec(statement);
            if (results !== null) {
                statement = this.dictionary[i](statement);
            }
        }
    }
    return statement;
};

module.exports = WordException;