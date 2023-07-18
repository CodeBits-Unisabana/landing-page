"use client";

import CountUp from "react-countup";

import styles from "./Statistic.module.scss";

interface IStatistic {
  description: string;
  data: number;
}

const Statistic = ({ description, data }: IStatistic) => {
  return (
    <div className={styles.statistic}>
      <div className={styles.description}>{description}:</div>
      <CountUp
        className={styles.data}
        start={0}
        end={data}
        enableScrollSpy={true}
        scrollSpyDelay={1}
        scrollSpyOnce={true}
      ></CountUp>
    </div>
  );
};

export default Statistic;
