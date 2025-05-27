import { Box, SimpleGrid, Stack, Text, HStack, Button, IconButton } from "@chakra-ui/react";

import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            
            <Box py={12} bg={"gray.200"} padding={50}>
                <SimpleGrid columns={2} gap="40px">
                    <Box fontSize={17}>
                        <Stack>
                            <Box>
                                <Text>
                                    Address
                                </Text>
                                <Text>
                                    write address here
                                </Text>
                            </Box>
                            <Box>
                                <Text>
                                    Contacts
                                </Text>
                                <Text>
                                    put phone number here
                                </Text>
                                <Text>
                                    put email here
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                    <Box alignContent={'center'}>
                        <HStack>
                            <Box>
                                <IconButton rounded={'full'}>
                                    <FaTwitter />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton rounded={'full'}>
                                    <FaInstagram/>
                                </IconButton>
                            </Box>
                        </HStack>
                    </Box>                                      
                </SimpleGrid>
            </Box>
        


        </footer>
    )
}

