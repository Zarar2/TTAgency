import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, useRef } from "react";
import { config } from "react-spring";
import styles from "./Carousel.module.css";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return {
      ...element,
      onClick: () => {
        if (index > count.current) {
          count.current += 1;
        } else {
          count.current -= 1;
        }
        setGoToSlide(index);
      },
    };
  });

  const [offsetRadius, setOffsetRadius] = useState(1);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  let count = useRef(1);
  let month = "1st";

  if (goToSlide + 1 === 1) {
    month = "1st";
  } else if (goToSlide + 1 === 2) {
    month = "2nd";
  } else if (goToSlide + 1 === 3) {
    month = "3rd";
  } else {
    month = `${goToSlide + 1}th`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(count.current, cards.length);
      if (count.current > props.cards.length - 1) {
        count.current = 0;
        setGoToSlide(0);
      } else {
        count.current += 1;
        setGoToSlide(count.current);
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      className={styles.carouselContainer}
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <p className={styles.sales}>{`${month} Month Sales`}</p>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
