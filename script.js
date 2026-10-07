// Opening screen
function openSurprise() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    window.scrollTo(0, 0);
}


// Love counter
let loveCount = 0;

function showLove() {
    loveCount++;

    const loveText = document.getElementById("loveText");

    const messages = [
        "Thoda sa... ❤️",
        "Thoda aur... 🥰",
        "Bahut zyada... 💗",
        "Bohottttt zyada... 😭❤️",
        "Itna ki count hi nahi hota... ♾️💕",
        "Bas samajh lo... bahut bahut bahut pyaar hai! ❤️"
    ];

    loveText.innerText = messages[Math.min(loveCount - 1, messages.length - 1)];
}


// My nicknames for Santosh
const myNicknames = [
    "Sir ji ❤️",
    "Mister ji 😌",
    "Mera baccha 🥺",
    "Husband ji 💍",
    "Patidev ji 😂",
    "Balam ji ❤️",
    "Kareja 💗",
    "Meri jaan 🥰",
    "Mera baby 🫶",
    "Sweetheart 💕"
];

let myNicknameIndex = 0;

function nextMyNickname() {
    document.getElementById("myNicknames").innerText =
        myNicknames[myNicknameIndex];

    myNicknameIndex++;

    if (myNicknameIndex >= myNicknames.length) {
        myNicknameIndex = 0;
    }
}


// Santosh's nicknames for me
const hisNicknames = [
    "Wifey ❤️",
    "Kareja 🥺",
    "Bacha 💗",
    "Baby 🫶",
    "Kuchu puchu 😂",
    "Sweetheart 💕",
    "Darling 🥰",
    "Mera baccha ❤️"
];

let hisNicknameIndex = 0;

function nextHisNickname() {
    document.getElementById("hisNicknames").innerText =
        hisNicknames[hisNicknameIndex];

    hisNicknameIndex++;

    if (hisNicknameIndex >= hisNicknames.length) {
        hisNicknameIndex = 0;
    }
}


// Surprise buttons
const surprises = [
    "Oye Sir ji! Tum mere liye bahut special ho. ❤️",
    "Hamari kahani ek copy se shuru hui thi... aur dekho kahan aa gayi. 😂💕",
    "14 August ki yaad mere liye hamesha special rahegi. 🥺❤️",
    "Hum kitna bhi lad lein, tumhari care mujhe hamesha yaad rehti hai. 💗",
    "Tumhare diye hue nicknames bhi meri favourite cheezon mein se hain. 😂❤️",
    "Mujhe khud nahi pata kab tum itne special ban gaye. 🥰",
    "Mere Sir ji, tumhare liye ye chhota sa surprise tha. 💕"
];

function showSurprise(number) {
    document.getElementById("surpriseMessage").innerText =
        surprises[number - 1];
}


// Start with main content hidden
document.getElementById("mainContent").style.display = "none";

// Gift surprise
function openGift() {
    document.getElementById("giftPopup").style.display = "flex";
}

function closeGift() {
    document.getElementById("giftPopup").style.display = "none";
}

function openGiftMessage() {
    document.getElementById("giftText").innerText =
        "Sir ji, mujhe nahi pata kab tum meri life ka itna important part ban gaye... bas itna pata hai ki tumhari yaadein mere liye bahut special hain. ❤️🥺";

    document.querySelector(".big-gift").innerText = "💖";
}