import notification from '../assets/notification.png';
import notification_active from '../assets/notification_active.png';
import message from '../assets/message.png';
import message_active from '../assets/message_active.png';
import profile_img from '../assets/profile_img.png';
import search from '../assets/search.png';
import post_img1 from '../assets/posts/img1.png';
import post_img2 from '../assets/posts/img2.png';
import post_img3 from '../assets/posts/img3.png';
import base_search from '../assets/base/search.png';
import block_img1 from '../assets/base/img1_payments.png';
import block_img2 from '../assets/base/img2_quest.png';
import block_img3 from '../assets/base/img3_ref.png';
import block_img4 from '../assets/base/img4_trans.png';
import block_img5 from '../assets/base/img5_plan.png';
import block_img6 from '../assets/base/img6_purch.png';
import list from '../assets/base/list.png';
import settings from '../assets/base/settings.png';
import send from '../assets/send.png';
import likeBtn from '../assets/posts/like.png';
import dislikeBtn from '../assets/posts/dislike.png'

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

    homepage: {
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
                img: post_img1,
                like: 10,
                like_btn: likeBtn,
                dislike_btn: dislikeBtn
            },
            {
                id: 2,
                user: "Fsd Gsc",
                time: "30 minutes ago",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque est excepturi illo perspiciatis reiciendis repudiandae saepe similique veniam.",
                img: post_img2,
                like: 3,
                like_btn: likeBtn,
                dislike_btn: dislikeBtn
            },
            {
                id: 3,
                user: "Lsdvc Gsd",
                time: "1 hour ago",
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque est excepturi illo perspiciatis reiciendis repudiandae saepe similique veniam.",
                img: post_img3,
                like: 24,
                like_btn: likeBtn,
                dislike_btn: dislikeBtn
            }
        ]
    },

    knowledge_base_page: {
        menu: {
            header: "Help Center",
            input: "Search the documentation...",
            search_img: base_search,
            search_btn: "search",
            nav1: "Analytics",
            nav2: "Popular Questions",
            nav3: "Purchase & Refund"
        },

        allBase: {
            blocks1: [
                {
                    id: 1,
                    img: block_img1,
                    header: "Introduction",
                    row1: "Sed ut perspiciatis",
                    row2: "Sed ut perspiciatis",
                    row3: "Sed ut perspiciatis",
                    list_img: list
                },
                {
                    id: 2,
                    img: block_img2,
                    header: "FAQs",
                    row1: "Sed ut perspiciatis",
                    row2: "Sed ut perspiciatis",
                    row3: "Sed ut perspiciatis",
                    list_img: list
                },
                {
                    id: 3,
                    img: block_img3,
                    header: "Other",
                    row1: "Sed ut perspiciatis",
                    row2: "Sed ut perspiciatis",
                    row3: "Sed ut perspiciatis",
                    list_img: list
                },
                {
                    id: 4,
                    img: block_img4,
                    header: "Business",
                    row1: "Sed ut perspiciatis",
                    row2: "Sed ut perspiciatis",
                    row3: "Sed ut perspiciatis",
                    list_img: list
                },
                {
                    id: 5,
                    img: settings,
                    header: "Setup",
                    row1: "Sed ut perspiciatis",
                    row2: "Sed ut perspiciatis",
                    row3: "Sed ut perspiciatis",
                    list_img: list
                },
                {
                    id: 6,
                    img: block_img6,
                    header: "Pre-sale",
                    row1: "Sed ut perspiciatis",
                    row2: "Sed ut perspiciatis",
                    row3: "Sed ut perspiciatis",
                    list_img: list
                },
            ],

            blocks2: [
                {
                    id: 1,
                    img: block_img1,
                    header: "Development",
                    row1: "Li Europan lingues",
                    row2: "Li Europan lingues",
                    row3: "Li Europan lingues",
                    list_img: list
                },
                {
                    id: 2,
                    img: block_img2,
                    header: "Forum",
                    row1: "Li Europan lingues",
                    row2: "Li Europan lingues",
                    row3: "Li Europan lingues",
                    list_img: list
                },
                {
                    id: 3,
                    img: block_img3,
                    header: "Documents",
                    row1: "Li Europan lingues",
                    row2: "Li Europan lingues",
                    row3: "Li Europan lingues",
                    list_img: list
                },
                {
                    id: 4,
                    img: block_img4,
                    header: "Marketing",
                    row1: "Li Europan lingues",
                    row2: "Li Europan lingues",
                    row3: "Li Europan lingues",
                    list_img: list
                },
                {
                    id: 5,
                    img: settings,
                    header: "Configuration",
                    row1: "Li Europan lingues",
                    row2: "Li Europan lingues",
                    row3: "Li Europan lingues",
                    list_img: list
                },
                {
                    id: 6,
                    img: block_img6,
                    header: "Commerce",
                    row1: "Li Europan lingues",
                    row2: "Li Europan lingues",
                    row3: "Li Europan lingues",
                    list_img: list
                },
            ],

            blocks3: [
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
        }
    },

    messages_page: {
        messages: [
            {
                id: 1,
                path: "/messages/Fsdf-Rfd",
                user: "Fsdf Rfd",
                img: post_img1,
                history: [
                    {
                        from_001: "Hii!",
                        from_002: "Lorem",
                        from_003: "Lorem",
                        to_001: "Hello!",
                        to_002: "LOREM?",
                        to_003: "Loooorem:)",
                    }
                ]
            },
            {
                id: 2,
                user: "Gsd Gsdc",
                path: "/messages/Gsd-Gsdc",
                img: post_img2,
                history: [
                    {
                        from_001: "ER",
                        from_002: "DSCX!",
                        from_003: "YEV",
                        to_001: "dvm ksx?",
                        to_002: "klmv",
                        to_003: "mkldsvl!!"
                    }
                ]
            },
            {
                id: 3,
                user: "Fsdv Jsdvc",
                path: "/messages/Fsdv-Jsdvc",
                img: post_img3,
                history: [
                    {
                        from_001: "Jdfv",
                        from_002: "Hsdc dcv",
                        from_003: "DFVSDV sdfgsgerg",
                        to_001: "dkv ll",
                        to_002: "sdevmewv;aio;wevmng;ienrov njkfkejwnf jn jkdvcewkj",
                        to_003: "efc"
                    }
                ]
            }
        ],

        create_message: {
            input: "Write your message",
            send_img: send
        },

        chooseChat: {
            text: "Choose Chat"
        }
    }


}

export default state