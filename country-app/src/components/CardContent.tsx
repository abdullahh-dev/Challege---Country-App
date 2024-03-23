import Filters from './Filters';
import Table from './Table';

function CardContent() {
  return (
    <div className="mt-12 flex w-full">
      <Filters />
      <Table />
    </div>
  );
}

export default CardContent;
