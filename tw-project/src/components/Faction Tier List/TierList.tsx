import { Box, Center, Image, Flex, Text } from '@chakra-ui/react';

const FactionTierList: React.FC = () => {
    const tierListImageUrl = "https://cdn.discordapp.com/attachments/992901303552462881/1155596720470757447/image.png?ex=65172ed0&is=6515dd50&hm=bab1f7d91ef77d103e5fc71746177541c81b1ca975907fb414503e69221c1352&";

    return (
        <Flex
            direction="column"
            justify="space-between"
            align="center"
            minH="100vh"
        >
            <Box bg="gray.800" p={5} borderRadius="md" textAlign="center">
                <Center>
                    <Image src={tierListImageUrl} alt="Faction Tier List" />
                </Center>
                <Text mt={8} color="white">
                    Welcome to the Faction Tier List! In this list, each faction is assigned a specific point value.
                    These points are determined by a combination of factors, including the units cost-effectiveness and how good they are overall.
                    - Teams earn points for their performance in battles, gaining +3 points for successful attack and +2 points for successful defense.
                    This tier list offers a comprehensive view of the factions' standings based on their points, helping you understand their overall effectiveness in the game. As well as how many total points your team will get.
                </Text>
            </Box>
        </Flex>
    );
}

export default FactionTierList;