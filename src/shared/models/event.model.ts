export interface EventModel {
    id: string; //required
    title: string;//required
    start: Date;	// required
    end: Date;	
    allDay: boolean;
    description: string;
    color: string;
    repeat: boolean;
    repeatType: string;
    notification: boolean;
    notificationTime: Date;
    private: boolean;
    createdBy: string;
    travelId: string;
}
    // url: string; // Optional.
    // className:	string // o Array. Optional. A CSS class (or array of classes) that will be attached to this event's element.
    // editable: boolean	// true or false. Optional. Overrides the master editable option for this single event.
    // startEditable: boolean	// true or false. Optional. Overrides the master eventStartEditable option for this single event.
    // durationEditable: boolean //	true or false. Optional. Overrides the master eventDurationEditable option for this single event.
    // resourceEditable: boolean //	true or false. Optional. Overrides the master eventResourceEditable option for this single event.
    // rendering: string //	Allows alternate rendering of the event, like background events. Can be empty, "background", or "inverse-background"
    // overlap: boolean //	true or false. Optional. Overrides the master eventOverlap option for this single event. If false, prevents this event from being dragged/resized over other events. Also prevents other events from being dragged/resized over this event.
    // constraint: string //	an event ID, "businessHours", object. Optional. Overrides the master eventConstraint option for this single event.
    // source: EventModel // Source Object. Automatically populated. A reference to the event source that this event came from.
    // color: string //	Sets an event's background and border color just like the calendar-wide eventColor option.
    // backgroundColor: string //	Sets an event's background color just like the calendar-wide eventBackgroundColor option.
    // borderColor: string //	Sets an event's border color just like the the calendar-wide eventBorderColor option.
    // textColor: string // Sets an event's text color just like the calendar-wide eventTextColor option.