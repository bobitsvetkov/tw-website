import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const DLCCard: React.FC = () => {
    return (
        <Link to="/dlc-recommendations">
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
                <Image src="https://www.vision-advertising.com/wp-content/uploads/2019/02/Paid-Advertising-300x201.jpg" alt="DLC Recommendations" boxSize="300px" mx="auto" mb={4} />
                <Text fontWeight="bold">DLC Recommendations for Multiplayer</Text>
            </Box>
        </Link>
    );
}

export default DLCCard;