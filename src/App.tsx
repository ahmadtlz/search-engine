import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Input from './components/Input';
import List from './components/List';
import Loading from './components/Loading';
import Global from './Global.styled';
import { getSearchStart } from './store/modules/search/search.action';
import { RootState } from './store/root-reducer';

const Wrapper = styled.div`
  max-width: 1080px;
  margin-right: auto;
  margin-left: auto;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background-color: #0e6788;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  height: 40px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
`;

function App(): any {
  const dispatch = useDispatch();
  const searchResult = useSelector((state: RootState) => state.search.data);
  const loading = useSelector((state: RootState) => state.search.loading);
  const error = useSelector((state: RootState) => state.search.error);
  const [search, setSearch] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  // useEffect(() => {
  //   if (search.trim().length !== 0) {
  //     dispatch(getSearchStart(search));
  //   }
  // }, [dispatch, search]);

  const handleClick = () => {
    dispatch(getSearchStart(search));
  };
  return (
    <>
      <Global />
      <Wrapper>
        <Search>
          <Input value={search} onChange={changeHandler} placeholder='search' />
          <Button onClick={handleClick}>search</Button>
        </Search>
        {loading ? (
          <Loading />
        ) : (
          searchResult && <List items={searchResult.items} />
        )}
        {error && <p>{error}</p>}
      </Wrapper>
    </>
  );
}

export default App;
