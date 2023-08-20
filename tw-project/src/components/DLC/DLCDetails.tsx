import { Box, List, ListItem, Text } from '@chakra-ui/react';

const DLCDetails: React.FC = () => {
    const dlcs = [
        { name: "Greek States", description: `You get tortoises and three factions Sparta, Athens and Epirus.
        Honestly without this DLC you are simply screwed. Your attack on civilized settlements will be so easy to deal with
        you might not even be able to go pass group stage. Torts are just THAT important. The factions are not that powerful.
        The only good faction is Athens, Sparta is one of the worst and Epirus is meh due to lack of midtier swords (you can bring max 3 samnites)` },
        { name: "Desert Kingdoms", description: `Adds 4 factions which are the Kingdom of Kush, Nabatea, Saba and Masaesyli(Numidia).
        Without DLC I don't know if you could even win a matchup in playoffs. This DLC has crazy value. Kush which is OP as we all know, then
        Nabatea one of if not THE best supporting faction, Saba the faction which even the best players dread to face and then
        Masaesyli otherwise called Desert Rome. As the name might suggest they are top tier fac. A MUST DLC.` },
        { name: "Caesar In Gaul", description: `Adds Galatia, Boii and Nervii. This DLC gives you in my opinion 3 top tier factions.
        Boii is perhaps the best faction on defence, Galatia is incredibly strong on attack and Nervii is one of the best elite spam as well as
        one of the best sally facs and they also give you quite a lot of points in TWLS. Additionally this DLC gives you access to unique general options,
        unfortunately most of them are inferior to strategist general. The only viable one is Ariovistus which gives you incredibly high charge bonus
        and AP damage in a radius around the general which is DEVASTATING for sallies and another interesting option is Vercingetorix.
        Your entire army gets a slight boost to stats for a brief period of time which probably is not worth the trade off. A MUST to have DLC.` },
        { name: "Hannibal at the Gates", description: `Adds Arevaci, Lusitani, Syracuse and new units for Carthage and Epirus (Mercenary Samnites and Scutarii).
        This DLC is incredibly important for mp. Arevaci is the best faction to pick on slinger maps, Lusitani is the best to pick for
        full sally and syracuse is also a very strong greek faction (only for slinger maps though). Not only that but this dlc makes Epirus playable
        and makes Carthage much stronger. It's a must pick if you want to play rome 2 competitively.` },
        { name: "Pirates and Raiders", description: `Adds Ardiei, Oddrysian Kingdom and Tylis.
        Ardiaei is very similar to Pergamon. The difference between the two is that ardiaei doesn't have good peltasts, but
        they have the best thueros spears in the game and one of the best elite hoplites in the game, so they are very good in mp even in playoffs.
        ` },
        { name: "Black Sea Colonies", description: `Adds Cimmeria, Pergamon and Colchis. Cimmeria is one of the weakest factions in mp.
        Their archers are quite strong but their infantry is severly lacking. Pergamon is one of the best pilla factions.
        They are one of the few counters to kush elite spam so they are very strong in mp. Colchis on the other hand is kinda average.
        Their archers are fragile, their midtier infantry has lower hp than many other midtiers but it is a pretty good faction to play in group stage. ` },
        { name: "Nomadic Tribes", description: `Adds factions which have only cav units no infantry and they are Massagetae, Royal Scythia and Roxolani.
        Massagetae's focus is more on heavy cataphracts. They only have draco on saka noble lancers and they don't have long range ha so they aren't as viable
        as the other nomadic factions. Royal Schythia's biggest strength is in the amazonian riders. They have 150 range so you can dodge enemy archer fire far easier than with standard ha.
        Lastly Roxolani might be the easiest to use of the 3. They have draco ability on cav unit that barely costs 340 so you could apply draco on the entire enemy army.
        Additionally they have quite strong elite shock cav and are the most balanced and flexible nomadic faction. ` }
    ];
    return (
        <Box
            p={4}
            borderRadius="md"
            textAlign="center"
            bg="gray.700"
            color="white"
            boxShadow="lg"
            minHeight="100vh"  // This ensures the content takes up at least the full viewport height
            display="flex"     // This and the following three lines center the content vertically
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Text fontWeight="bold" mb={3}>Detailed DLC Recommendations for Multiplayer</Text>
            <List spacing={3} width="80%">
                {dlcs.map((dlc, index) => (
                    <ListItem key={index}>
                        <Text fontWeight="bold">{dlc.name}</Text>
                        <Text mt={1}>{dlc.description}</Text>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default DLCDetails;