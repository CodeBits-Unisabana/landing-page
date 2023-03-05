import styles from "./EventsCard.module.scss";

interface IEventsCard {
  image: string;
  title: string;
  upperInfo: string;
  lowerInfo: string;
  color: "cyan" | "purple";
}

const EventsCard = ({
  image,
  title,
  upperInfo,
  lowerInfo,
  color,
}: IEventsCard) => {
  return (
    <div
      className={styles.eventsCard}
      style={{ borderBottom: `12px solid var(--${color}-color)` }}
    >
      <img src={image} alt="" className={styles.image} />
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.days}>{upperInfo}</span>
        <span className={styles.hours}>{lowerInfo}</span>
      </div>
    </div>
  );
};

export default EventsCard;
