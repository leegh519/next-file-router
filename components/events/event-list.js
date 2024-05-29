import EventItem from "./event-item";
import classes from "./event-list.module.css";

export default function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          className={classes.list}
          key={event.id}
          id={event.id}
          location={event.location}
          date={event.date}
          image={event.image}
          title={event.title}
        />
      ))}
    </ul>
  );
}
