'use client'

import { verticalLayoutClasses, commonLayoutClasses } from '@/Layouts/utils/layoutClasses'
// Third-party Imports
import styled from '@emotion/styled'

// Util Imports


const StyledContentWrapper = styled.div`
  &:has(.${verticalLayoutClasses.content}>.${commonLayoutClasses.contentHeightFixed}) {
    max-block-size: 100dvh;
  }
`

export default StyledContentWrapper
