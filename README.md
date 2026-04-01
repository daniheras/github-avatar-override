# GitHub Avatar Override (A joke for a friend)

This is a Chrome extension project created purely for humorous purposes. Its sole function is to replace the avatar of a specific GitHub user (in this case, FrancisDeea) with an image of my choice.

The idea is to play a prank on a friend, updating their "ugly" profile picture in my local browser every time I interact with them on GitHub.

**Warning!** This is just a harmless joke that only affects my browser. It does not modify the user's actual profile on GitHub.

## How it works

The extension injects a small JavaScript script (`content.js`) into GitHub pages. This script searches for all avatar images associated with the user `FrancisDeea` and replaces them with a predefined image (encoded in Base64 to avoid Content Security Policy issues).

## Installation (if you want to play a similar prank)

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/daniheras/github-avatar-override.git
    ```
2.  **Customize the image and user:**
    -   Open `content.js`.
    -   Change the `NUEVO_AVATAR_URL` image URL to your desired one.
    -   Change `USUARIO_OBJETIVO` to your friend's GitHub username.
3.  **Load the extension in Chrome/Edge/Brave:**
    -   Go to `chrome://extensions/` (or `edge://extensions/`).
    -   Enable "Developer mode".
    -   Click on "Load unpacked" and select this project's folder.
4.  **Enjoy the joke!**

---

**Note:** This project is a demonstration of how simple browser extensions can be created and has no malicious intent. Please use it responsibly and only with friends who have a good sense of humor!
