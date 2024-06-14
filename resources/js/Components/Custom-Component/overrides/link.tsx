// import

import { Link, styled } from "@mui/material";
import type { LinkProps } from "@mui/material/Link";
import { forwardRef } from "react";


const LinkStyled = styled(Link)<LinkProps>(({ theme }) => ({
  "&.MuiLink-root": {
    textDecoration: 'none'
  },
}));


const CustomLink = forwardRef((props: LinkProps, ref) => {
  const { ...rest } = props;

  return <LinkStyled {...rest} />;
});

export default CustomLink