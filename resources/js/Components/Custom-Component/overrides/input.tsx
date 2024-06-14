// import
import { FilledInput,  FormControlLabel,  Input, InputLabel,  OutlinedInput, styled } from "@mui/material";

import type { FilledInputProps, FormControlLabelProps, InputLabelProps, InputProps, OutlinedInputProps } from "@mui/material";

const InputStyled = styled(Input)<InputProps>(({ theme }) => ({
  "&.MuiInput-root": {
    '&:before': {
      borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.2)`
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.28)`
    },
    '&.Mui-disabled:before': {
      borderBottomStyle: 'solid'
    }
  },
}));

const InputLabelStyled = styled(InputLabel)<InputLabelProps>(({ theme }) => ({
  "&.MuiInputLabel-outlined": {
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -8px) scale(0.75)'
    }
  }
}));


const FilledInputStyled = styled(FilledInput)<FilledInputProps>(({ theme }) => ({
  '&.MuiFilledInput-root': {
    '&:not(.MuiInputBase-sizeSmall)': {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
    '&:hover:not(.Mui-disabled)': {
      backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
    },
    '&:before': {
      borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.2)`
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.28)`
    }
  }
}));


const OutlinedInputStyled = styled(OutlinedInput)<OutlinedInputProps>(({ theme }) => ({
  '&.MuiOutlinedInput-root': {
    '&:not(.MuiInputBase-sizeSmall)': {
      borderRadius: 8
    },
    '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
      borderColor: `rgba(${theme.palette.customColors.main}, 0.28)`
    },
    '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: `rgba(${theme.palette.customColors.main}, 0.2)`
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.text.disabled
    },
    '&.Mui-focused': {
      boxShadow: theme.shadows[2]
    }
  }
}));

const FormControlLabelStyled = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '.MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}));

const CustomInput: React.FC<InputProps> = (props) => {
  return <InputStyled {...props} />;
};

const CustomInputLabel: React.FC<InputLabelProps> = (props) => {
  return <InputLabelStyled {...props} />;
};

const CustomFilledInput: React.FC<FilledInputProps> = (props) => {
  return <FilledInputStyled {...props} />;
};

const CustomOutlinedInput: React.FC<OutlinedInputProps> = (props) => {
  return <OutlinedInputStyled {...props} />;
};

const CustomFormControlLabel: React.FC<FormControlLabelProps> = (props) => {
  return <FormControlLabelStyled {...props} />;
};

export {
  CustomInput,
  CustomInputLabel,
  CustomFilledInput,
  CustomOutlinedInput,
  CustomFormControlLabel
};
