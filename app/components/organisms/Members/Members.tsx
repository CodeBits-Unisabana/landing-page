"use client";

import { Dispatch, SetStateAction, useMemo, useState } from "react";

import Illustration2 from "../../../../public/assets/Illustration2.svg";
import Espitia from "../../../../public/assets/Members/Espitia.webp";
import Jonathan from "../../../../public/assets/Members/Jonathan.webp";
import Ozami from "../../../../public/assets/Members/Ozami.webp";
import Richard from "../../../../public/assets/Members/Richard.webp";
import Timote from "../../../../public/assets/Members/Timote.webp";
import Ximena from "../../../../public/assets/Members/Ximena.webp";

import MembersCarrousel from "../../molecules/MembersCarrousel/MembersCarrousel";

import styles from "./Members.module.scss";

interface IMembers {}

const Members = ({}: IMembers) => {
  const [memberIndex, setMemberIndex] = useState<number>(0);

  const membersList = [
    {
      image: Richard,
      name: "RICHARD GUEVARA",
      description: `Compromiso con la educación y el talento joven, el apoyo y el trabajo duro. 
      Fundador, líder de desarrollo back end y líder de CodeBits.`,
    },
    {
      image: Jonathan,
      name: "JONATHAN BUITRAGO",
      description: `Persistente y determinado con la educación, el aprendizaje continuo y el 
      detalle. Fundador y líder de desarrollo front end de CodeBits.`,
    },
    {
      image: Timote,
      name: "MIGUEL TIMOTÉ",
      description: `Siempre en busca de nuevos conocimientos y habilidades para compartir 
      con aquellos que desean cambiar el mundo. Fundador y lider de diseño UX/UI de CodeBits`,
    },
    {
      image: Espitia,
      name: "DAVID ESPITIA",
      description: `Tutor y desarrollador FullStack del equipo CodeBits siempre ayudando con la resolución de nuevos problemas.`,
    },
    {
      image: Ozami,
      name: "OZAMI DUQUE",
      description: `Tutor y desarrollador web fullstack muy competente, con habilidades en múltiples lenguajes de programación, frameworks y bases de datos.`,
    },
    {
      image: Ximena,
      name: "XIMENA RAMIREZ",
      description: `Pasión por crear innovando, y la resolución de problemas a partir de la 
      analítica de cada situación. Fundadora, líder de logística y community manager de CodeBits`,
    },
  ];

  const renderCarrousel = (
    setterIndex: Dispatch<SetStateAction<number>>,
    list: any
  ) => {
    return (
      <MembersCarrousel
        membersImages={list.map((i: any) => i.image)}
        setMemberIndex={setterIndex}
      />
    );
  };

  const carrouselData = useMemo(
    () => renderCarrousel(setMemberIndex, membersList),
    []
  );

  return (
    <div className={styles.members} id="members">
      <h2 className={styles.title}>Nuestro Equipo</h2>
      {carrouselData}
      <div className={styles.memberData}>
        <h3 className={styles.memberName}>{membersList[memberIndex].name}</h3>
        <p className={styles.memberDescription}>
          {membersList[memberIndex].description}
        </p>
      </div>
      <img src={Illustration2.src} alt="" className={styles.illustration} />
    </div>
  );
};

export default Members;
