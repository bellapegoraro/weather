import Header from "./components/header/index";
import Message from "./components/message/index";
import CurrentWeather from "./components/current-weather/";
import NextWeather from "./components/next-weather/";
import Footer from "./components/footer/index";
import { Container, Principal } from "./appStyle";

const App = () => {
  return (
    <Container>
      <Header />
      <Message />
      <Principal>
        <CurrentWeather />
        <NextWeather />
      </Principal>
      <Footer />
    </Container>
  );
};

export default App;
