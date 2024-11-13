import v0 from '../assets/v0logo.png'
import me from '../assets/me.jpg'

export const constant = {
     API_URI:'https://brainbox-api.vercel.app',
     BACKGROUND:`    Here’s a funny and quirky background for Brainbox:
     "Introducing Brainbox – the world’s first brain extension service that allows you to upgrade your mind from 1GB to a whopping 1TB! Ever feel like your brain’s storage is running low? Can’t remember where you left your keys? Well, worry no more! With Brainbox, you can supercharge your mental capacity with the latest in brain-tech upgrades. Whether you’re storing new trivia, creative ideas, or that one cat video you can’t stop watching, we’ve got you covered.
      Powered by Node.js on the backend (because even brains need a solid foundation), and React/Vite on the frontend for a sleek, lightning-fast user experience, Brainbox makes upgrading your mind as easy as clicking a button. And for those wondering, we do offer premium upgrades with a built-in AI assistant who’s always there to remind you that you really shouldn’t have eaten that extra slice of pizza. So go ahead, give your brain the storage it deserves – no more mental clutter or forgotten passwords. Brainbox: Where the only thing that gets limited is your imagination. 😎🧠🚀"
        Now you’ve got an app that not only upgrades brains but does it in style!`,
    NAV_LINK:{
        SHOP:'BrainBox',
        HOME:'Home',
        PRODUCT:'Product',
        CATEGORIES:'Categories',
        ABOUT:'About',
        DISCOVER:'Discover your Brain',
        DESCRIPTION:'Why buy a brain when you can upgrade your own? 💡💾 Brainbox: Because who needs shopping when you can just develop your own personal brain chip and sell it for personal projects. Remember, the only limit to your brain’s capacity is the number of coffee refills you’re willing to consume. ☕🚀 So, code on, fellow developers—your brain is your greatest hardware!',
        SHOP_NOW:'Shop Now',
        BROWSE_CATEGORIES:'Browse Categories'
    },
     DESCRIPTION:`   "Introducing Brainbox – a wild mix of my genius and a dash of AI magic. The backend? Built entirely with Node.js, powered by the endless possibilities of my own mind (or at least, that's what I tell myself). For the frontend, I whipped up a sleek experience with React and Vite, because who doesn’t love something fast and responsive? And just when I thought I could do it all myself, I decided to bring in a little help from my AI buddy. It’s like having an over-caffeinated sidekick who knows all the best code snippets. The result? A powerful app that might just be smarter than me – but don’t tell anyone. 😎🚀"`,
    HELLO:"Hello, We are your developer",
    ABOUT_US:"About us",
    ABOUT_US_DES:'Unveiling the Journey of a Passionate Designer',
    MEET:'Meet the team',
    PRODUCTS:{
       ADDTOCART:'Add to Cart'
    },
    FOOTER:{
        CRED:'@ 2024 BrainBox. All rights reserved.',
        TERMS:'Terms',
        PRIVACRY:'Privacy',
        CONTACT:'Contact'
    },
}
export const memberteam = [
    {
        name: "Jan-Micko",
        img: me,
        role: "Backend Developer",
        description: "A backend developer who’s like a digital wizard – conjuring up APIs and databases with the power of ChatGPT... and maybe a little coffee magic. 🧙‍♂️✨"
    },
    {
        name: "V0",
        role: "Frontend Developer",
        img: v0,
        description: "Frontend developer by day, AI whisperer by night. Crafting pixel-perfect UIs with a sprinkle of React and a whole lot of AI love. ⚡👾"
    }
];

export const termsAndConditions = {
    title: "Terms and Conditions",
    intro: "By accessing and using this website, you agree to be bound by the terms and conditions set forth below.",
    sections: [
        {
            title: "1. Use of the Site",
            content: "You may access the website pages solely for your personal, non-commercial use."
        },
        {
            title: "2. Intellectual Property",
            content: "All content on this website is protected by copyright."
        },
        {
            title: "3. Limitation of Liability",
            content: "We are not liable for any damages arising from the use of the website."
        }
    ]
};

export const privacyPolicy = {
    title: "Privacy Policy",
    intro: "Your privacy is important. Please read our policy to understand how we collect and use your information.",
    sections: [
        {
            title: "1. Information Collection",
            content: "We collect information you provide directly to us."
        },
        {
            title: "2. Use of Information",
            content: "We may use the information to improve our services."
        },
        {
            title: "3. Sharing of Information",
            content: "We do not share your information with third parties without your consent."
        }
    ]
};
