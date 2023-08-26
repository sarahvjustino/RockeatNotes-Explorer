import { FiPlus } from "react-icons/fi";
import { Container, Brand, Search, Menu, Content, NewNote } from "./styles";

import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText title="Todos" $isactive />
        </li>
        <li>
          <ButtonText title="Frontend" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note
            data={{ title: "React Modal", tags: [{ id: "1", name: "React" }] }}
          />
          <Note
            data={{
              title: "Exemplo de Middleware",
              tags: [
                { id: "1", name: "express" },
                { id: "2", name: "nodejs" },
              ],
            }}
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
