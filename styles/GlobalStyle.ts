import { css } from '@emotion/react';
export const Common = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    grey600: '#25282B',
    grey400: '#75787B',
    grey200: '#C5C8CB',
    grey100: '#EDF0F3',
    background: '#F1F6FF',
    border: '#C2CDEA',
    point: '#D3E3FF',
  },
  fonts: {
    Pretendard700: 'Pretendard-700',
    Pretendard400: 'Pretendard-400',
  },
  shadow: {
    main: '0px 3px 4px rgba(7, 77, 117, 0.18)',
  },
};
const global = css`
  html,
  body,
  #__next,
  .layout {
    height: 100%;
    width: 100%;
  }
  .container {
    margin: 0 auto;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  @font-face {
    font-family: 'Pretendard-700';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-400';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    background: ${Common.colors.background};
    line-height: 1.5;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    color: ${Common.colors.grey600};
    ::placeholder {
      color: ${Common.colors.grey200};
    }
    border: none;
    &:focus {
      outline: none;
    }
  }
  img {
    height: auto;
  }
`;

export default global;
