import Header from "../../components/Header";
import Slider from "react-slick";
import Link from "next/link";

const slideList = [
  {
    title: "Sports",
    img_url: "/imgs/person_bicycle.png",
    link_url: "/event/sports",
  },
  {
    title: "Programming",
    img_url: "/imgs/robot.png",
    link_url: "/event/programming",
  },
  {
    title: "Climate",
    img_url: "/imgs/globe.png",
    link_url: "/start",
  },
  {
    title: "Art",
    img_url: "/imgs/person_star.png",
    link_url: "/start",
  },
  {
    title: "Writing",
    img_url: "/imgs/book_side.png",
    link_url: "/start",
  },
];

export default function Start() {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <Header />

      <div className="container">
        <div className="ment">
          <p>
            What kind of events<br></br> are you interested in?
          </p>
        </div>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {slideList.map((slide) => {
              const isBook = slide.title === "Writing";
              const isClimate = slide.title === "Climate";
              const isStar = slide.title === "Art";
              return (
                <Link key={slide.title} href={slide.link_url}>
                  <div className="slide">
                    <div className="slide-title narrow">
                      <p>{slide.title}</p>
                    </div>
                    <div
                      className={`slide-img ${
                        isBook || isClimate ? "padding" : ""
                      } `}
                    >
                      <img src={slide.img_url} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
        <div className="btn-wrapper">
          <Link href="/start">
            <button className="narrow">Get Started</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .padding-star {
            padding-bottom: 3rem;
          }
          .padding {
            padding: 0 3rem 3rem;
          }
          .slider-wrapper {
            width: 100%;
          }
          .slide {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .slide-title p {
            background: rgba(255, 255, 255, 0.5);
            padding: 0.4rem 0.8rem;
            border-radius: 9999px;
            width: max-content;
            margin-inline: auto;
            text-align: center;
          }
          .slide-img {
            height: 50vh;
            width: calc(100vw - 2rem);
          }
          .slide-img img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            margin: auto;
          }

          .ment p {
            font-size: 1.2rem;
            text-align: center;
          }
          .btn-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-block: 4rem;
          }
          .container {
            max-width: 768px;
            margin: 0 auto;
            padding: 1rem;
          }
        `}
      </style>
    </div>
  );
}
