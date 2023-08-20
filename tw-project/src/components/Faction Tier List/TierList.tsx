import { Box, Center, Image } from '@chakra-ui/react';

const FactionTierList: React.FC = () => {
    const tierListImageUrl = "https://cdn.discordapp.com/attachments/977685880800165898/1116011689620541520/tierListS8.png";  // Replace with the actual path to your image

    return (
        <Center>
        <Box bg="gray.800" p={5} borderRadius="md" textAlign="center">
            <Image src={tierListImageUrl} alt="Faction Tier List" />
        </Box>
        </Center >
    );
}

export default FactionTierList;