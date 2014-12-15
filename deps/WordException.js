'use strict';

var dictionary = {};

/**
 * A list of word exceptions/triggers for a SpeakComponents.
 * @param    Object    Dictionary of callbacks for specific words/regular expressions as the property.
 */
function WordException(dictionary) {
  dictionary = dictionary || {};
}

module.exports = {

  dictionary: dictionary,

  /**
   * Finds and replaces all word exceptions in a statement.
   * @param    String    Statement
   * @returns    String    Statement
   */
  find: function (statement) {
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
  }
}

module.exports = WordException;