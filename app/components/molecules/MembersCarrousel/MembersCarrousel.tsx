"use client";

import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Espitia from "../../../../public/assets/Members/Espitia.webp";
import Jonathan from "../../../../public/assets/Members/Jonathan.webp";
import Ozami from "../../../../public/assets/Members/Ozami.webp";
import Richard from "../../../../public/assets/Members/Richard.webp";
import Timote from "../../../../public/assets/Members/Timote.webp";
import Ximena from "../../../../public/assets/Members/Ximena.webp";

import ImageBottomColor from "../../atoms/ImageBottomColor/ImageBottomColor";

import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import styles from "./MembersCarrousel.module.scss";
// import Stack from "../../../dto/stack.ts"
import "./Swiper.css";

interface IMembersCarrousel {
  membersImages: StaticImageData[];
  shiftedMembersImages: StaticImageData[];
  setMemberIndex: Dispatch<SetStateAction<number>>;
}

const MembersCarrousel = ({
  membersImages,
  shiftedMembersImages,
  setMemberIndex,
}: IMembersCarrousel) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
            // <>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Richard.src} color={"purple"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Jonathan.src} color={"cyan"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Timote.src} color={"cyan"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Espitia.src} color={"purple"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Ozami.src} color={"cyan"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Ximena.src} color={"purple"} />
            //   </SwiperSlide>
            // </>
            <>
              {membersImages.map((image) => (
                <SwiperSlide>
                  <ImageBottomColor image={image.src} color={"purple"} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            // <>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Ximena.src} color={"purple"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Richard.src} color={"purple"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Jonathan.src} color={"cyan"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Timote.src} color={"purple"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Espitia.src} color={"cyan"} />
            //   </SwiperSlide>
            //   <SwiperSlide>
            //     <ImageBottomColor image={Ozami.src} color={"purple"} />
            //   </SwiperSlide>
            // </>
            <>
              {shiftedMembersImages.map((image) => (
                <SwiperSlide>
                  <ImageBottomColor image={image.src} color={"purple"} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      )}
    </div>
  );
};

export default MembersCarrousel;
