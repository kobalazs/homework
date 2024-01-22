
import { Card } from 'antd';
import { HackerNewsService } from './services/hacker-news.service';
import { useEffect, useState } from 'react';
import { Item } from './models/item';
import Title from 'antd/es/typography/Title';

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

  return item && (
    <Card style={{ height: 400, width: '23%', overflow: 'hidden' }}>
      <Title level={5}>{item.title}</Title>
      {JSON.stringify(item)}
    </Card>
  );
}
