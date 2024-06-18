import { createGlobalStyle } from 'styled-components';
import 'twin.macro';
import tw from 'twin.macro';

const GlobalStyles = createGlobalStyle`
  body {
    ${tw`antialiased bg-gray-100 text-gray-900`}
  }
`;

export default GlobalStyles;