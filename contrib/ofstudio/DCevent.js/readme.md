DCevent.js
===
Browser-side implementation of   [danceconvention.net](https://danceconvention.net/) API

_Source code can be found at 
[ofstudio/DCevent.js](https://github.com/ofstudio/DCevent.js)_


## Features
- Participants lists publication

## Install

1. Download `dcevent.min.js` into your website directory
2. Place `<script>` tag near the bottom of your page. Example:     
`<script src="dcevent.min.js"></script>`

## Usage

Place container code somewhere in your page like this:

`<div data-dcevent="69750" data-contest="Fast Feet Strictly" data-select="couples"></div>`

This will output list of formed `couples` of `Fast Feet Strictly` contest of event with ID `69750`.

### Parameters 
- `data-dcevent`: ID of your event. Event ID can be found on danceconvention website. For example:    
`https://danceconvention.net/eventdirector/en/eventpage/86721` - the ID is `86721` (actually Pacific Motion 2014)
- `data-contest`: contest name, exactly like on danceconvention.net
- `data-select`: participants to show. Possible values: 
    - `leaders`: leaders (Jack n' Jill divisions)
    - `follows`: followers (Jack n' Jill divisions)
    - `couples`: formed couples (Strictly, Classic, etc)
    - `seeking/leaders`: leaders seeking followers (for divisions with "looking for a partner" option)
    - `seeking/follows`: followers seeking leaders (for divisions with "looking for a partner" option)
- `data-format-hook`: hook function to format data (also can be set globally in the `script` tag. See `demo.html` for example) 
    
### All event participants

To output full list of registered participants (with `APPROVED` and `PAID` status) place container like this:

`<div data-dcevent="69750" data-select="signups"></div>`

## Example
```html
<!doctype html>
<html>
<head>
    <title>dcevent.js demo</title>
    <meta charset="utf-8" />
</head>
<body>

    <h1>dcevent.js demo</h1>

    <h2>All event participants</h2>
    <div data-dcevent="69750" data-select="signups">...</div>

    <h2>ProAm JnJ</h2>
    <h3>Am Leaders</h3>
    <div data-dcevent="69750" data-contest="ProAm Jack n' Jill" data-select="leaders">...</div>

    <h2>Fast Feet Strictly</h2>
    <h3>Couples</h3>
    <div data-dcevent="69750" data-contest="Fast Feet Strictly" data-select="couples">...</div>
    
    <h3>Seeking Followers</h3>
    <div data-dcevent="69750" data-contest="69756" data-select="seeking/follows">...</div>

    <!-- Insert this script tag near the bottom of your page -->
    <script src="dcevent.min.js"></script>

</body>
</html>

```

_More examples can be found in `demo.html`_

## Advanced usage

### Custom URL of danceconvention API

Custom URL of danceconvention API can be specified in the `script` tag:
 
`<script data-dcevent-api="http:/some.new.url/of/api/" src="dcevent.min.js"></script>`

### Specify custom language
 
`<script data-dcevent-lang="ru" src="dcevent.min.js"></script>`


### DCevent object 

`DCevent` global object properties:

- `api( eventID, [api_url] )`: (_Function_) API interface
- `apiBaseUrl`: (_String_) default URL of danceconvention API
- `version`: (_String_) version of DCevent.js

#### DCevent.api interface

Asynchronous interface to danceconvention API.

Usage:

`var api = DCevent.api(eventId, apiUrl)`

Arguments:

- `eventId`: ID of event
- `apiUrl`: URL of danceconvention API (optional, if not specified `DCevent.apiBaseUrl` will be used)

Methods: 

- `getContestSignups(contest, select, success_callback)`
- `getEventSignups(success_callback)`


Example:

```javascript
var api = DCevent.api("69750"); 
api.getContestSignups("ProAm Jack n' Jill", "follows", function (data) {
    console.log(data);
});
```

## Compatibility:

All modern browsers including Internet Explorer 10 and up.

_(Internet Explorer 8 and 9 will work only if your site runs over `https` due to restrictions 
in CORS implementation in IE8 and IE9)_

 

## Release History

* _2017-12-11_ / **v0.0.3**   

    - data-dcevent-lang attribute

* _2014-07-28_ / **v0.0.2**   

    - Added data-format-hook option
    - Bugfixes (doubled spaces)
    
* _2014-06-16_ / **v0.0.1**   

    - jQuery agnostic (no external dependencies)
    - Partial support of Internet Explorer 8 and 9
    - DCevent global object
    - Minified version
    
* _2014-05-19_  / **v0.0.0**
    - Initial release
 

## TODO

- Add various data output formats (`data-format` attribute)

## License

Copyright (c) 2014 [Oleg Fomin](mailto:ofstudio@gmail.com). Licensed under the MIT license.

