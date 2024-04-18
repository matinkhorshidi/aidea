import React from 'react';
import '../App.css';
import { Box, Flex } from '@chakra-ui/react';
import theme from '../theme.js';
import PhoneIcon from '../svg/PhoneIcon.jsx';
import Logo from '../svg/Logo.jsx';

const Header = () => {
  const hoverLogo = () => {
    // Function for hover effect on logo
  };

  return (
    <Flex
      justifyContent="space-between"
      padding={'1.8rem 2rem'}
      mx="auto"
      w="90%"
      display="flex"
      alignItems="center"
    >
      <Box
        as="a"
        href="/"
        id="name-parnas"
        className="name-parnas"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <h1
          style={{ fontFamily: 'KalameBold', fontSize: '2rem' }}
          className="text-gold-2 t kalameh-bold m-y-0"
        >
          <span
            style={{ color: theme.colors.secondary[900] }}
            className="site-name-span"
          >
            AI
          </span>{' '}
          dea
        </h1>
      </Box>
      <Box
        as="a"
        id="logo-parnas"
        href="/"
        className="logo-website"
        onMouseOver={hoverLogo}
        style={{ transform: 'translateY(45px) translate(-20px)' }}
      >
        <Logo />
      </Box>
      <Box className="l-header">
        <Box className="contact-header">
          <Flex alignItems="center">
            <Flex flexDirection="column" ml={2}>
              <a href="tel:02171057559" className="number">
                <strong
                  style={{
                    fontSize: theme.fontSize.font18,
                    fontFamily: theme.fonts.bold,
                    color: theme.colors.textBase[900],
                  }}
                >
                  ۰۲۱
                </strong>
                <strong
                  style={{
                    margin: '0px 2px',
                    fontSize: theme.fontSize.font18,
                    fontFamily: theme.fonts.bold,
                    color: theme.colors.textBase,
                  }}
                >
                  -
                </strong>
                <strong
                  style={{
                    fontSize: theme.fontSize.font18,
                    fontFamily: theme.fonts.bold,
                    color: theme.colors.secondary[900],
                  }}
                >
                  ۷۱۰۵۷۵۵۹
                </strong>
              </a>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: theme.fonts.bold,
                  color: theme.colors.textGray,
                }}
                className="fs-11 text-gray bold-600"
              >
                تــماس بــــا کــارشـنــاســـان مــــا
              </span>
            </Flex>
            <PhoneIcon />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
