
import { Card } from 'antd';

export function ItemCard({ id }: { id: number }) {
  return (
    <Card style={{ height: 400, width: '23%', overflow: 'hidden' }}>
      {id}
    </Card>
  );
}
