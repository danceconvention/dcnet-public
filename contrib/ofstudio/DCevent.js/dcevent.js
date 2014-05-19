/*
 * dcevent.js
 * Requires jQuery
 * Oleg Fomin <ofstudio@gmail.com>
 * May 2014
 */


function DCEvent () {


    // Format output data
    // Last_Name First_Name[, City][ – Partner_Last_Name Partner_First_Name[, Partner_City]]
    var formatItems = function (items) {
        $.each(items, function (key,item) {
            s = item.participantName.split(' ').reverse().join(' '); // Swap first and last name
            if (item.cityAndState) s = s.concat(", " + item.cityAndState);
            if (item.partnerName) { 
                s = s.concat(" – " + item.partnerName.split(' ').reverse().join(' '));
                if (item.partnerCity) s = s.concat(", " + item.partnerCity);
            }
            items[key] = s;               
        });
        return items;
    }


    // Output data to specified container 
    var outputItems = function (container, items) {
        out = (items.length > 0) ? ('<li>'.concat(items.join('</li><li>')).concat('</li>')) : ("");
        $(container).html($( "<ol/>", { html: out }));
    }


    // danceconvention.net API URL
    var custom_api = $('[data-dcevent-api]')[0];
    var api_url = custom_api ? $(custom_api).data().dceventApi : 'https://danceconvention.net/eventdirector/rest/eventinfo/';

    // Find all event IDs on the page and assign respective data containers to them
    //  
    // events_list = {
    //     'event-id1' : [container1, container2, container3, ...],
    //     'event-id2' : [container4, container5, container6, ...],
    //     ...
    var events_list = {}; 
    $.each($('[data-dcevent]'), function(key, container) {
        var id = $(container).data().dcevent;
        if (!events_list[id]) events_list[id] = [];
        events_list[id].push(container);
    });    

    // Iterate all event IDs on the page
    $.each(events_list, function (event_id, event_containers) {

        // 1. Get list of contests of the event
        //
        // event_contests = {
        //     'contest1_name' : contest1,
        //     'contest2_id'   : contest2,
        //     ...
        var event_contests = {};
        $.get(api_url + event_id.toString() + '/contests', function(data) {
            $.each (data, function (key, contest) {
                event_contests[contest.name] = contest;
                event_contests[contest.id] = contest;
            });

            // 2. Iterate all containers of the event
            $.each (event_containers, function (key, container) {
                container.data = $(container).data();

                // 3. If Event Signups container
                if ((container.data.select == 'signups') && (!container.data.contest)) {
                    $.get(api_url + event_id.toString() + '/signups', function(data) {
                        outputItems(container, formatItems(data));
                    });
                }

                // 4. If Contest container
                if (container.data.contest) {
                    $.get(
                        api_url + 'signups/' 
                        + event_contests[container.data.contest].id.toString() 
                        + '/' + container.data.select,
                        function (data) {
                           outputItems(container, formatItems(data));
                        });
                }

            }); // Iterate all containers of the event 

        }); // Get list of contests of the event (async)

    }); // Iterate all event IDs on the page

}

// Run DCEvent on document ready
jQuery(function(){
       DCEvent();
});