import { Container, Text, Button } from "./style";
import { useState } from "react";

const Message = () => {
  const [open, setOpen] = useState(true);
  return (
    open && (
      <Container>
        <Text>
          Pesquise sua cidade para saber a temperatura de hoje e nos próximos 5
          dias! Não esqueça de selecionar a hora também!
        </Text>
        <Button onClick={() => setOpen(false)}>Entendi!</Button>
      </Container>
    )
  );
};

export default Message;
