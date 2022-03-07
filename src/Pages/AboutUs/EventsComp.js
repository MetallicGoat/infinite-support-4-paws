import "./Styles/events.css"

export default function EventsComp() {
    return (
        <div>
            <h2 className="title">Upcoming Events</h2>
            <div className="events">
                <BuildEvent monthDay="7" day="Mon" month="Mar" eventName="Puppies are born!"/>
                <BuildEvent monthDay="8" day="Tues" month="Mar" eventName="Our Birthday"/>
                <BuildEvent monthDay="9" day="Wed" month="Mar" eventName="Super cool fundraiser"/>
            </div>
        </div>
    );
}

function BuildEvent(props) {
    return (
        <div className="event">
            <div className="event-date">
                <h1>{props.monthDay}</h1>
                <div className="event-mini-date">
                    <h3>{props.day}</h3>
                    <h3>{props.month}</h3>
                </div>
            </div>
            <div className="event-name">
                <p>{props.eventName}</p>
            </div>
        </div>
    );
}