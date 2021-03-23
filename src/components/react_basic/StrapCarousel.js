import React, { Component } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src:
      "https://images.chosun.com/resizer/y5rNSO2o4UjidA9mFhvLUxvCHCA=/600x338/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/4BC5HTC4QRGFFJAKUZVEJPT7XE.jpg",
    altText: "Slide-1",
    caption: "Carousel Slide from React Strap 1",
    header: "React Slide 1",
  },
  {
    src:
      "https://www.shinsegaegroupinside.com/wp-content/uploads/2020/10/%EB%B3%B8%EB%AC%B8_900_%EA%B9%8C%EC%82%AC%EB%AF%B8%EC%95%84_02-1.png",
    altText: "Slide-2",
    caption: "Carousel Slide from React Strap 2",
    header: "React Slide 2",
  },
  {
    src:
      "http://www.wedding21news.co.kr/news/photo/201908/219256_25793_506.jpg",
    altText: "Slide-3",
    caption: "Carousel Slide from React Strap 3",
    header: "React Slide 3",
  },
];

class StrapCarousel extends Component {
  render() {
    return <UncontrolledCarousel items={items} />;
  }
}

export default StrapCarousel;
