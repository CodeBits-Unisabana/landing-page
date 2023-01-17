"use client";

import { useState } from "react";

import Illustration2 from "../../../../public/assets/Illustration2.svg";

import MembersCarrousel from "../../molecules/MembersCarrousel/MembersCarrousel";

import styles from "./Members.module.scss";

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

interface IMembers {}

const Members = ({}: IMembers) => {
  const [memberIndex, setMemberIndex] = useState<number>(0);

  const membersListX3 = [
    {
      name: "JONATHAN BUITRAGO",
      description: `Persistente y determinado con la educación, el aprendizaje continuo y el 
      detalle. Fundador y líder de desarrollo front end de CodeBits.`,
    },
    {
      name: "MIGUEL TIMOTÉ",
      description: `Siempre en busca de nuevos conocimientos y habilidades para compartir 
      con aquellos que desean cambiar el mundo. Fundador y lider de diseño UX/UI de CodeBits`,
    },
    {
      name: "RICHARD GUEVARA",
      description: `Compromiso con la educación y el talento joven, el apoyo y el trabajo duro. 
      Fundador, líder de desarrollo back end y líder de CodeBits.`,
    },
    {
      name: "XIMENA RAMIREZ",
      description: `Pasión por crear innovando, y la resolución de problemas a partir de la 
      analítica de cada situación. Fundadora, líder de logística y community manager de CodeBits`,
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
