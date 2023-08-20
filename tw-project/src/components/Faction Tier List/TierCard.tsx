import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const FactionTierCard: React.FC = () => {
    return (
        <Link to="/faction-tier-list">
            <Box
                p={4}
                borderRadius="md"
                textAlign="center"
                bg="gray.700"
                color="white"
                boxShadow="lg"
                transition="0.3s"
                _hover={{ bg: "gray.600" }}
            >
                <Image src="https://tiermaker.com/images/templates/art-of-war-40k-competitive-faction-tier-list---nephilim-meta-630824/6308241664213186.png" alt="Faction Tier List Image" boxSize="300px" mx="auto" mb={4} />
                <Text mt={2}>Click to view the Faction Tier List</Text>
            </Box>
        </Link>
    );
}

export default FactionTierCard;