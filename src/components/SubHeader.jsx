import React from 'react';
import { Flex, Box, Link, Image, Text, Circle } from '@chakra-ui/react';
import theme from '../theme';

const SubHeader = () => {
  return (
    <Flex
      w="90%"
      mx="auto"
      justifyContent="space-between"
      padding="auto"
      zIndex={10}
      className=" z10  bottom-10 p-header-desktop-second"
    >
      <Box
        w="40%"
        transform={'translateY(-10px)'}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Link
          _hover={{
            color: theme.colors.textGold,
            fontWeight: 600,
          }}
          className="link-header flex-center text-gray-dark font-14 m-left-20"
          href="/"
        >
          خانه
        </Link>
        <Link
          _hover={{
            color: theme.colors.textGold,
            fontWeight: 600,
          }}
          className="link-header flex-center text-gray-dark font-14 m-left-20"
          href="/about-us"
        >
          درباره ما
        </Link>
        <Link
          _hover={{
            color: theme.colors.textGold,
            fontWeight: 600,
          }}
          className="link-header flex-center text-gray-dark font-14 m-left-20"
          href="/contact-us"
        >
          تماس با ما
        </Link>
        <Link
          _hover={{
            color: theme.colors.textGold,
            fontWeight: 600,
          }}
          className="link-header flex-center text-gray-dark font-14 m-left-20"
          href="https://parnas.agency/posts"
        >
          پارناس مگ
        </Link>
      </Box>
      <Flex className="end flex-x-end">
        <Flex className="language flex-x-center gap-14">
          <Text className="en-font fs-17">En</Text>
          <Box className="bg">
            <Image src="../../img/flaq-en.png" alt="" />
          </Box>
        </Flex>
        <Box className="border-dashed" />
        <a href="http://crm.parnas.agency/login">
          <Flex
            onMouseOver={() => {
              // Handle mouse over event
            }}
            onMouseLeave={() => {
              // Handle mouse leave event
            }}
          >
            <Flex className="customers flex-x-end">
              <Box className="flex-y-end">
                <Text className="m-y-0 text-base kalameh-bold fs-15">
                  پیشخوان مشتریان
                </Text>
                <Text className="fs-14 bold-600 text-gold-2 p-relative bottom-3">
                  ورود به سامانه
                </Text>
              </Box>
              <Circle
                className="m-right-16"
                id="Component_2_1"
                data-name="Component 2 – 1"
                width="45px"
                height="45px"
              >
                <Circle
                  cx="27"
                  cy="27"
                  r="27"
                  fill="none"
                  stroke="#212e47"
                  strokeWidth="2"
                />
                <Circle
                  cx="9.001"
                  cy="9.001"
                  r="9.001"
                  fill="#212e47"
                  stroke="#212e47"
                  strokeWidth="2"
                  transform="translate(3.001 2.021)"
                />
              </Circle>
            </Flex>
          </Flex>
        </a>
      </Flex>
    </Flex>
  );
};

export default SubHeader;
