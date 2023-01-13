import styles from "./EventsCard.module.scss";

interface IEventsCard {}

const EventsCard = ({}: IEventsCard) => {
  return <div className={styles.eventsCard}></div>;
};

export default EventsCard;
