"use client";

import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

function ChakraWrapper({children}: {
  // 2. Wrap ChakraProvider at the root of your app
  children: React.ReactNode}){
  return (
    <ChakraProvider>
    {children}
    </ChakraProvider>
  )
}

export default ChakraWrapper