# Description
#   A random sentence generator based on https://github.com/CodeOtter/speak.
#
# Configuration:
#   LIST_OF_ENV_VARS_TO_SET
#
# Commands:
#   hubot say something (mood) - This will create a sentence based on the mood. Moods include: 'anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical'
#   hubot say something stupid - It is what it is. Don't be dumb.
# 
# This will select a specified mood (Which controls punctuation, influencers, and faces.) Valid emotions are 'anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical' By default, the selected mood is random.
#
# Notes:
#   <optional notes required for the script>
#
# Author:
#   robksawyer@gmail.com
# 
# Note: This is based on the work from CodeOtter https://github.com/CodeOtter/speak

Speak = require('../src/speak.js')

module.exports = (robot) ->
  robot.respond /say something ([A-Z]||[a-z]*)?/, (msg) ->
    if(msg.match[1])
      moods = ['anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical']
      if(moods.indexOf(msg.match[0].trim()) >= -1)
        msg.reply new Speak().getStatement(msg.match[1])
      else 
        msg.reply new Speak().getStatement()
    else 
      msg.reply new Speak().getStatement()

  robot.respond /say something stupid/, (msg) ->
    msg.reply new Speak().getStatement(null, 15)
