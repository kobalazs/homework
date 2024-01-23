'use client';

import { Flex, Pagination, Space } from 'antd';
import { useEffect, useState } from 'react';
import { HackerNewsService } from './services/hacker-news.service';
import { ItemCard } from './item-card';
import Title from 'antd/es/typography/Title';

export default function Page() {
  const [itemIds, setItemIds] = useState<Array<number> | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

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

  function paginate(page: number, pageSize: number) {
    setPage(page);
    setPageSize(pageSize);
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', margin: '0 auto 50px', width: '80%', minWidth: 800 }}>
      <Title level={1}>Hacker News V4.0</Title>
      <Flex gap={20} vertical>
        {itemIds?.slice((page - 1) * pageSize, page * pageSize).map((itemId) => (
          <ItemCard id={itemId} key={itemId} />
        ))}
      </Flex>
      <Pagination total={itemIds?.length} onChange={paginate} onShowSizeChange={paginate} />
    </Space>
  )
}
