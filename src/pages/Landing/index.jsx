import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getTesting } from '../../store/actions';

const Landing = () => {
  const dispatch = useDispatch();

  const { reducerTesting } = useSelector((state) => state.TestingReducer);

  const handleFetch = () => {
    dispatch(getTesting()).then((response) => {
      if (response.status === 200) {
        toast.success('OKE');
      }
    });
  };

  console.log('reducerTesting', reducerTesting);

  return (
    <div>
      <p>Landing</p>
      <button
        onClick={() => {
          handleFetch();
        }}
        className='bg-blue-300 rounded-md p-3'
      >
        Fetch
      </button>
    </div>
  );
};

export default Landing;
