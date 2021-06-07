import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';




 const SidebarData = [
    {
        title: 'OverView',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Profiles',
                path: '/overview/profile',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },

    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports 1',
                path: '/reports/reports-1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports-2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports3',
                path: '/reports/reports-3',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Team',
        path: '/team',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: 'Support',
        path: '/supports',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },

    {
        title: 'Message',
        path: '/message',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Notifications ',
                path: '/Message/notifications',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Mails',
                path: '/message/mails',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },

]

export default SidebarData;

