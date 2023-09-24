import { Box, Text, Image, Grid, GridItem, Flex } from "@chakra-ui/react";

interface Challenge {
  id: string;
  winner: string;
  chevrons: number;
  kills: number;
  title: string;
  description: string;
  image: string;
}

interface ChallengeCardProps {
    challenge: Challenge;
}
const challenges: Challenge[] = [
    {
        id: "1",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "The Desert Sentinel Role",
        description: "Faction challenge for Nabatea",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    },
    {
        id: "2",
        winner: "Desstro",
        chevrons: 11,
        kills: 2075,
        title: "Shotel Elite",
        description: "Comm to Brazil!",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
    },
    {
        id: "3",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "Picked Peltast ",
        description: "Min 4 picked peltasts with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    },
    {
        id: "4",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "The Sexman",
        description: "Min 6 Axeman with a chevron each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    },
    {
        id: "5",
        winner: "Hyena",
        chevrons: 0,
        kills: 8,
        title: "AssPiss Commander",
        description: "Min 2 chevrons on 2 aspis companion cavs each",
        image: "https://cdn.britannica.com/39/94839-004-EEB20F36/Flag-Serbia.jpg",
    },
    {
        id: "6",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 8,
        title: "The Disciple",
        description: "Min 5 disciples of apademak with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    },
    {
        id: "7",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 8,
        title: "The Hero of Sparta",
        description: "Min 2 chevrons on both heroes of sparta each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    },
    {
        id: "8",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "The Fierce",
        description: "Min 4 fierce swords with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    },
    // {
    //     id: "9",
    //     winner: "Not claimed yet!",
    //     chevrons: 0,
    //     kills: 0,
    //     title: "The Fierce",
    //     description: "Min 4 fierce swords with 2 chevrons each",
    //     image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    // },
    // {
    //     id: "10",
    //     winner: "Not claimed yet!",
    //     chevrons: 0,
    //     kills: 0,
    //     title: "The Fierce",
    //     description: "Min 4 fierce swords with 2 chevrons each",
    //     image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    // },
    // {
    //     id: "11",
    //     winner: "Not claimed yet!",
    //     chevrons: 0,
    //     kills: 0,
    //     title: "The Fierce",
    //     description: "Min 4 fierce swords with 2 chevrons each",
    //     image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    // },
    // {
    //     id: "12",
    //     winner: "Not claimed yet!",
    //     chevrons: 0,
    //     kills: 0,
    //     title: "The Fierce",
    //     description: "Min 4 fierce swords with 2 chevrons each",
    //     image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    // },
    // {
    //     id: "13",
    //     winner: "Not claimed yet!",
    //     chevrons: 0,
    //     kills: 0,
    //     title: "The Fierce",
    //     description: "Min 4 fierce swords with 2 chevrons each",
    //     image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
    // },
];
const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
    return (
        <Box
            bg="gray.700"
            color="white"
            p={6}
            borderRadius="md"
            boxShadow="2xl"
            height="300px" // Set a fixed height for the challenge card
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
            transition="all 0.3s"
        >
            <Flex align="center" justify="center" mb={4}>
                <Image src={challenge.image} alt={challenge.title} w={50} h={50} />
            </Flex>
            <Text fontWeight="bold" fontSize="xl" mb={2} textAlign="center">
                {challenge.title}
            </Text>
            <Text fontWeight="semibold">Winner: {challenge.winner}</Text>
            <Text mt={2}>Chevrons Earned: {challenge.chevrons}</Text>
            <Text mt={2}>Kills: {challenge.kills}</Text>
            <Text mt={4}>{challenge.description}</Text>
        </Box>
    );
};

const ChallengeList: React.FC = () => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {challenges.map((challenge) => (
                <GridItem key={challenge.id}>
                    <ChallengeCard challenge={challenge} />
                </GridItem>
            ))}
        </Grid>
    );
};

export default ChallengeList;