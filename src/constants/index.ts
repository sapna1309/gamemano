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

export const cardSliderSettings = {
    arrows: false,
    showDots: false,
    autoPlay: true,
    pauseOnHover: true,
    partialVisibilityGutter: 30,
    shouldResetAutoplay: true,
    infinite: true,
    autoPlaySpeed: 2500
};

export const carouselSettings = {
    arrows: false,
    showDots: false,
    autoPlay: true,
    pauseOnHover: true,
    partialVisibilityGutter: 30,
    shouldResetAutoplay: true,
    infinite: true,
    autoPlaySpeed: 2500,
}

export const cardSliderResponsive = {
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

export const reviews = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "This product exceeded my expectations in every way. The quality is superb, and the design is just flawless. I would highly recommend this to anyone looking for something reliable and well-made.",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        rating: 4,
        comment: "I'm happy with my purchase, but I must admit the delivery took longer than expected. However, the product itself is of great quality and definitely worth the wait.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "Sam Johnson",
        rating: 3,
        comment: "The product works fine, but I feel it's a bit overpriced for what it offers. I would recommend it if you're okay with paying a premium for decent quality.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        id: 4,
        name: "Emily Davis",
        rating: 2,
        comment: "Unfortunately, this product did not live up to my expectations. The quality was subpar, and I experienced issues with it within a week of use.",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 5,
        name: "Michael Brown",
        rating: 5,
        comment: "I am absolutely thrilled with my purchase! This is exactly what I was looking for, and it performs even better than I had hoped. A fantastic buy for sure!",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        id: 6,
        name: "Lisa Green",
        rating: 4,
        comment: "The product is excellent and works as described. My only concern is the price, but overall, I think it's a solid purchase if you're willing to spend a bit more.",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        id: 7,
        name: "David Wilson",
        rating: 4,
        comment: "I really like this product! It's durable, looks good, and functions perfectly. I did have some trouble with the initial setup, but it was smooth sailing after that.",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        id: 8,
        name: "Olivia Martin",
        rating: 3,
        comment: "The product is okay, but I expected a bit more for the price. It does the job, but I can't say I'm completely satisfied with the overall performance.",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        id: 9,
        name: "James White",
        rating: 5,
        comment: "This is hands down the best purchase I've made this year. The build quality is top-notch, and it has made a huge difference in my daily routine. Worth every penny!",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        id: 10,
        name: "Sophia Clark",
        rating: 4,
        comment: "Good product, though I had some minor issues with the installation. Other than that, I'm very pleased with its overall performance and design.",
        avatar: "https://randomuser.me/api/portraits/women/10.jpg"
    }
];
