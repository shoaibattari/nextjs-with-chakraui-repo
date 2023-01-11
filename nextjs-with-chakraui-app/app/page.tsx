"use client";

import React from 'react'
import {Button,Stack, Text} from "@chakra-ui/react"
import Link from 'next/link';
export default function hello() {
  return (
    <div>
      
    <Text fontSize='6xl' color='blue' align='center'> buttons and text with chakraUI</Text>

    
<Stack direction='column' spacing={4} align='center'>
<Button size='xs' variant='outline' colorScheme='blue'>Hello World from Panaverse DAO1</Button>
      
<Button size='sm' variant='ghost' colorScheme='blue'>Hello World from Panaverse DAO2</Button>
      
<Button size='md' variant='link' colorScheme='blue'>Hello World from Panaverse DAO3</Button>
  
<Button size='lg' variant='solid' colorScheme='blue'>Hello World from Panaverse DAO4</Button>
  </Stack>

      </div>
  )
}
