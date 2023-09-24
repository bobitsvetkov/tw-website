import { Box, Text, Image, Heading, useBreakpointValue, Flex, Center, SimpleGrid } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

interface Challenge {
    id: string;
    winner: string;
    chevrons: number;
    kills: number;
    title: string;
    description: string;
    image: string;
    screenshotLink: string;
}

const challenges: Challenge[] = [
    {
        id: "1",
        winner: "Berry",
        chevrons: 14,
        kills: 2336,
        title: "The Desert Sentinel Role",
        description: "Faction challenge for Nabatea",
        image: "https://cdn.britannica.com/13/6213-004-2CA88DF6/Flag-Romania.jpg",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1155271932707606629/20230924013428_1.jpg"
    },
    {
        id: "2",
        winner: "Desstro",
        chevrons: 10,
        kills: 1249,
        title: "Shotel Elite",
        description: "Comm to Brazil!",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1154554558866010132/image.png"
    },
    {
        id: "3",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "Picked Peltast ",
        description: "Min 4 picked peltasts with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg"
    },
    {
        id: "4",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "The Sexman",
        description: "Min 6 Axeman with a chevron each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg"
    },
    {
        id: "5",
        winner: "Hyena",
        chevrons: 4,
        kills: 473,
        title: "AssPiss Commander",
        description: "Min 2 chevrons on 2 aspis companion cavs each",
        image: "https://cdn.britannica.com/39/94839-004-EEB20F36/Flag-Serbia.jpg",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1154862804675854538/image.png"
    },
    {
        id: "6",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 8,
        title: "The Disciple",
        description: "Min 5 disciples of apademak with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg"
    },
    {
        id: "7",
        winner: "Rhunic Warlord",
        chevrons: 4,
        kills: 442,
        title: "The Hero of Sparta",
        description: "Min 2 chevrons on both heroes of sparta each",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1155420992227790879/20230924092834_1.jpg"
    },
    {
        id: "8",
        winner: "Not claimed yet!",
        chevrons: 0,
        kills: 0,
        title: "The Fierce",
        description: "Min 4 fierce swords with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg"
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


const ChallengeList: React.FC = () => {
    const cardBg = 'gray.700';
    const cardColor = 'white';
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });

    return (
        <Box bg="gray.900" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Heading color={cardColor}>Challenge Results</Heading>
            </Center>
            <SimpleGrid columns={columns} spacing={10}>
                {challenges.map((challenge) => (
                    <Box
                        key={challenge.id}
                        bg={cardBg}
                        color={cardColor}
                        p={6}
                        borderRadius="md"
                        boxShadow="2xl"
                        _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
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
                        <a href={challenge.screenshotLink} target="_blank" rel="noopener noreferrer">
                            <Text mt={2} color="blue.400" _hover={{ textDecoration: 'underline' }}>
                                Check out the stats!
                            </Text>
                        </a>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default ChallengeList;