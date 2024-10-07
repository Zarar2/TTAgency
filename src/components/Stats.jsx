import overview24_04 from "../assets/stats/overview-04.png";
import overview24_05 from "../assets/stats/overview-05.png";
import overview24_06 from "../assets/stats/overview-06.png";
import overview24_07 from "../assets/stats/overview-07.png";
import overview24_08 from "../assets/stats/overview-08.png";
import overview24_09 from "../assets/stats/overview-09.png";

import Card from "./Card";
import Carousel from "./Carousel";

function Stats() {
  let cards = [
    {
      key: 1,
      content: <Card imagen={overview24_04} />,
    },
    {
      key: 2,
      content: <Card imagen={overview24_05} />,
    },
    {
      key: 3,
      content: <Card imagen={overview24_06} />,
    },
    {
      key: 4,
      content: <Card imagen={overview24_07} />,
    },
    {
      key: 5,
      content: <Card imagen={overview24_08} />,
    },
    {
      key: 6,
      content: <Card imagen={overview24_09} />,
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default Stats;

// export default function Stats() {
//   const table = props.cards.map((element, index) => {
//     return { ...element, onClick: () => setGoToSlide(index) };
//   });

//   const [offsetRadius, setOffsetRadius] = useState(1);
//   const [showArrows, setShowArrows] = useState(false);
//   const [goToSlide, setGoToSlide] = useState(null);
//   const [cards] = useState(table);

//   useEffect(() => {
//     setOffsetRadius(props.offset);
//     setShowArrows(props.showArrows);
//   }, [props.offset, props.showArrows]);

//   return (
//     <div className={styles.statsContainer}>
//       <h1 className={styles.heading}>Here’s the brands stats</h1>
//       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//         <Carousel
//           slides={cards}
//           goToSlide={goToSlide}
//           offsetRadius={offsetRadius}
//           showNavigation={showArrows}
//           animationConfig={config.gentle}
//         />
//       </div>
//     </div>
//   );
// }
