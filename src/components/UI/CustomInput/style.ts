import { theme } from 'src/style';

export const InputStyles = {
  customInput: {
    width: '60%',
    background: 'none',
    color: theme.light.textColorWhite,
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderColor: '#f3533b'
    },
    '&:before': {
      borderColor: theme.light.backgroundWhite
    },
    '&:after': {
      borderColor: 'orange'
    }
  }
};
