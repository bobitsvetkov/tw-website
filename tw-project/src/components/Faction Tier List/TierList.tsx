import { Box, Center, Image } from '@chakra-ui/react';

const FactionTierList: React.FC = () => {
    const tierListImageUrl = "https://cdn.discordapp.com/attachments/992901303552462881/1155596720470757447/image.png?ex=65172ed0&is=6515dd50&hm=bab1f7d91ef77d103e5fc71746177541c81b1ca975907fb414503e69221c1352&";

    return (
        <Center>
        <Box bg="gray.800" p={5} borderRadius="md" textAlign="center">
            <Image src={tierListImageUrl} alt="Faction Tier List" />
        </Box>
        </Center >
    );
}

export default FactionTierList;