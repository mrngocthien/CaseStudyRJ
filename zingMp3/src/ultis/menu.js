import icons from "./icons";

const { MdOutlineLibraryMusic, GiChart, BiDisc } = icons;
const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={'24px'}/>
    },
    {
        path: '',
        text: 'Khám phá',
        end: 'true',
        icons: <BiDisc size={'24px'}/>
    },
    {
        path: 'zing-chart',
        text: '@zingchart',
        icons: <GiChart size={'24px'}/>
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineLibraryMusic size={'24px'}/>
    }
]

export {sidebarMenu};