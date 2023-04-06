import { FC } from 'react';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import { outputLimits } from 'src/helpers/constants';
import { BottomBarWrapper, BottomButtonWrapper, StyledButton } from './style';

const BottomBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  const handleChangePage = (page: string) => {
    if (dex && Number(page) > dex?.amountPages) {
      searchParams.set('page', (dex?.amountPages - 1).toString());
      setSearchParams(searchParams);
    } else {
      searchParams.set('page', page);
      setSearchParams(searchParams);
    }
  };

  const handleChangeLimit = (limit: string) => {
    searchParams.set('limit', limit);
    setSearchParams(searchParams);
  };

  return (
    <BottomBarWrapper>
      <BottomButtonWrapper>
        <span>Set pokemons limits: </span>
        {outputLimits.map((limit) => (
          <StyledButton key={limit.index} onClick={() => handleChangeLimit(limit.name)}>
            {limit.name}
          </StyledButton>
        ))}
      </BottomButtonWrapper>

      <BottomButtonWrapper>
        <StyledButton>A</StyledButton>
        <p>See Details</p>

        <Pagination
          sx={{
            padding: '8px',
            alignSelf: 'center',
            display: 'flex',
            div: {
              color: 'white'
            },
            button: {
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '15px',
              borderColor: 'white'
            },
            '.MuiPaginationItem-root.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              color: 'black'
            },
            '.MuiPaginationItem-root': {
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                color: 'white'
              }
            }
          }}
          defaultPage={Number(searchParams.get('page') ?? 1)}
          count={dex?.amountPages}
          variant="outlined"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          page={Number(searchParams.get('page'))}
          onChange={(e, page) => handleChangePage(page.toString())}
        />
      </BottomButtonWrapper>
    </BottomBarWrapper>
  );
};

export default BottomBar;
