// prettier-ignore
"use client";

import { useState } from "react";

import Illustration2 from "../../../../public/assets/Illustration2.svg";

import MembersCarrousel from "../../molecules/MembersCarrousel/MembersCarrousel";

import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import styles from "./Members.module.scss";

// prettier-ignore

interface IMembers {}

const Members = ({}: IMembers) => {
  const { width } = useWindowDimensions();

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
      name: "XIMENA RAMIREZ",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 3.`,
    },
    {
      name: "RICHARD GUEVARA",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 4.`,
    },
  ];

  const membersListX1 = [
    {
      name: "XIMENA RAMIREZ",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 3.`,
    },
    {
      name: "RICHARD GUEVARA",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempora
        voluptatum modi! Quo consectetur illum saepe neque qui, laboriosam nobis
        mollitia, doloribus provident magnam nulla eius sit, cumque
        reprehenderit deleniti 4.`,
    },
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
  ];

  return (
    <div className={styles.members}>
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
