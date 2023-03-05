"use client";

import { StaticImageData } from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import ImageBottomColor from "../../atoms/ImageBottomColor/ImageBottomColor";

import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import styles from "./MembersCarrousel.module.scss";
import "./Swiper.css";

interface IMembersCarrousel {
  membersImages: StaticImageData[];
  setMemberIndex: Dispatch<SetStateAction<number>>;
}

const MembersCarrousel = ({
  membersImages,
  setMemberIndex,
}: IMembersCarrousel) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const shiftPositions = useCallback((arr: StaticImageData[]) => {
    let newArr: StaticImageData[] = [];
    const tail = arr.slice(-1);
    const head = arr.slice(0, -1);
    newArr = newArr.concat(tail, head);
    return newArr;
  }, []);

  useEffect(() => {
    setDomLoaded(true);
    shiftPositions(membersImages);
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
            <>
              {membersImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <ImageBottomColor image={image.src} color={"purple"} />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {shiftPositions(membersImages).map((image, index) => (
                <SwiperSlide key={index}>
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
