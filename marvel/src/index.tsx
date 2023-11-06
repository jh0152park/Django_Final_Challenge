import App from "./App";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./global.css";

// marvel logo: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/220px-Marvel_Logo.svg.png

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    background-color: white;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  * {
    box-sizing: border-box;
    text-decoration: none;
  }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <>
        <GlobalStyles />
        <ChakraProvider>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </RecoilRoot>
        </ChakraProvider>
    </>
);
