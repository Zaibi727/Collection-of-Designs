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
            { itemid: 'light-themed', name: 'light theme', label: 'Light Theme' },
            { itemid: 'dark-theme', name: 'dark theme', label: 'Dark Theme' },
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
            { itemid: 'alerts', name: 'light theme', label: 'Alerts' },
            { itemid: 'buttons', name: 'dark theme', label: 'Buttons' },
            { itemid: 'carousal', name: 'light theme', label: 'Carousel' },
            { itemid: 'collapse', name: 'dark theme', label: 'Collapse' },
            { itemid: 'grids', name: 'light theme', label: 'Grids' },
            {  itemid: 'modal', name: 'dark theme', label: 'Modal' },
            { itemid: 'notifications', name: 'light theme', label: 'Notifications' },
            { itemid: 'panels', name: 'dark theme', label: 'Panels' },
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
                { itemid: 'basic-form',name:'basic form', label: 'Basic Form'},
                { itemid: 'check-form',name:'check form', label: 'Check Form'},
                { itemid: 'file-upload',name:'file upload', label: 'File Upload'},
                { itemid: 'floating-tables',name:'floating labels form', label: ' Floating Form'},
                { itemid: 'form-dropzone',name:'Form DropZone', label: 'Form DropZone'},
                {itemid: 'form-layout', name:'Form Layout', label: 'Form Layout'},
                {itemid: 'form-picker', name:'form picker', label: 'Form Picker'},
                {itemid: 'form-validation', name:'form validation', label: 'Validation Form'},
                { itemid: 'mask-form',name:'mask form', label: 'Mask Form'},
                { itemid: 'material-form',name:'material form', label: 'Material Form'},
                {itemid: 'wizard-form', name:'Wizard form', label: 'Wizard Form'},
            ]
            },
         {name: 'hook form',
          label: 'Hook Form',
          itemid: 'hook-form',
          Icon2: <MdKeyboardArrowRight />,
        Icon3: <MdKeyboardArrowDown />,
        content: [
              {itemid: 'basic-form', name: 'basic form', label: 'Basic Form'},
              { itemid: 'form-validation', name: 'form validation', label: 'Form Validation'},
              {itemid: 'wizard-form', name: 'wizard form', label: 'Wizard Form'},
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
            {itemid: 'basic-table', name: 'basic table', label: 'Basic Table'},
              { itemid: 'data-table',name: 'data table', label: 'Data table'},
              {itemid: 'drag-&-drop-table', name: ' d and d table', label: 'Drag & Drop table'},
              {itemid: 'editable-table', name: 'editable table', label: 'Editable table'},
              {itemid: 'material-table', name: 'material table', label: 'Material Table'},
              {itemid: 'resize-table', name: 'resizeable table', label: 'Width resizable table'},
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
            {itemid: 'chart-js', name: 'chart-js', label: 'Charts Js'},
              {itemid: 'react-vis', name: 'React-viz', label: 'React-vis'},
              {itemid: 'recharts', name: 'recharts', label: 'Recharts'},
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
              {itemid: 'google-map', name: 'google map', label: 'Google map'},
              {itemid: 'vector-map', name: 'React-viz', label: 'Vector map'},
              {itemid: 'map-with-api', name: 'map with api', label: 'Map with api request'},
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
            {itemid: 'email-confirmation', name: 'email confim', label: 'Email Confirmation'},
            {itemid: 'lock-screen', name: 'lock screen', label: 'Lock Screen'},
            {itemid: 'log-in-photo', name: 'log in photo', label: 'Log In Photo'},
            {itemid: 'profile', name: 'profile', label: 'Profile'},
            {itemid: 'register',name: 'register', label: 'Register'},
            {itemid: 'register-photo', name: 'register photo', label: 'Register Photo'},
            {itemid: 'reset-password', name: 'reset password', label: 'Reset Password'},
            {itemid: 'reset-password-photo', name: 'reset pssword photo', label: 'Reset Password Photo'},
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
            {itemid: 'cart', name: 'cart', label: 'Cart'},
            {itemid:'catalog', name: 'catalog', label: 'Catalog'},
            {itemid: 'order-list', name: 'oeder list', label: 'Orders List'},
            {itemid: 'payment', name: 'payment', label: 'Payment'},
            {itemid: 'product-edit', name: 'product edit', label: 'Product Edit'},
            {itemid: 'product-page', name: 'product page', label: 'Product Page'},
            {itemid: 'product-list', name: 'product list', label: 'Product List'},
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
            {itemid: '404', name: '404', label: '404'},
            {itemid: 'calendar', name: 'calendar', label: 'Calendar'},
            {itemid: 'faqs', name: 'faqs', label: 'FAQs'},
            {itemid: 'gallery', name: 'gallery', label: 'Gallery'},
            {itemid: 'invoice temaplate', name: 'invoice tempalte', label: 'Invoice temaplate'},
            {itemid: 'pricing-cards', name: 'pricing card', label: 'Pricing Cards'},
            {itemid: 'project-summary', name: 'project summary', label: 'Project Summary'},
            {itemid: 'search-result', name: 'search results', label: 'Search Results'},
            {itemid: 'text-editor', name: 'text editor', label: 'Text Editor'},
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
            {itemid: 'second-level-item', name: 'second level item', label: 'Second Level item'},
            {itemid: 'second-level-item', name: 'second level item', label: 'Second Level item'},
           
        ]
    },

    {itemid: 'logout',name: 'logout', label: 'Log Out',Icon: <BiLogIn />},
    {itemid: 'documentation',name: 'documentation', label: 'Documentation',Icon: <TiDocumentText />}
]




export default sideItems;