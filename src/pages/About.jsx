// import React from 'react';
import { Box, Center, Text } from "@chakra-ui/react";
import img from "../assets/background.jpeg"

export default function About() {
    return (
        <>
            <Box 
                bgBlendMode='multiply' 
                bgImage={`url(${img})`} 
                // bgSize="cover"
                backgroundSize={"cover"}
                backgroundPosition={"center"}
                left={0}
                right={0}
                width="100vw"
                maxWidth="100%"
                // p={16}
            >
                {/* <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="full"
                    h="full"
                    bg="black"
                    opacity={0.1}
                    bgBlendMode="multiply"
                /> */}
                <Center
                    position="relative"
                    zIndex={1}
                    textAlign="center"
                    display="flex"
                    justifyContent="center"
                    minH={80}
                    // bgColor="green.100"
                >
                    <Text as='b' position='absolute' textStyle="5xl">
                        Delivering high quality services to construct durable structures
                    </Text>
                </Center>
            </Box>
        </>
    )
}

