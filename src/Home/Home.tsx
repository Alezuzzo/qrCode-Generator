import React, { useState } from "react";

import { Container, Wrapper, Image, Input, Button } from "./styled";

const Home: React.FC = () => {
  const [text, setText] = useState("");

  const [linkImg, setlinkImg] = useState("");

  const createLink = async () => {
    if (text.length > 0) {
      let response = await fetch(
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text
      );
      setlinkImg(response.url);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Image
          src={
            linkImg.length > 0
              ? linkImg
              : "https://upload.wikimedia.org/wikipedia/commons/3/37/MITC2013_QR_Code.jpg"
          }
        />
        <Input
          placeholder="Enter your link"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={createLink}>Click here to generate</Button>
      </Wrapper>
    </Container>
  );
};

export default Home;
