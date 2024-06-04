
import type { NextPage } from 'next';
import FoodBox from '@/components/FoodPage/FoodPage';

const page: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <main className="flex flex-col items-center">     
        <FoodBox
        />
      </main>
    </div>
  );
};

export default page;
