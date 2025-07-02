import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-[95%] max-h-[90vh] overflow-y-auto bg-white rounded-xl p-6 shadow-lg relative animate-fade-in'
      >
        {/* Close Button */}
        <AiOutlineClose
          className='absolute right-4 top-4 text-2xl text-red-600 hover:text-red-800 cursor-pointer transition-colors'
          onClick={onClose}
        />

        {/* Year Badge */}
        <div className='inline-block px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm shadow-sm mb-2'>
          {book.publishYear}
        </div>

        {/* Book ID */}
        <p className='text-xs text-gray-400 break-all mb-3'>{book._id}</p>

        {/* Book Title */}
        <div className='flex items-center gap-2 mb-2'>
          <PiBookOpenTextLight className='text-red-400 text-xl' />
          <h3 className='text-lg font-semibold text-gray-800'>{book.title}</h3>
        </div>

        {/* Book Author */}
        <div className='flex items-center gap-2 mb-4'>
          <BiUserCircle className='text-red-400 text-xl' />
          <p className='text-gray-700'>{book.author}</p>
        </div>

        {/* Description */}
        <div className='text-sm text-gray-600 leading-relaxed space-y-2'>
          <p className='font-medium'>About this book:</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
            voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
            necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
            nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
            dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
            vitae voluptate sequi repellat!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
