import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 19px;
  padding: 15px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    cursor: pointer;
    transform: scale(0.5);
    transition: all 3s 1s;
    z-index: 400;
    /* transition-timing-function: linear; */
    /* transition-delay: 1s; */
  }
`

const Logo = () => {
  const ICON = `/images/logo.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={ICON} width={70} height={70} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Arimo", sans-serif'
            fontWeight="light"
            ml={3}
          >
            
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
