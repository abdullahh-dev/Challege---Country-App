import CardContent from './CardContent';
import SearchBar from './SearchBar';

function Card() {
  return (
    <div className="absolute top-24 p-5 w-[100%] ">
      <div className="h-[600px] rounded-md w-[100%] bg-[#1B1D1F] border border-[#282B30] p-6">
        <SearchBar />
        <CardContent />
      </div>
    </div>
  );
}

export default Card;
