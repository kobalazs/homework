
import { Card, Skeleton } from 'antd';
import { HackerNewsService } from './services/hacker-news.service';
import { useEffect, useState } from 'react';
import { Item } from './models/item';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

export function ItemCard({ id }: { id: number }) {
  const [item, setItem] = useState<Item | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setItem(await HackerNewsService.getItem(id));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return item ? (
    <Card
      hoverable
      onClick={() => window.open(item.url, '_blank')}
    >
      <Paragraph>{item.by}</Paragraph>
      <Title level={5}>{item.title}</Title>
    </Card>
  ) : <Card style={{ height: 123, overflow: 'hidden' }}><Skeleton /></Card>;
}
