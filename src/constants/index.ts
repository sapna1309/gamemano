import { AppStoreIcon } from "@/components/icon/AppStoreIcon";
import { GameStoreIcon } from "@/components/icon/GameStoreIcon";
import { HomeIcon } from "@/components/icon/HomeIcon";
import { LeaderBoardIcon } from "@/components/icon/LeaderBoardIcon";
import { MessagesIcon } from "@/components/icon/MessagesIcon";
import { PaymentIcon } from "@/components/icon/PaymentIcon";

export const topNavItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Game Store",
        path: "/game-store"
    },
    {
        name: "Leaderboard",
        path: "/leaderboard"
    }
];

export const sideBarItems = [
    {
        name: "Home",
        path: "/",
        Icon: HomeIcon
    },
    {
        name: "Messages",
        path: "/messages",
        Icon: MessagesIcon
    },
    {
        name: "Game Store",
        path: "/game-store",
        Icon: GameStoreIcon
    },
    {
        name: "Payments",
        path: "/payments",
        Icon: PaymentIcon
    },
    {
        name: "App Store",
        path: "/app-store",
        Icon: AppStoreIcon
    },
    {
        name: "Leaderboard",
        path: "/leaderboard",
        Icon: LeaderBoardIcon
    }
];

export const carouselItems = [
    {
        id: 1,
        image: "",
        heading: "Days Gone",
        releaseDate: "RELEASE DATE : 30TH DECEMBER",
        content: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        availableOn: ["/icons/macios.png", "/icons/windos.png"],
        isButton: true,
        buttonText: "Try For Free",
        buyNow: "Buy now for $40 only",
        numberOfPlayingFriends: "40 of your friends are playing"
    },
    {
        id: 2,
        image: "",
        heading: "Days Gone 2",
        releaseDate: "RELEASE DATE : 30TH DECEMBER",
        content: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        availableOn: ["/icons/macios.png", "/icons/windos.png"],
        isButton: true,
        buttonText: "Try For Free",
        buyNow: "Buy now for $40 only",
        numberOfPlayingFriends: "40 of your friends are playing"
    },
    {
        id: 3,
        image: "",
        heading: "Days Gone 3",
        releaseDate: "RELEASE DATE : 30TH DECEMBER",
        content: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        availableOn: ["/icons/macios.png", "/icons/windos.png"],
        isButton: true,
        buttonText: "Try For Free",
        buyNow: "Buy now for $40 only",
        numberOfPlayingFriends: "40 of your friends are playing"
    }
];

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 3.5,
        slidesToSlide: 3,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 2.5,
        slidesToSlide: 2
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1.5,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    },
};

export const carouselResponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 1,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 1,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1,
        slidesToSlide: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    },
};

export const gameCradItems = [
    {
        id: 1,
        image: "",
        heading: "Evolution",
        releaseDate: "RELEASE DATE : 30TH DECEMBER",
        content: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        availableOn: ["/icons/macios.png", "/icons/windos.png"],
        isButton: true,
        buttonText: "Try For Free",
        buyNow: "Buy now for $40 only",
        numberOfPlayingFriends: "40 of your friends are playing"
    },
    {
        id: 2,
        image: "",
        heading: "Valorant",
        releaseDate: "RELEASE DATE : 30TH DECEMBER",
        content: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        availableOn: ["/icons/macios.png", "/icons/windos.png"],
        isButton: true,
        buttonText: "Try For Free",
        buyNow: "Buy now for $40 only",
        numberOfPlayingFriends: "40 of your friends are playing"
    },
    {
        id: 3,
        image: "",
        heading: "Warlords",
        releaseDate: "RELEASE DATE : 30TH DECEMBER",
        content: "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
        availableOn: ["/icons/macios.png", "/icons/windos.png"],
        isButton: true,
        buttonText: "Try For Free",
        buyNow: "Buy now for $40 only",
        numberOfPlayingFriends: "40 of your friends are playing"
    }
];

export const footerItems = [
    {
        id: 1,
        name: 'Privacy Notice',
        path: '/'
    },
    {
        id: 2,
        name: 'Terms of Service',
        path: '/'
    },
    {
        id: 3,
        name: 'Cookie Policy',
        path: '/'
    },
    {
        id: 4,
        name: 'Company Information',
        path: '/'
    },
    {
        id: 5,
        name: 'Cookie Preferences',
        path: '/'
    },
]

export const platformsFilter = [
    { name: 'PC', slug: 'pc' },
    { name: 'PlayStation 5', slug: 'playStation 5' },
    { name: 'PlayStation 4', slug: 'playStation 4' },
    { name: 'Xbox Series', slug: 'xbox series' },
    { name: 'Nintendo Switch', slug: 'nintendo switch' },
]

export const gameItems = [
    {
        id: 1,
        name: 'Akali',
        description: "The Rogue Assassin"
    },
    {
        id: 2,
        name: 'Thresh',
        description: "The Chain Warden"
    },
    {
        id: 3,
        name: 'Jinx',
        description: "The Loose Cannon"
    },
    {
        id: 4,
        name: 'Yasuo',
        description: "The Unforgiven"
    },
]