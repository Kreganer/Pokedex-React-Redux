import { FC } from 'react';
import { Input, InputProps } from '@mui/material';
import { InputStyles } from 'src/components/UI/CustomInput/style';

const CustomInput: FC<InputProps> = (props) => <Input {...props} sx={InputStyles.customInput}></Input>;

export default CustomInput;