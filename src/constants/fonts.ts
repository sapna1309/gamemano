import { Wallpoet, Prosto_One, Aoboshi_One, Poppins, Press_Start_2P } from "next/font/google";

const wallpoet = Wallpoet({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--wallpoet'
});
const prosto_one = Prosto_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--prosto_one'
});
const aoboshi_one = Aoboshi_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--aoboshi_one'
});
const press_start_2p = Press_Start_2P({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--press_start_2p'
});
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--poppins'
});

export { wallpoet, poppins, aoboshi_one, press_start_2p, prosto_one }
