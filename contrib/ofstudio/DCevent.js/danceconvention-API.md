danceconvention.net API
=====
May 2014

## API base URL 
https://danceconvention.net/eventdirector/rest

## API Methods
- `/eventinfo/EVENT_ID/signups` - event signups
- `/eventinfo/EVENT_ID/contests` - сontests list

### For non-couple singup divisions (Jack n' Jill, etc)
- `/eventinfo/signups/CONTEST_ID/leaders` - leaders
- `/eventinfo/signups/CONTEST_ID/follows` - followers

### For couple divisions (Classic, Strictly, etc)
- `/eventinfo/signups/CONTEST_ID/couples` - formed couples

### For couple divisions with search (Strictly Swing, etc)
- `/eventinfo/signups/CONTEST_ID/seeking/leaders` - seeking leaders 
- `/eventinfo/signups/CONTEST_ID/seeking/follows` - seeking followers
