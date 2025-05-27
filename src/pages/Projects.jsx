import { Box, Card, Container, SimpleGrid, Text, VStack, Image, Heading, AspectRatio, Center } from "@chakra-ui/react";
import ProjectsCard from "@/components/ui/Projects-card";

export default function Projects() {
    return (
        <>
            <Container maxW="container.xl" py={12} >
                <VStack VStack spacing={8}>
                    <Text
                        fontSize={"30"}
                        textStyle="5xl"
                        fontWeight={"bold"}
                        bgGradient="to-r"
                        gradientFrom="red.200"
                        gradientTo="blue.200"
                        bgClip={"text"}
                        textAlign={"center"}
                    >
                        Project Gallery
                    </Text>
                    <SimpleGrid
                        columns={{
                            base: 1,
                            md: 2,
                            lg: 3,
                        }}
                        spacing={10}
                        gap={5}
                        w={"full"}
                    >
                        {/* <ProjectsCard /> */}

                    </SimpleGrid>
                    <ProjectsCard />
                </VStack>
            </Container>
        </>
    )
}