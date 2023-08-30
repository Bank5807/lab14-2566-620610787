"use client";
import React, { useState } from "react";
import {
  Container,
  Text,
  Title,
  Rating,
  Textarea,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  return (
    <Container size="600px">
      <Title order={2} style={{ marginBottom: "1rem" }}>
        Food Review 🍕
      </Title>
      <Title order={5}>Your Rating</Title>
      <Rating
        value={value}
        onChange={setValue}
        style={{ marginBottom: "1rem" }}
      />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        autosize
        minRows={3}
        style={{ marginBottom: "1rem" }}
      />
      <Button color="orange">Submit Review</Button>
      <Divider my="sm" variant="dashed" />
      <Group position="center">
        <Title order={5}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" variant="dashed" />
      <Group position="center">
        <Title order={5}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text c="dimmed" align="center" style={{ marginBottom: "1rem" }}>
        My favourite part is pepperoni
      </Text>
      <Pagination total={20} position="center" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Tanat Wipasakunden 620610787
      </Text>
    </Container>
  );
}
