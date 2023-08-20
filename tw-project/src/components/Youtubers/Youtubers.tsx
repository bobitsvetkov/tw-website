import { Box, Center, Heading, Image, Text, Grid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { useEffect } from 'react';
const Youtubers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const youtubers  = [
        {
            name: "@marketableskills5374",
            image: "https://static-cdn.jtvnw.net/jtv_user_pictures/2c0a20e0-c769-4e89-b8fd-69ad86f5547a-profile_image-300x300.png",
            description: "Welcome to the shit show, ya beautiful misfits :)  Its mostly Rome 2 and the long dark up in here, but look for more content soon!!"
        },
        {
            name: "@capn4is187",
            image: "https://pbs.twimg.com/profile_images/1024555257211146241/5nkcKtJu_400x400.jpg",
            description: "Honestly. I'd run as far as you can in the opposite direction if I were you."
        },
        {
            name: "@bobitw",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Territory_of_the_First_Bulgarian_Empire_-_9_th_century.png",
            description: "Hello there. I am an avid Total War player, but I will stream other stuff as well. I might talk a bit about politics/economy/education etc. Still most of my content will probably be focused on Total War."
        },
        {
            name: "@HyenA806",
            image: "https://yt3.googleusercontent.com/ytc/AOPolaTmsNfBgGG9Ml166UmJ9jhrTWUhooF8HGfaQ55Sww=s176-c-k-c0x00ffffff-no-rj",
            description: "Eternal Meme Lord of TWLS"
        },
        {
            name: "@PopeJohnPaul",
            image: "https://yt3.googleusercontent.com/ytc/AOPolaQKizJaGonjydkTASk8GU_lbqcwif_sVVSkLsP98Q=s176-c-k-c0x00ffffff-no-rj",
            description: "Diving deep into the mechanics of Total War games and sharing my insights."
        },
        {
            name: "@PixelatedApollo1",
            image: "https://yt3.googleusercontent.com/ytc/AOPolaRO4D4_4HLTEbLpjuYwUpEfsI237-AvnXh2qk5gow=s900-c-k-c0x00ffffff-no-rj",
            description: "Join with me, to witness some of the greatest battles throughout history.  Not just from our world, but from fantasy worlds like Middle Earth and Elder Scrolls.  Thanks to award winning series Total War, we can go back in time and watch some of the bloodiest battles with our own two eyes!  My name is Pixelated Apollo, and I hope you have your sword sharpened, and your Warhorse rested, because it's time for Battle!! "
        },
        {
            name: "@androo024",
            image: "https://yt3.googleusercontent.com/XUK4IMsAcP8Bc9JzlsVpTEaQHK99a8y0OIG3PAFPNAQ2taivUOwkLRhaAfHuzUugf4lbwffx=s176-c-k-c0x00ffffff-no-rj",
            description: "Total War: Rome 2 content creator. I currently focus mostly on covering Total War League Siege battles, but I also cover some random battles too. I also mix in a good meme from time to time :)"
        },
        {
            name: "@ellingtonGaming",
            image: "https://yt3.googleusercontent.com/ytc/AOPolaTRnxVhxH8HKc2zELiOpG4rwjnx5iKv5ly4VZI6vQ=s176-c-k-c0x00ffffff-no-rj",
            description: `Hey all!
I'm Ellington and i'm a Total War player, I'm bringing all the most EPIC and crazy battles from different era's of history! We have pro players, we have new players, we have all the juicy cav charges and slaughters from battlefields around the world!
Thanks for coming to the channel! Here i'm gonna focus on the Total War games and we're gonna talk some tactics and have some fun.I hope ya'll enjoy the stuff i'm putting out and thanks for the support!`
        },
        {
            name: "@lanontotalwar",
            image: "https://yt3.googleusercontent.com/LQbxmUrcn3k-SsvGDvPrtQC7biAhpmMsx4feYq-tVGiNYyJFtjyNhF0DqBXUsbU-PPBraeiD6Q=s176-c-k-c0x00ffffff-no-rj",
            description: `Hello ladies and gentlemen,  I am lanon, a total war fanatic, for over a decade.
I am a 27 year old nurse with a full- time job at a hospital, and a husband and gamer on the side.
This channel will be focussed on mostly modded gameplay videos and stream of different total war games.

If you enjoy funny and personal commentary during streams(and some failures) this channel might be the channel you have been looking for, so hit subscribe and find out;)`
        },
    ];
    return (
        <Box bg="gray.800" minHeight="100vh" color="white">
            <Center mb={6}>
                <Heading color="white">Check out our Youtubers!</Heading>
            </Center>

            <Grid
                templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={6}
            >
                {youtubers.map((youtuber, index) => (
                    <LinkBox
                        key={index}
                        as="article"
                        p={4}
                        borderRadius="md"
                        textAlign="center"
                        bg="gray.700"
                        color="white"
                        boxShadow="lg"
                        transition="0.3s"
                        _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
                    >
                        <Image src={youtuber.image} alt={youtuber.name} boxSize="300px" mx="auto" mb={4} />
                        <Text mb={4}>{youtuber.description}</Text>
                        <LinkOverlay href={`https://www.youtube.com/${youtuber.name}`} isExternal fontWeight="bold">
                            Watch on YouTube
                        </LinkOverlay>
                    </LinkBox>
                ))}
            </Grid>
        </Box>
    );
}

export default Youtubers;