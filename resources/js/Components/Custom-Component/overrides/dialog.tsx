// ** MUI Imports
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// ** Type Import
import { DialogProps } from "@mui/material/Dialog";

const DialogStyled = styled(Dialog)<DialogProps>(({ theme }) => ({
    "& .MuiDialog-paper": {
        boxShadow: theme.shadows[18],
        ...(theme.palette.divider && {
            border: `1px solid ${theme.palette.divider}`,
        }),
        "&:not(.MuiDialog-paperFullScreen)": {
            [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(4),
                width: `calc(100% - ${theme.spacing(8)})`,
                maxWidth: `calc(100% - ${theme.spacing(8)}) !important`,
            },
        },
        "& > .MuiList-root": {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
    },
}));

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
    "& .MuiDialogTitle-root": {
        padding: theme.spacing(5, 6, 1),
    },
}));

const DialogContentStyled = styled(DialogContent)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: `${theme.spacing(5, 6)} !important`,
    },
}));

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1, 6, 5),
        "&.dialog-actions-dense": {
            padding: theme.spacing(1, 2.5, 2.5),
        },
    },
}));

const CustomDialog: React.FC<DialogProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <DialogStyled {...rest}>
      {children}
    </DialogStyled>
  );
};

// Export the styled components as well if you need to use them independently
export { DialogTitleStyled as CustomDialogTitle, DialogContentStyled as CustomDialogContent, DialogActionsStyled as CustomDialogActions };

// Default export for the main CustomDialog component
export default CustomDialog;
