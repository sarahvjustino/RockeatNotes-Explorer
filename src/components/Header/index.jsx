import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/sarahvjustino.png" alt="Foto do Usuário" />

        <div>
          <span>Bem vinda,</span>
          <strong>Sarah Victoria</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
