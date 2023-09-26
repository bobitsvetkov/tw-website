import { Box, Text, Image, Heading, useBreakpointValue, Flex, Center, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import React, { useState } from "react";

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
    factionIcon: string;
}

const challenges: Challenge[] = [
    {
        id: "1",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/ardiaei/mon_256.png"
    },
    {
        id: "2",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Iberian Bull",
        description: "Faction challenge for Lusitani: 2 chevrons on the noble gen, 1 chevron on each of the 4 balearic slingers, 1 chevron on at least 5 veteran shield warriors(CAN BE DONE ON DEFENSE)",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/arevaci/mon_256.png",
    },
    {
        id: "3",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/armenia/mon_256.png",
    },
    {
        id: "4",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/arverni/mon_256.png",
    },
    {
        id: "5",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/athens/mon_256.png",
    },
    {
        id: "6",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/baktria/mon_256.png",
    },
    {
        id: "7",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/boii/mon_256.png",
    },
    {
        id: "8",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/carthage/mon_256.png",
    },
    {
        id: "9",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/cimmeria/mon_256.png",
    },
    {
        id: "10",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/colchis/mon_256.png",
    },
    {
        id: "11",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/epirus/mon_256.png",
    },
    {
        id: "12",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/galatia/mon_256.png",
    },
    {
        id: "13",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/getae/mon_256.png",
    },
    {
        id: "14",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/iceni/mon_256.png",
    },
    {
        id: "15",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/meroe/mon_256.png",
    },
    {
        id: "16",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "The Iberian Bull",
        description: "2 chevrons on the noble gen, 1 chevron on each of the 4 balearic slingers, 1 chevron on at least 5 veteran shield warriors(CAN BE DONE ON DEFENSE)",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/lusitani/mon_256.png",
    },
    {
        id: "17",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/macedon/mon_256.png",
    },
    {
        id: "18",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/masaesyli/mon_256.png",
    },
    {
        id: "19",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/massagetae/mon_256.png",
    },
    {
        id: "20",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/massilia/mon_256.png",
    },
    {
        id: "21",
        winner: "Berry",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 14,
        kills: 2336,
        title: "The Desert Sentinel",
        description: "The Desert Sentinel - faction challenge for Nabatea: 1 chevron on each of the 4 nabatean heavy archers, 1 chevron on the nabatean noble horse gen and at least 1 chevron on 6 of the armored desert hoplites",
        image: "https://cdn.britannica.com/13/6213-004-2CA88DF6/Flag-Romania.jpg",
        screenshotLink: "https://cdn.discordapp.com/attachments/1154521158583062608/1155271932707606629/20230924013428_1.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/nabatea/mon_256.png",
    },
    {
        id: "22",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/nervii/mon_256.png",
    },
    {
        id: "23",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/odryssian%20kingdom/mon_256.png",
    },
    {
        id: "24",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/parthia/mon_256.png",
    },
    {
        id: "25",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/pergamon/mon_256.png",
    },
    {
        id: "26",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/pontus/mon_256.png",
    },
    {
        id: "27",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/egypt/mon_256.png",
    },
    {
        id: "28",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/rome/mon_256.png",
    },
    {
        id: "29",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/roxolani/mon_256.png",
    },
    {
        id: "30",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/saba/mon_256.png",
    },
    {
        id: "31",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/royal%20scythia/mon_256.png",
    },
    {
        id: "32",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/seleucid/mon_256.png",
    },
    {
        id: "33",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/sparta/mon_256.png",
    },
    {
        id: "34",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/suebi/mon_256.png",
    },
    {
        id: "35",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/syracuse/mon_256.png",
    },
    {
        id: "36",
        winner: "Not claimed yet!",
        historicalRecord: "This list is empty. You can help by expanding it!",
        chevrons: 0,
        kills: 0,
        title: "Not announced yet!",
        description: "Not announced yet!",
        image: "https://img.freepik.com/free-vector/white-flag-wind-against-blue-sky-with-white-clouds-background-banner-abstract_1284-5383.jpg?w=2000",
        screenshotLink: "https://t3.ftcdn.net/jpg/04/17/86/40/360_F_417864022_gltC9P15AWWal6wXOK9CPcc5vaJWqlPN.jpg",
        factionIcon: "https://www.honga.net/totalwar/rome2/images/rome2/flags/tylis/mon_256.png",
    },
];


const FactionChallengesPage: React.FC = () => {
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 10 }) ?? 1;

    // Create rows for faction icons
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
                <Heading color="white">Faction Challenges</Heading>
            </Center>
            {rows.map((row, rowIndex) => (
                <Flex key={rowIndex} justify="center" alignItems="center">
                    {row.map((challenge) => (
                        <Box key={challenge.id} p={4} bg="gray.700" rounded="lg" m={2} onClick={() => openChallenge(challenge)}>
                            <Center>
                                <Image src={challenge.factionIcon} alt={challenge.title} maxW="100px" maxH="100px" />
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
                            {/* <Text>Description: {selectedChallenge.description}</Text> */}
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

export default FactionChallengesPage;