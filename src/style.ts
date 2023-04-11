import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;

    ::-webkit-scrollbar {
      width: 8px;
      background-color: #8f3224;
      border-radius: 10px;
      scrollbar-color: rebeccapurple red;
      scrollbar-width: thin;
    }

    ::-webkit-scrollbar-thumb {
      background: #f3533b;
      border-radius: 10px;
    }
  }
  body {
    overflow-x: hidden;
  }
`;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const theme = {
  light: {
    textColorWhite: '#fff',
    textColorBlack: '#000',
    topBackground: 'linear-gradient(115deg, rgb(0 0 0 / 14%) 58%, #333333 58%)',
    backgroundGrey: '#595959',
    backgroundBlack: '#000000',
    backgroundWhite: 'white',
    pokemonListBackground:
      'linear-gradient(115deg, rgba(255,255,255,0) 48%, #f3533b 48% 55%, #fb7248 55%)',
    pokemonListBackgroundSecond:
      'linear-gradient(225deg, rgba(0,161,233, 1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 80%, rgba(229,0,91,0.5) 100%)',
    pokemonStats: 'linear-gradient(90deg, #f24a16 30%, black 10%)',
    pokemonBackground: 'linear-gradient(115deg, #f24a16 50%, black 10%)',
    greyGlass: 'rgba(0,0,0, 0.2)'
  }
};

export { Global, AppWrapper, theme };
