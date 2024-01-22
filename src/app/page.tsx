'use client';

import { Flex, Space } from 'antd';
import { useEffect, useState } from 'react';
import { HackerNewsService } from './services/hacker-news.service';
import { ItemCard } from './item-card';
import Title from 'antd/es/typography/Title';

export default function Page() {
  const [itemIds, setItemIds] = useState<Array<number> | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setItemIds(await HackerNewsService.getNewItemIds());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', margin: '0 auto 50px', width: '80%', minWidth: 800 }}>
      <Title level={1}>Hacker News V4.0</Title>
      <Flex gap={20} wrap="wrap">
        {itemIds?.slice(0, 10).map((itemId) => (
          <ItemCard id={itemId} key={itemId} />
        ))}
      </Flex>
    </Space>
  )
}
