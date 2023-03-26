import { FC } from 'react';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { BottomBarWrapper, BottomButtonWrapper, StyledButton } from './style';

const BottomBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dex } = useAppSelector((state) => state.pokemonsReducer);

  const handleChangePage = (page: string) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  return (
    <BottomBarWrapper>
      <BottomButtonWrapper>
        <StyledButton>A</StyledButton>
        <p>See Details</p>
      </BottomButtonWrapper>

      <Pagination
        sx={{
          padding: '8px',
          alignSelf: 'center',
          display: 'flex',
          div: {
            color: 'white'
          },
          button: {
            backgroundColor: 'white',
            borderRadius: '15px'
          },
          '.css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          '.css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root': {
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
        siblingCount={0}
        boundaryCount={2}
        page={Number(searchParams.get('page'))}
        onChange={(e, page) => handleChangePage(page.toString())}
      />
    </BottomBarWrapper>
  );
};

export default BottomBar;
