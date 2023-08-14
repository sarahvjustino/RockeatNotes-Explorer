import { Container, Brand, Search, Menu, Content, NewNote } from "./styles";

import { Header } from "../../components/header";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu></Menu>
      <Search></Search>
      <Content></Content>
      <NewNote></NewNote>
    </Container>
  );
}
