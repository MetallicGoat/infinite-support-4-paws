import TeamComp from "./TeamComp";
import EventsComp, {BuildEvent} from "./EventsComp";
import MissionStatementComp from "./MissionStatementComp";

/**
 * HomePage Page
 *
 * Why were we founded?
 * Mission?
 * Link to Stories?
 * Images?
 * Donate?
 * Link to Contact?
 *
 **/

export default function HomePage() {
    return (
        <div className="page">
            <MissionStatementComp/>
            <EventsComp/>
            <TeamComp/>
            {/*Contact*/}
        </div>
    );
}