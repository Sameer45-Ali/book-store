import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='mb-4'>
      <Link
        to={destination}
        className='inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600 transition-colors text-white px-4 py-2 rounded-md shadow-md'
      >
        <BsArrowLeft className='text-xl' />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
