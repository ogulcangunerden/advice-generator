import React, { useEffect, useState } from "react";
import { RandomAdviceApi } from "../api/api";
import axios from "axios";
import { Paper, Text, Button, Center, Flex } from "@mantine/core";

const Advice = () => {
  const [click, setClick] = useState(true);
  const [advice, setAdvice] = useState([]);
  async function getAdvice() {
    try {
      const response = await RandomAdviceApi();
      console.log(response.data);
      setAdvice(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, [click]);

  const clickHandler = () => {
    setClick((prev) => !prev);
  };

  return (
    <Center style={{ height: "100%", width: "100%" }}>
      <Flex direction="column">
        <Paper withBorder p="lg">
          <h3> Advice {advice.slip?.id}#</h3>
          <Text>{advice.slip?.advice}</Text>
        </Paper>
        <Button mt="md" radius="md" color="red" onClick={clickHandler}>
          Click
        </Button>
      </Flex>
    </Center>
  );
};

export default Advice;
