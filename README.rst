lessArcane
===========
With lessArcane you can share your gists dumped from gistbox
as a browseable library.

The json retrieved from gistbox uses a single backslash to represent a newline
::

     This is my text and now for a newline\ everthing will occur on a new line

Unfortunately the json spec prefers this pattern::

     This is my text and now for a newline\\neverything will occur on a new line

To fix this we have to preprocess `sample.json` to replace the gistbox style with the
json style as follows::

     %s/\\\ /\\n/g 

The result is `sample-processed.json` which respects newlines.



