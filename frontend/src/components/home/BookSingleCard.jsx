import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border border-gray-300 rounded-xl p-5 m-4 relative shadow-sm hover:shadow-lg transition-shadow'>
      {/* Year badge */}
      <h2 className='absolute top-2 right-2 bg-red-200 text-red-800 px-3 py-1 text-sm rounded-full shadow'>
        {book.publishYear}
      </h2>

      {/* Book ID */}
      <p className='text-xs text-gray-400 mb-2 break-all'>{book._id}</p>

      {/* Title */}
      <div className='flex items-center gap-2 mb-1'>
        <PiBookOpenTextLight className='text-red-400 text-xl' />
        <h3 className='text-lg font-semibold text-gray-800'>{book.title}</h3>
      </div>

      {/* Author */}
      <div className='flex items-center gap-2'>
        <BiUserCircle className='text-red-400 text-xl' />
        <p className='text-gray-700'>{book.author}</p>
      </div>

      {/* Action Icons */}
      <div className='flex justify-between items-center mt-6 px-3'>
        <BiShow
          className='text-2xl text-blue-700 hover:text-blue-900 cursor-pointer transition-colors'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-xl text-green-700 hover:text-green-900 transition-colors' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-xl text-yellow-600 hover:text-yellow-800 transition-colors' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-xl text-red-600 hover:text-red-800 transition-colors' />
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
