import { Box, Text, Image, Heading, useBreakpointValue, Flex, Center, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import React, { useState } from "react";

interface Challenge {
    id: string;
    winner: string;
    chevrons: number;
    kills: number;
    title: string;
    description: string;
    image: string;
    screenshotLink: string;
    unitIcon: string;
}

interface Challenge {
    id: string;
    winner: string;
    historicalRecord: string;
    chevrons: number;
    kills: number;
    title: string;
    description: string;
    image: string;
    screenshotLink: string;
    unitIcon: string;
}


const challenges: Challenge[] = [
    {
        id: "1",
        winner: "Desstro",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 11,
        kills: 1249,
        title: "Shotel Elite",
        description: "Comm to Brazil!",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1154554558866010132/image.png?ex=65136439&is=651212b9&hm=9762dc34f8f9cf7724cf7efcb0952eaa0dddb9d7f94b0f56509e8dedfc3ff9ff&",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_kush/dk_kush_armoured_shotel_warriors.png"
    },
    {
        id: "2",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Picked Peltast ",
        description: "Min 4 picked peltasts with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_pergamon/Gre_Picked_Peltasts.png"
    },
    {
        id: "3",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty.You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Sexman ",
        description: "Min 4 picked peltasts with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_armenia/Eas_Axemen.png"
    },
    {
        id: "4",
        winner: "Hyena",
        historicalRecord: "Graikos",
        chevrons: 4,
        kills: 473,
        title: "AssPiss Commander",
        description: "Min 2 chevrons on 2 aspis companion cavs each",
        image: "https://cdn.britannica.com/39/94839-004-EEB20F36/Flag-Serbia.jpg",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1154862804675854538/image.png",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_macedon/Gre_Aspis_Companion_Cav.png"
    },
    {
        id: "5",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Disciple ",
        description: "Min 5 disciples of apademak with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_kush/dk_kush_disciples_of_apedemak.png"
    },
    {
        id: "6",
        winner: "Graikos",
        historicalRecord: "Rhunnic Warlord",
        chevrons: 4,
        kills: 730,
        title: "The Hero of Sparta",
        description: "Min 2 chevrons on both heroes of sparta each",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2000px-Flag_of_Greece.svg.png",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1155856216598253659/20230925161521_1.jpg?ex=6513833c&is=651231bc&hm=8a829d61639d95b9251252e8a4cb82f68a4748807a983b5aacf0020b1e3705df&",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_sparta/Gre_Heroes_Sparta.png"
    },
    {
        id: "7",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Fierce",
        description: "Min 4 fierce swords with 2 chevrons each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_nervii/Cel_Fierce_Swords.png"
    },
    {
        id: "8",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Sword Bastard",
        description: "Min 5 sword masters with a double chevron each",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_suebi/Ger_Sword_Masters.png"
    },
    {
        id: "9",
        winner: "Bobi",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 11,
        kills: 1933,
        title: "The Bugar",
        description: "Min 5 thracian nobles with a double chevron(CAN BE DONE ON DEFENSE)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Flag_of_Bulgaria_%28with_coat_of_arms%29.svg/1024px-Flag_of_Bulgaria_%28with_coat_of_arms%29.svg.png",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1155810367008686100/20230925131104_1.jpg?ex=65135889&is=65120709&hm=976c901e9541792636f33e32be57d2416306544eeb6d1fbf1ce5a8a8a8133fdf&",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_odryssia/Thr_Nobles.png",
    },
    {
        id: "10",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Tank for Hire",
        description: "Min 2 chevrons on both mercenary veteran hoplites",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2//Mer_Gre_Vet_Hoplites.png",
    },
    {
        id: "11",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Desert Eagle",
        description: "Min 1 chevron on at least 6 desert cohorts",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_masaesyli/dk_num_desert_cohort.png",
    },
    {
        id: "12",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Janissary",
        description: "Min 1 chevron on each of the 2 cappadocian cavs",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_pontus/Eas_Cappadocian_Cav.png"
    },
    {
        id: "13",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Elite Archer",
        description: "Min 5 chevrons on all 4 elite persian archers combined(CAN BE DONE ON DEFENSE)",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_parthia/Eas_Elite_Persian_Archers.png"
    },
    {
        id: "14",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Mini Legionary",
        description: "Min 1 chevron on 4 different galatian swords(CAN BE DONE ON DEFENSE)",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        unitIcon: "https://www.honga.net/totalwar/rome2/gen_images/unit_icon/rome2/rom_galatia/Cel_Galatian_Swords.png"
    },
];


const UnitChallengePage: React.FC = () => {
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 10 }) ?? 1;

    // Create matrix for faction icons
    const rows = [];
    for (let i = 0; i < challenges.length; i += columns) {
        const row = challenges.slice(i, i + columns);
        rows.push(row);
    }

    const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

    const openChallenge = (challenge: Challenge) => {
        setSelectedChallenge(challenge);
    };

    const closeChallenge = () => {
        setSelectedChallenge(null);
    };

    return (
        <Box bg="gray.900" minHeight="100vh" p={6}>
            <Center mb={6}>
                <Heading color="white">Unit Challenges</Heading>
            </Center>
            {rows.map((row, rowIndex) => (
                <Flex key={rowIndex} justify="center" alignItems="center">
                    {row.map((challenge) => (
                        <Box key={challenge.id} p={4} bg="gray.700" rounded="lg" m={2} onClick={() => openChallenge(challenge)}>
                            <Center>
                                <Image src={challenge.unitIcon} alt={challenge.title} maxW="100px" maxH="100px" />
                            </Center>
                        </Box>
                    ))}
                </Flex>
            ))}
            {selectedChallenge && (
                <Modal isOpen={true} onClose={closeChallenge}>
                    <ModalOverlay />
                    <ModalContent bg="gray.700" color="white">
                        <ModalHeader textAlign="center">{selectedChallenge.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>
                                <Image src={selectedChallenge.image} alt={selectedChallenge.title} maxW="100px" maxH="100px" />
                            </Center>
                            <Text mt={4}>Winner: {selectedChallenge.winner}</Text>
                            <Text>Chevrons: {selectedChallenge.chevrons}</Text>
                            <Text>Kills: {selectedChallenge.kills}</Text>
                            <Text>Past Challengers: {selectedChallenge.historicalRecord}</Text>
                            <Center mt={4}>
                                <Link href={selectedChallenge.screenshotLink} isExternal>
                                    Screenshot Link
                                </Link>
                            </Center>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default UnitChallengePage;