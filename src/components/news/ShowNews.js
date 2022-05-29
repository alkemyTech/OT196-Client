import React from "react";
import {Row} from "react-bootstrap";
import  NewsCard from "./NewsBox"

const apiData = [
  {
    id: 1,
    name: "Titulo de ejemplo",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed felis hendrerit, rhoncus urna id, elementum lacus. Phasellus eu magna lorem. Phasellus pretium, purus eget dignissim maximus, orci ante congue enim, id maximus nunc tortor nec nulla. Aliquam imperdiet sapien est, ut accumsan nisi ultricies eu. Fusce suscipit est vel lectus efficitur bibendum. Etiam erat nisi, porta nec augue a, mollis suscipit ipsum. Nullam eget lacinia urna. Integer maximus non justo vitae tincidunt. Nunc ante nibh, rutrum at justo id, feugiat bibendum ipsum. In in enim ut libero rutrum egestas non eget justo. Phasellus suscipit accumsan aliquet. Suspendisse efficitur turpis turpis, non ultrices mauris mattis sit amet. Maecenas sit amet nunc libero. Mauris molestie, nisi et lacinia eleifend, mi sem condimentum lorem, ut commodo ex lorem et metus. Sed commodo luctus est quis mollis.",
    categoryId: 2,
    type: "news",
    image:
      "https://raw.githubusercontent.com/alkemyTech/OT196-Client/main/public/images/blog-img-03.jpg",
    createdAt: '2022-05-25 20:37:50'
  },
  {
    id: 2,
    name: "Esto seria un titulo",
    content:
      "Donec non massa id dui ultrices congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ac quam a turpis vehicula viverra. Fusce sed ex ultrices, posuere tellus quis, ultricies mi. Suspendisse mollis eleifend ligula, ultricies maximus sapien aliquam eu. Nulla hendrerit sem nec felis lacinia hendrerit. Praesent vitae pellentesque magna. Sed sollicitudin ante in auctor semper. Donec ultrices quis tellus eu bibendum. Etiam lorem erat, consequat id placerat ac, dapibus in enim. Vivamus et magna eu augue convallis elementum. Maecenas vestibulum accumsan ligula, in laoreet ipsum venenatis quis. Vivamus consequat pellentesque ligula, at interdum mauris bibendum eu. Sed suscipit ipsum sit amet luctus tempus. Aenean sed lectus sed lacus congue efficitur. Etiam eget est maximus odio iaculis facilisis eu in justo. Nulla iaculis enim diam, non sagittis est rutrum ac. Duis at dolor quis lectus accumsan maximus ac in risus.",
    categoryId: 1,
    type: "event",
    image:
      "https://raw.githubusercontent.com/alkemyTech/OT196-Client/main/public/images/blog-img-04.jpg",
    createdAt: '2022-05-30 20:37:50'
  },
  {
    id: 3,
    name: "Un titulo demo",
    content:
      "Pellentesque in laoreet tellus. Sed est magna, rutrum ut porta non, ornare vitae nibh. Praesent quis tortor posuere, aliquam lectus eu, bibendum eros. Nunc ultrices rhoncus est, eu rhoncus lectus vehicula ut. Sed venenatis felis eget semper consectetur. Vestibulum ultrices bibendum lacus eu lacinia. Cras orci velit, scelerisque et aliquam sed, bibendum ac neque. In imperdiet erat sit amet nulla laoreet, convallis dignissim urna mollis. Sed vel nunc eu turpis cursus sodales nec non mi. Donec non imperdiet justo, ac cursus neque. Mauris at purus et lacus pulvinar auctor. Phasellus varius quam ut sapien blandit imperdiet. In a rutrum mauris. Nulla vel hendrerit est, sit amet mattis est.",
    categoryId: 1,
    type: "news",
    image:
      "https://raw.githubusercontent.com/alkemyTech/OT196-Client/main/public/images/blog-img-03.jpg",
    createdAt: '2022-07-21 20:37:50'
  },
  {
    id: 4,
    name: "Otro titulo demo un poco mas largo que los demas muy largo demasiado pero ya supero los limites de lo permitido asi que tenemos problemas",
    content:
      "Pellentesque in laoreet tellus. Sed est magna, rutrum ut porta non, ornare vitae nibh.",
    categoryId: 1,
    type: "news",
    image:
      "https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png",
    createdAt: '2022-11-22 20:37:50'
  },
  {
    id: 5,
    name: "Titulo",
    content:
      "Pellentesque in laoreet tellus. Sed est magna, rutrum ut porta non, ornare vitae nibh.",
    categoryId: 1,
    type: "news",
    image:
      "https://smalltotall.info/wp-content/uploads/2017/04/google-favicon-vector-400x400.png",
    createdAt: '2022-11-22 20:37:50'
  },
];

export default function ShowNews() {
  return (
    <>
      <Row xs={1} sm={2} md={2} xl={3} className="g-4">
            {apiData.map((e)=>(
              <NewsCard key={e.id} newData={e}/>
            ))}
        </Row>
    </>
  );
}
