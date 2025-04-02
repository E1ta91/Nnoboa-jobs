
import { FaChartLine } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiChicken } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";
import { PiTractor } from "react-icons/pi";
import { TbMapPin } from "react-icons/tb";
import { TfiTablet, TfiWallet, TfiWand } from "react-icons/tfi";
import r1 from '../assets/images/r1.svg'
import r2 from '../assets/images/r2.svg'
import r3 from '../assets/images/r3.svg'
import r4 from '../assets/images/r4.svg'
import r5 from '../assets/images/r5.svg'
import r6 from '../assets/images/r6.png'
import { Bookmark, Clock9, MapPin, Heart } from "lucide-react";


const K = {
    CATEGORIES: [
        {
            icon: <TbMapPin />,
            postion: 'Agronomist',
            open: '198 open position'
        },

        {
            icon: <TfiWand />,
            postion: 'Farm workers/Labourers',
            open: '198 open position'
        },
        {
            icon: <TfiWallet />,
            postion: 'Livestock Farmer',
            open: '198 open position'
        },
        {
            icon: <GiChicken />,
            postion: 'Poultry Farmer',
            open: '198 open position'
        },
        {
            icon: <PiTractor />,
            postion: 'Tractor Operators',
            open: '198 open position'
        },
        {
            icon: <TfiTablet />,
            postion: 'Farm Managers',
            open: '198 open position'
        },
        {
            icon: <ImUserTie />,
            postion: 'Extension Officer',
            open: '198 open position'
        },
        {
            icon: <FaChartLine />,
            postion: 'Sales and Marketing',
            open: '198 open position'
        },
    ],

    RECENT: [
        {
            img: [r1],
            title: 'Farm workers / Labourers',
            location: 'Konongo, Ashanti',
            icon1: <MapPin />,
            icon2: <Bookmark />,
            icon3: <Clock9 />,
            type: ' Part Time',
            time: 'Published 1 month ago',
            type2: 'Part Time',
            price: '₵1200 - ₵2500',
            icon: <Heart />
        },
        {
            img: [r2],
            title: 'Agronomist',
            icon1: <MapPin />,
            icon2: <Bookmark />,
            icon3: <Clock9 />,
            location: 'Konongo, Ashanti',
            type: ' Full time',
            time: 'Published 1 month ago',
            type2: 'Full Time',
            price: '₵1200 - ₵2500',
            icon: <Heart />
        },
        {
            img: [r3],
            title: 'Poultry farmer',
            location: 'Konongo, Ashanti',
            icon1: <MapPin />,
            icon2: <Bookmark />,
            icon3: <Clock9 />,
            type: ' Part Time',
            time: 'Published 1 month ago',
            type2: 'Part Time',
            price: '₵1200 - ₵2500',
            icon: <Heart />
        },
        {
            img: [r4],
            title: 'Livestock farmer',
            location: 'Konongo, Ashanti',
            icon1: <MapPin />,
            icon2: <Bookmark />,
            icon3: <Clock9 />,
            type: ' Full time',
            time: 'Published 1 month ago',
            type2: 'Full Time',
            price: '₵1200 - ₵2500',
            icon: <Heart />
        },
        // {
        //     img: [r5],
        //     title: 'Agriculture sales and marketing',
        //     location: 'Konongo, Ashanti',
        //     icon1: <MapPin />,
        //     icon2: <Bookmark />,
        //     icon3: <Clock9 />,
        //     type: ' Part Time',
        //     time: 'Published 1 month ago',
        //     type2: 'Part time',
        //     price: '₵1200 - ₵2500',
        //     icon: <Heart />
        // },
        // {
        //     img: [r6],
        //     title: 'Extention officers',
        //     location: 'Konongo, Ashanti',
        //     icon1: <MapPin />,
        //     icon2: <Bookmark />,
        //     icon3: <Clock9 />,
        //     type: ' Full Time',
        //     time: 'Published 1 month ago',
        //     type2: 'Full Time',
        //     price: '₵1200 - ₵2500',
        //     icon: <Heart />
        // },
    ],

   CONSULT: [
    {
        name: 'Kevin Asamanju',
        email: 'kevasam23@gmail.com',
        title: 'Software Engineers',
        years: '6+ years of experience ',
        industry: 'Technology'
    },
    {
        name: 'Kevin Asamanju',
        email: 'kevasam23@gmail.com',
        title: 'Software Engineers',
        years: '6+ years of experience ',
        industry: 'Technology'
    },
    {
        name: 'Kevin Asamanju',
        email: 'kevasam23@gmail.com',
        title: 'Software Engineers',
        years: '6+ years of experience ',
        industry: 'Technology'
    },
    {
        name: 'Kevin Asamanju',
        email: 'kevasam23@gmail.com',
        title: 'Software Engineers',
        years: '6+ years of experience ',
        industry: 'Technology'
    },
    {
        name: 'Kevin Asamanju',
        email: 'kevasam23@gmail.com',
        title: 'Software Engineers',
        years: '6+ years of experience ',
        industry: 'Technology'
    },
    {
        name: 'Kevin Asamanju',
        email: 'kevasam23@gmail.com',
        title: 'Software Engineers',
        years: '6+ years of experience ',
        industry: 'Technology'
    },
   ]
   


}

export default K