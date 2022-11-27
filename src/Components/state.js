import notification from './assets/notification.png';
import notification_active from './assets/notification_active.png';
import message from './assets/message.png';
import message_active from './assets/message_active.png';
import profile_img from './assets/profile_img.png';
import search from './assets/search.png';
import post_img1 from './assets/posts/img1.png';
import post_img2 from './assets/posts/img2.png';
import post_img3 from './assets/posts/img3.png';
import base_search from './assets/base/search.png';
import block_img1 from './assets/base/img1_payments.png';
import block_img2 from './assets/base/img2_quest.png';
import block_img3 from './assets/base/img3_ref.png';
import block_img4 from './assets/base/img4_trans.png';
import block_img5 from './assets/base/img5_plan.png';
import block_img6 from './assets/base/img6_purch.png';
import list from './assets/base/list.png'

let state = {
    header: {
        notification: notification,
        notification_active: notification_active,
        message: message,
        message_active: message_active,
        input: "Start typing to search...",
        user: "Alex",
        greating: `Hi, `,
        profile_img: profile_img,
        search_img: search
    },

    navbar: {
        knowledge_base: "Knowledge Base",
        messages: "Messages",
        members: "Members",
        groups: "Groups",
        home: "Home"
    },

    newpost: {
        header: "What's new, ",
        button: "POST UPDATE"
    },

    posts: [
        {
            id: 1,
            user: "Serf Eaef",
            time: "10 minutes ago",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque est excepturi illo perspiciatis reiciendis repudiandae saepe similique veniam.",
            img: post_img1
        },
        {
            id: 2,
            user: "Fsd Gsc",
            time: "30 minutes ago",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque est excepturi illo perspiciatis reiciendis repudiandae saepe similique veniam.",
            img: post_img2
        },
        {
            id: 3,
            user: "Lsdvc Gsd",
            time: "1 hour ago",
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque est excepturi illo perspiciatis reiciendis repudiandae saepe similique veniam.",
            img: post_img3
        }
    ],

    menu: {
        header: "Help Center",
        input: "Search the documentation...",
        search_img: base_search,
        search_btn: "search",
        nav1: "Analytics",
        nav2: "Popular Questions",
        nav3: "Purchase & Refund"
    },

    blocks: [
        {
            id: 1,
            img: block_img1,
            header: "Payments",
            row1: "Lorem ipsum dolor sit.",
            row2: "Lorem ipsum dolor sit.",
            row3: "Lorem ipsum dolor sit.",
            list_img: list
        },
        {
            id: 2,
            img: block_img2,
            header: "Common Questions",
            row1: "Lorem ipsum dolor sit.",
            row2: "Lorem ipsum dolor sit.",
            row3: "Lorem ipsum dolor sit.",
            list_img: list
        },
        {
            id: 3,
            img: block_img3,
            header: "Refunds & Cancellations",
            row1: "Lorem ipsum dolor sit.",
            row2: "Lorem ipsum dolor sit.",
            row3: "Lorem ipsum dolor sit.",
            list_img: list
        },
        {
            id: 4,
            img: block_img4,
            header: "Transactions",
            row1: "Lorem ipsum dolor sit.",
            row2: "Lorem ipsum dolor sit.",
            row3: "Lorem ipsum dolor sit.",
            list_img: list
        },
        {
            id: 5,
            img: block_img5,
            header: "A Monthly Usage Plan",
            row1: "Lorem ipsum dolor sit.",
            row2: "Lorem ipsum dolor sit.",
            row3: "Lorem ipsum dolor sit.",
            list_img: list
        },
        {
            id: 6,
            img: block_img6,
            header: "Purchase",
            row1: "Lorem ipsum dolor sit.",
            row2: "Lorem ipsum dolor sit.",
            row3: "Lorem ipsum dolor sit.",
            list_img: list
        },
    ],

    messages: [
        {
            id: 1,
            path: "messages/Fsdf-Rfd",
            user: "Fsdf Rfd",
            img: post_img1,
            history: {
                user1: "Hii!",
                answer1: "Hello!",
                user2: "Lorem",
                answer2: "LOREM?",
                user3: "Lorem",
                answer3: "Loooorem:)"
            }
        },
        {
            id: 2,
            user: "Gsd Gsdc",
            path: "messages/Gsd-Gsdc",
            img: post_img2,
            history: {
                user1: "ER",
                answer1: "DSCX!",
                user2: "YEV",
                answer2: "dvmksx?",
                user3: "klmv",
                answer3: "mkldsvl:)"
            }
        },
        {
            id: 3,
            user: "Fsdv Jsdvc",
            path: "messages/Fsdv-Jsdvc",
            img: post_img3,
            history: {
                user1: "Jdfv",
                answer1: "Hsdc dcv",
                user2: "DFVSDV",
                answer2: "dkv ll",
                user3: "sdevmewv;aio;wevmng;ienrov njkfkejwnf jn jkdvcewkj",
                answer3: "efc:)"
            }
        }
    ]


}

export default state