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

Speak = require '../deps/Speak.js'

module.exports = (robot) ->

  robot.hear /say something stupid/i, (msg) ->
    msg.send Speak.getStatement null, 15

  robot.hear /say something ([A-Z]||[a-z]*)?/i, (msg) ->
    if msg.match[1] 
      adjs = ['angry', 'jealous', 'fearful', 'paranoid', 'curious']
      moods = ['anger', 'jealousy', 'fear', 'paranoia', 'curiosity', 'joyful', 'excited', 'calm', 'ashamed', 'apathetic', 'logical']
      if moods.indexOf(msg.match[1].trim()) >= -1
        msg.send Speak.getStatement msg.match[1].trim()
      else 
        switch msg.match[0].trim()
          when adjs[0] then matcher = moods[0]
          when adjs[1] then matcher = moods[1]
          when adjs[2] then matcher = moods[2]
          when adjs[3] then matcher = moods[3]
          when adjs[4] then matcher = moods[4]
          else matcher = ''

        msg.send Speak.getStatement matcher
    else 
      msg.send Speak.getStatement
