import React from "react";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

const theme = {
    colors: {
        header: "#ebfeff",
        body: "#fff",
        footer: "#003333",
    },
    mobile: "768px",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyles />
                <Header />
                <Container>
                    {content.map((card, index) => {
                        return <Card key={index + 1} card={card} />;
                    })}
                </Container>
                <Footer />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
