import {useEffect} from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react'
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import Logo from './Logo'
import TdsButton from './TdsButton'
import React from 'react'
import {connect} from 'react-redux'
import {hideModal, showModal} from '../store/actions/modal'
import {logout} from '../store/actions/auth'
import SignInForm from './forms/SignInForm'
import {Link as RouterLink} from 'react-router-dom'

const NAV_ITEMS = [
  // {
  //   label: 'Trang chủ',
  //   href: '/',
  // },
  // {
  //   label: 'Hướng dẫn',
  //   href: '/guide',
  // },
  // {
  //   label: 'Về 4:30AM',
  //   href: '/about',
  // },
  // {
  //   label: 'Trắc nghiệm PSQI',
  //   href: '/psqi',
  // },
  // {
  //   label: 'Trang cá nhân',
  //   href: '/profile',
  // },
  // {
  //   label: 'Thư viện',
  //   href: '/library',
  // },
]

const NavBar = ({auth, showModal, hideModal, onShowMenu, logout, ...rest}) => {
  const {isOpen, onToggle} = useDisclosure()

  const loggedIn = !!auth?.user

  useEffect(() => {
    onShowMenu?.(isOpen)
  }, [isOpen, onShowMenu])

  const onPressLogInOut = () => {
    if (loggedIn) {
      logout()
    } else {
      showModal({BodyComponent: <SignInForm />})
    }
  }

  return (
    <Box>
      <Flex
        bg={isOpen && 'white'}
        minH={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        align={'center'}>
        <Flex flex={1} justify={'start'}>
          <Flex flex={1}>
            <Logo ml={'12px'} mr={'12px'} />
          </Flex>

          <Flex
            align={'center'}
            display={{base: 'none', md: 'flex'}}
            mr={'20px'}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* <Stack
          display={['none', 'flex']}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {loggedIn ? (
            <Button onClick={onPressLogInOut} color={'gray'}>
              Đăng xuất
            </Button>
          ) : (
            <TdsButton onClick={onPressLogInOut}>Đăng nhập</TdsButton>
          )}
        </Stack> */}

        <Flex ml={{base: -2}} display={['flex', 'none']}>
          <IconButton
            color={isOpen ? 'black' : 'white'}
            colorScheme={isOpen ? 'black' : 'white'}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={RouterLink}
                to={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={700}
                textAlign={'center'}
                color={'black'}
                _hover={{
                  textDecoration: 'underline',
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      borderTopWidth={'1px'}
      borderBottomWidth={'1px'}
      borderColor={'tdsBorder'}
      bg={'white'}
      p={4}
      display={{md: 'none'}}>
      {NAV_ITEMS.map(({label, href}) => (
        <Stack key={label} spacing={4}>
          <Flex py={2} justify={'space-between'} align={'center'}>
            <Link
              to={href || '/'}
              as={RouterLink}
              _hover={{
                textDecoration: 'none',
              }}>
              <Text textAlign={'center'} fontWeight={700} color={'black'}>
                {label}
              </Text>
            </Link>
          </Flex>
        </Stack>
      ))}
    </Stack>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, {showModal, hideModal, logout})(NavBar)
