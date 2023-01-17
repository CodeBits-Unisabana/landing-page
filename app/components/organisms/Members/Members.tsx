"use client";

import { useState } from "react";

import Illustration2 from "../../../../public/assets/Illustration2.svg";

import MembersCarrousel from "../../molecules/MembersCarrousel/MembersCarrousel";

import styles from "./Members.module.scss";

interface IMembers {}

const Members = ({}: IMembers) => {
  const [memberIndex, setMemberIndex] = useState<number>(0);

  const membersListX3 = [
    {
      name: "JONATHAN BUITRAGO",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 1.`,
    },
    {
      name: "MIGUEL TIMOTÉ",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 2.`,
    },
    {
      name: "RICHARD GUEVARA",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 4.`,
    },
    {
      name: "XIMENA RAMIREZ",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 3.`,
    },
  ];

  return (
    <div className={styles.members} id="members">
      <h2 className={styles.title}>Nuestro Equipo</h2>
      <MembersCarrousel
        memberIndex={memberIndex}
        setMemberIndex={setMemberIndex}
      />
      <div className={styles.memberData}>
        <h3 className={styles.memberName}>{membersListX3[memberIndex].name}</h3>
        <p className={styles.memberDescription}>
          {membersListX3[memberIndex].description}
        </p>
      </div>
      <img src={Illustration2.src} alt="" className={styles.illustration} />
    </div>
  );
};

export default Members;
