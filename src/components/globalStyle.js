import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        font-family:"Poppins",sans-serif;
        background:#050c1ae3;
        overflow:hidden;
    }

    a {
        text-decoration: none;
        text-align: center;
      }
    button{
        font-family:"Poppins",sans-serif;

    }
    .input-error {
      color: #ff0000a4;
    }
`;

export default GlobalStyle;
