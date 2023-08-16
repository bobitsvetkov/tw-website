import { Box, Center, Heading } from "@chakra-ui/react";

function Streamers() {
    const streamers = [
        {
            name: "EpicGamer001",
            image: "/images/streamers/epicgamer001.jpg",
            description: "A passionate strategy gamer who loves historical games. Join me on my conquests!"
        },
        {
            name: "StrategyKing",
            image: "/images/streamers/strategyking.jpg",
            description: "I've been playing strategy games for over a decade. Let's dive into some epic battles together!"
        },
        {
            name: "RomanEmpress",
            image: "/images/streamers/romanempress.jpg",
            description: "From the heart of Rome, I lead my legions to victory. Follow my adventures!"
        },
        {
            name: "TotalWarrior",
            image: "/images/streamers/totalwarrior.jpg",
            description: "Diving deep into the mechanics of Total War games and sharing my insights."
        },
        {
            name: "BattleMaster",
            image: "/images/streamers/battlemaster.jpg",
            description: "Every battle is a new story. Join me as I rewrite history, one game at a time."
        },
        {
            name: "LegionCommander",
            image: "/images/streamers/legioncommander.jpg",
            description: "Leading legions and creating epic strategies. Let's conquer the world!"
        },
        {
            name: "SpartanGoddess",
            image: "/images/streamers/spartangoddess.jpg",
            description: "From Sparta with love. Witness my strategies and learn from the best."
        },
        {
            name: "WarCouncil",
            image: "/images/streamers/warcouncil.jpg",
            description: "Join my war council as we dissect and discuss various strategies and tactics."
        },
        {
            name: "CenturionPlays",
            image: "/images/streamers/centurionplays.jpg",
            description: "A centurion's perspective on warfare. Dive into epic battles with me!"
        },
        {
            name: "TacticalGenius",
            image: "/images/streamers/tacticalgenius.jpg",
            description: "They call me the tactical genius. Watch and learn!"
        }
    ];
    return (
        <Box>
            <Center>
                <Heading>Your Game Logo Here</Heading>
            </Center>
            {/* Add your content cards and other elements below */}
        </Box>
    );
}

export default Streamers;