'use client';

import { Flex, Space } from 'antd';
import { useState } from 'react';
import { HackerNewsService } from './hacker-news.service';
import { ItemCard } from './item-card';
import Title from 'antd/es/typography/Title';

const hackerNewsService = new HackerNewsService();

export default function Page() {
  const [itemIds, setItemIds] = useState<Array<number> | undefined>(undefined);

  hackerNewsService.getNewItemIds().then(setItemIds);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', margin: '0 auto 50px', width: '80%', minWidth: 800 }}>
      <Title level={1}>Hacker News V4.0</Title>
      <Flex gap={20} wrap="wrap">
        {itemIds?.map((itemId) => (
          <ItemCard id={itemId} key={itemId} />
        ))}
      </Flex>
    </Space>
  )
}