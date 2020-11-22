import { createGlobalStyle, css } from 'styled-components'

const GlobalAppStyles = createGlobalStyle`
    ${({ theme }) => css`
        @font-face {
            font-family: 'Montserrat';
            src: url('../assets/fonts/montserrat-regular.woff2') format('woff2'),
                url('../assets/fonts/montserrat-regular.woff') format('woff')
                url('../assets/fonts/montserrat-regular.ttf')  format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('../assets/fonts/montserrat-light.woff2') format('woff2'),
                url('../assets/fonts/montserrat-light.woff') format('woff'),
                url('../assets/fonts/montserrat-light.ttf')  format('truetype');
            font-weight: lighter;
            font-style: normal;
        }

        @font-face {
            font-family: 'Montserrat';
            src: url('../assets/fonts/montserrat-bold.woff2') format('woff2'),
                url('../assets/fonts/montserrat-bold.woff') format('woff'),
                url('../assets/fonts/montserrat-bold.ttf')  format('truetype');
            font-weight: 600;
            font-style: normal;
        }

        * {
            box-sizing: border-box;
        }

        body {
            background: ${theme.color.white};
            color: ${theme.color.text};
            font-family: ${theme.font.family};
            font-size: ${theme.font.size};
            line-height: ${theme.font.lineHeight};
            margin: 0;
        }

        main {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 18px 12px 0;

            @media ${theme.device.tablet} {
                margin-left: auto;
                margin-right: auto;
                width: 660px;
            }
        }

        input,
        label,
        select,
        button,
        textarea {
            font-family: ${theme.font.family};
            font-size: ${theme.font.size};
            line-height: ${theme.font.lineHeight};
        }
    `}
`;

export default GlobalAppStyles;
