// prettier - ignore;
"use client";

import styles from "./MembersCarrousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ImageBottomColor from "../../atoms/ImageBottomColor/ImageBottomColor";
import Richard from "../../../../public/assets/Members/Richard.jpg";
import Jonathan from "../../../../public/assets/Members/Jonathan.jpg";
import Timote from "../../../../public/assets/Members/Timote.jpg";
import Ximena from "../../../../public/assets/Members/Ximena.jpg";

interface IMembersCarrousel {
  memberIndex: number;
  setMemberIndex: Dispatch<SetStateAction<number>>;
}

const MembersCarrousel = ({
  memberIndex,
  setMemberIndex,
}: IMembersCarrousel) => {
  return (
    <div className={styles.membersCarrousel}>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={100}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        onRealIndexChange={(index) => setMemberIndex(index.realIndex)}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <ImageBottomColor image={Richard.src} color={"cyan"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBottomColor image={Jonathan.src} color={"purple"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBottomColor image={Timote.src} color={"cyan"} />
        </SwiperSlide>
        <SwiperSlide>
          <ImageBottomColor image={Ximena.src} color={"purple"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MembersCarrousel;
