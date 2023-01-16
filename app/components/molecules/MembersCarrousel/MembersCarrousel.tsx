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
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

interface IMembersCarrousel {
  memberIndex: number;
  setMemberIndex: Dispatch<SetStateAction<number>>;
}

const MembersCarrousel = ({
  memberIndex,
  setMemberIndex,
}: IMembersCarrousel) => {
  const [reseted, setReseted] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (memberIndex == 2 && !reseted) {
      setMemberIndex(0);
      setReseted(true);
    }
  }, [memberIndex]);

  return (
    <div className={styles.membersCarrousel}>
      {domLoaded && (
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={100}
          loop={true}
          navigation={true}
          onRealIndexChange={(index) => setMemberIndex(index.realIndex)}
          initialSlide={0}
          breakpoints={{
            800: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
        >
          {width <= 800 ? (
            <>
              <SwiperSlide>
                <ImageBottomColor image={Jonathan.src} color={"purple"} />
              </SwiperSlide>
              <SwiperSlide>
                <ImageBottomColor image={Timote.src} color={"cyan"} />
              </SwiperSlide>
              <SwiperSlide>
                <ImageBottomColor image={Ximena.src} color={"purple"} />
              </SwiperSlide>
              <SwiperSlide>
                <ImageBottomColor image={Richard.src} color={"cyan"} />
              </SwiperSlide>
            </>
          ) : (
            <>
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
            </>
          )}
        </Swiper>
      )}
    </div>
  );
};

export default MembersCarrousel;
