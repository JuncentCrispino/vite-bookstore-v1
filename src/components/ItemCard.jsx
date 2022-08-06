import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function ItemCard({ product }) {

  return (
    <section>
      <Card shadow="sm" p="lg" radius="md" withBorder className='z-0'>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{product.productName}</Text>
          <Badge color="pink" variant="light">
          On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          {product.description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
        </Button>
      </Card>
    </section>

  );
}