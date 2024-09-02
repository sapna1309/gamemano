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