import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from './components/Input';
import { getSearchStart } from './store/modules/search/search.action';

function App(): any {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    const searchOption = () => {
      if (search.trim() !== '') {
        setTimeout(() => {
          dispatch(getSearchStart(search));
          // setSearch('');
        }, 5000);
      }
    };

    searchOption();
  }, [dispatch, search]);

  return (
    <>
      <div>
        <Input value={search} onChange={changeHandler} placeholder='search' />
      </div>
      <div>result</div>
    </>
  );
}

export default App;
