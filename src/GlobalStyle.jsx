import { createGlobalStyle } from 'styled-components';
import DMSansBold from './assets/fonts/DMSans-Bold.ttf';
import DMSansMedium from './assets/fonts/DMSans-Medium.ttf';
import DMSansRegular from './assets/fonts/DMSans-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
// 추가1. 모든 태그에 border-box 적용 (테두리와 안쪽 여백의 크기도 요소의 크기로 고려)
* {
    box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: ${(props) => props.theme.textColor};
}

*::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.secondaryColor};
}

*::selection {
  color: black;
  background: #daa520;
}

// 추가2. 가져온 폰트를 body태그 안에 있으면 다 적용되게 해줌 + theme 적용
@font-face {
  font-family: "DMSansBold";
  src: url(${DMSansBold});
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "DMSansMedium";
  src: url(${DMSansMedium});
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "DMSansRegulr";
  src: url(${DMSansRegular});
  font-weight: normal;
  font-style: normal;
}

body{
    /* font-family: 'Source Sans Pro', sans-serif; */
    font-family: "DMSansMedium";
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
}
// 추가3. 링크에 모든 밑줄 삭제
a{
    text-decoration: none;
    color:inherit;  // 색을 부모로부터 상속 받음
}
`;
