import { css } from 'styled-components';

interface sizes {
  [device: string]: number
}
const sizes: sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 560
};

// export const media = Object.keys(sizes).reduce(
//   (acc, label) => {
//     acc[label] = (literals: TemplateStringsArray, ...args: any[]) => {
//       console.log(args)
//       return css`
//     @media (max-width: ${sizes[label]}px){
//       ${css(literals, ...args)};
//     }
//   `.join("")
//     };
//     return acc;
//   }, {} as Record<
//     keyof typeof sizes,
//     (l: TemplateStringsArray, ...p: any[]) => string
//   >);

const media = Object.keys(sizes).reduce(
  (acc, label) => {
    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
      css`
        @media (max-width: ${sizes[label]}px) {
          ${css(literals, ...placeholders)};
        }
      `.join("");
    return acc;
  },
  {} as Record<
    keyof typeof sizes,
    (l: TemplateStringsArray, ...p: any[]) => string
  >,
);

export default media;