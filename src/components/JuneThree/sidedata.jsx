import { AiOutlineHome } from "react-icons/ai";
import { FaStore} from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { AiOutlineLayout } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import { GrDiamond  } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { BsFillChatFill } from "react-icons/bs";
import { SiTodoist } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { AiOutlineTable } from "react-icons/ai";
import { IoBarChartSharp } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";


import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { BiLogIn } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";

import {MdKeyboardArrowDown} from 'react-icons/md';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {MdKeyboardArrowRight} from 'react-icons/md';



const sideItems = [
    { itemid: 'online-marketing-dashboard',  name: 'online Marketing dashboard', label: 'Online Marketing Dashboard', Icon: <AiOutlineHome />},
    { itemid: 'ecomerece-dashboard', name: 'e-commerece dashboard', label: 'E-commerce Dashboard', Icon: <FaStore /> },
    {  itemid: 'app-dashboard', name: 'app dashboard', label: 'app dashboard', Icon: <AiOutlineMobile /> },
    {  itemid: 'booking-dashboard', name: 'booking dashboard', label: 'Booking Dashboard', Icon: <BiBookOpen /> },
    {  itemid: 'finance-dashboard', name: 'finance dashboard', label: 'Finance Dashboard',Icon: <GoRocket /> },
    {  itemid: 'fitness-dashboard',  name: 'fitness dashboard', label: 'Fitness Dashboard', Icon: <FiLogOut /> },
    {
        label: 'Layout',
        Icon: <AiOutlineLayout />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        itemid: 'layout',
        content: [
            { itemid: 'fitness-dashboard', name: 'light theme', label: 'Light Theme' },
            { itemid: 'fitness-dashboard', name: 'dark theme', label: 'Dark Theme' },
        ]
    },

    {itemid: 'log-out', name: 'logout', label: 'Log out', Icon: <FiLogOut/> },

    {
        name: 'ul elements',
        label: 'UI Elements',
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        Icon: <GrDiamond />,
        itemid: 'ui-element',
        content: [
            { name: 'light theme', label: 'Alerts' },
            { name: 'dark theme', label: 'Buttons' },
            { name: 'light theme', label: 'Carousel' },
            { name: 'dark theme', label: 'Collapse' },
            { name: 'light theme', label: 'Grids' },
            { name: 'dark theme', label: 'Modal' },
            { name: 'light theme', label: 'Notifications' },
            { name: 'dark theme', label: 'Panels' },
        ]
    },

    { itemid: 'mail-app', name: 'mail app', label: 'Mail Application',Icon: <FiMail /> },
    { itemid: 'chat-app', name: 'chat app', label: 'Chat Application',Icon: <BsFillChatFill /> },
    { itemid: 'todo-app', name: 'todo app', label: 'Todo Application',Icon: <SiTodoist /> },

    {
        name: 'forms',
        Icon: <FaWpforms />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        label: 'Forms',
        itemid: 'forms',
        content: [
            { name: 'redux form',
             label: 'redux-form',
             itemid: 'fitness-dashboard',
             Icon2: <MdKeyboardArrowRight />,
             Icon3: <MdKeyboardArrowDown />,
             items: [
                {name:'basic form', label: 'Basic Form'},
                {name:'check form', label: 'Check Form'},
                {name:'file upload', label: 'File Upload'},
                {name:'floating labels form', label: ' Floating Form'},
                {name:'Form DropZone', label: 'Form DropZone'},
                {name:'Form Layout', label: 'Form Layout'},
                {name:'form picker', label: 'Form Picker'},
                {name:'form validation', label: 'Validation Form'},
                {name:'mask form', label: 'Mask Form'},
                {name:'material form', label: 'Material Form'},
                {name:'Wizard form', label: 'Wizard Form'},
            ]
            },
         {name: 'hook form',
          label: 'Hook Form',
          itemid: 'hook-form',
          Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        content: [
              {name: 'basic form', label: 'Basic Form'},
              {name: 'form validation', label: 'Form Validation'},
              {name: 'wizard form', label: 'Wizard Form'},
          ] 
        }
        ]
    },

    {
        name: 'table',
        Icon: <AiOutlineTable />,
        label: 'Table',
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        itemid: 'table',
        content:[
            {name: 'basic table', label: 'Basic Table'},
              {name: 'data table', label: 'Data table'},
              {name: ' d and d table', label: 'Drag & Drop table'},
              {name: 'editable table', label: 'Editable table'},
              {name: 'material table', label: 'Material Table'},
              {name: 'resizeable table', label: 'Width resizable table'},
        ]
    },

    {
        name: 'chart',
        Icon: <IoBarChartSharp />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        itemid: 'chart',
        label: 'Chart',
        content: [
            {name: 'chart-js', label: 'Charts Js'},
              {name: 'React-viz', label: 'React-vis'},
              {name: 'recharts', label: 'Recharts'},
        ]
    },

    {
        name: 'map',
        Icon: <SiGooglemaps />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        label: 'Maps',
        itemid: 'maps',
        content: [
              {name: 'google map', label: 'Google map'},
              {name: 'React-viz', label: 'Vector map'},
              {name: 'map with api', label: 'Map with api request'},
        ]
    },

    {
        name: 'account',
        Icon: <BiUser />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        label: 'Account',
        itemid: 'account',
        content: [
            {name: 'email confim', label: 'Email Confirmation'},
            {name: 'lock screen', label: 'Lock Screen'},
            {name: 'log in photo', label: 'Log In Photo'},
            {name: 'profile', label: 'Profile'},
            {name: 'register', label: 'Register'},
            {name: 'register photo', label: 'Register Photo'},
            {name: 'reset password', label: 'Reset Password'},
            {name: 'reset pssword photo', label: 'Reset Password Photo'},
        ]
    },

    {
        name: 'e-commerece',
        Icon: <AiOutlineShoppingCart />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        label: 'E-commerece',
        itemid: 'e-comerece',
        content: [
            {name: 'cart', label: 'Cart'},
            {name: 'catalog', label: 'Catalog'},
            {name: 'oeder list', label: 'Orders List'},
            {name: 'payment', label: 'Payment'},
            {name: 'product edit', label: 'Product Edit'},
            {name: 'product page', label: 'Product Page'},
            {name: 'product list', label: 'Product List'},
        ]
    },

    
    {
        name: 'default pages',
        Icon: <RiPagesLine />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        label: 'Default Pages',
        itemid: 'default-pages',
        content: [
            {name: '404', label: '404'},
            {name: 'calendar', label: 'Calendar'},
            {name: 'faqs', label: 'FAQs'},
            {name: 'gallery', label: 'Gallery'},
            {name: 'invoice tempalte', label: 'Invoice temaplate'},
            {name: 'pricing card', label: 'Pricing Cards'},
            {name: 'project summary', label: 'Project Summary'},
            {name: 'search results', label: 'Search Results'},
            {name: 'text editor', label: 'Text Editor'},
        ]
    },

    {
        name: 'multilevel menu',
        Icon: <GiHamburgerMenu  />,
        Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        label: 'Multilevel Menu',
        itemid: 'multi-level-menu',
        content: [
            {name: 'second level item', label: 'Second Level item'},
            {name: 'second level item', label: 'Second Level item'},
           
        ]
    },

    {itemid: 'logout',name: 'logout', label: 'Log Out',Icon: <BiLogIn />},
    {itemid: 'documentation',name: 'documentation', label: 'Documentation',Icon: <TiDocumentText />}
]




export default sideItems;