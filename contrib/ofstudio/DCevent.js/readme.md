DCevent.js
===
Participants lists publication tool for [danceconvention/dcnet-public/](https://github.com/danceconvention/dcnet-public/)

## Requires
- jQuery

## Usage

### For single contest
```
<div data-dcevent="EVENT_ID"
     data-contest="CONTEST_NAME | CONTEST_ID" 
     data-select='SELECT" '>...</div>
```

- `EVENT_ID` — ID of event. E.g. in `https://danceconvention.net/eventdirector/ru/eventruntime/69750`  the ID is `69750`
- `CONTEST_NAME` - division name. E.g. `ProAm Jack n' Jill`
-  `SELECT` - API query:
	* `leaders`
	* `follows`
	* `couples`
	* `seeking/leaders`
	* `seeking/follows`

### For event participants list
```
<div data-dcevent="EVENT_ID" 
     data-select = "signups"></div>
```

### Custom API URL
Custom API URL can be specified
```
<script src="/js/dcevent.js"
        data-dcevent-api="http://custom_url_of_danceconvention_api"></script>
```

## Example
```
<!doctype html>
<html>
<head>
    <title>dcevent.js demo</title>
    <meta charset="utf-8" />
</head>
<body>

    <h1>Event participants</h1>
    <div data-dcevent="69750" data-select='signups'>
        <img src="ajaxLoad.gif">
    </div>

    <h2>ProAm JnJ</h2>
    <h3>Am Leaders</h3>
     <div data-dcevent="69750" data-contest="ProAm Jack n' Jill" data-select='leaders'>
    </div>

    <h2>Fast Feet Strictly</h2>
    <h3>Couples</h3>
    <div data-dcevent="69750" data-contest="Fast Feet Strictly" data-select='couples'>
    </div>
    
    <h3>Seeking Followers</h3>
    <div data-dcevent="69750" data-contest="69756" data-select='seeking/follows'>
    </div>

    <!-- Requires jQuery -->
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="dcevent.js"></script>

</body>
</html>

```

## Author
[Oleg Fomin](mailto:ofstudio@gmail.com)