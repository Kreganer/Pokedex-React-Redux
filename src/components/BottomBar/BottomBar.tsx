import { FC, useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from 'src/store/hooks';
import { outputLimits } from 'src/helpers/constants';
import { BottomBarWrapper, BottomButtonWrapper, StyledButton } from './style';

const BottomBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [paginationValues, setPaginationValue] = useState(1);
  const { dex, isLoading } = useAppSelector((state) => state.pokemonsReducer);

  useEffect(() => {
    if (window.innerWidth <= 425) {
      setPaginationValue(0);
    } else {
      setPaginationValue(1);
    }
  }, [window]);

  const handleChangePage = (page: string) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  const handleChangeLimit = (limit: string) => {
    searchParams.set('page', '1');
    searchParams.set('limit', limit);
    setSearchParams(searchParams);
  };

  return (
    <BottomBarWrapper>
      {window.innerWidth > 425 && (
        <BottomButtonWrapper>
          <span>Set show pokemons limits: </span>
          {outputLimits.map((limit) => (
            <StyledButton
              disabled={isLoading}
              key={limit.index}
              onClick={() => handleChangeLimit(limit.name)}>
              {limit.name}
            </StyledButton>
          ))}
        </BottomButtonWrapper>
      )}

      <BottomButtonWrapper>
        {window.innerWidth > 768 && (
          <>
            <StyledButton disabled={isLoading}>A</StyledButton>
            <p>See Details</p>
          </>
        )}

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
          disabled={isLoading}
          siblingCount={paginationValues}
          boundaryCount={paginationValues}
          showFirstButton
          showLastButton
          page={Number(searchParams.get('page'))}
          onChange={(e, page) => handleChangePage(page.toString())}
        />
      </BottomButtonWrapper>
    </BottomBarWrapper>
  );
};

export default BottomBar;
