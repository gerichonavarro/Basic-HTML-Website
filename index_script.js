document.addEventListener("DOMContentLoaded", function () {
    // Sticky header and scroll-to-top button
    const header = document.querySelector("header nav");
    const scrollButton = document.createElement("button");
    scrollButton.classList.add("scroll-to-top");
    scrollButton.innerHTML = "↑";
    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
            scrollButton.style.display = "block";
        } else {
            header.classList.remove("sticky");
            scrollButton.style.display = "none";
        }
    });

    // Make the profile image clickable to open full size with a back button
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("click", function () {
        const fullSizeWindow = window.open("", "_blank", "width=600,height=600");

        // Set up the content of the new window
        fullSizeWindow.document.write(`
            <html>
                <head>
                    <title>Profile Picture</title>
                    <style>
                        body {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            background-color: #f0f0f0;
                        }
                        img {
                            max-width: 100%;
                            max-height: 90%;
                            display: block;
                        }
                        .exit-button {
                            position: absolute;
                            top: 10px;
                            left: 10px;
                            padding: 10px;
                            background-color: rgba(0, 0, 0, 0.5);
                            color: white;
                            border: none;
                            cursor: pointer;
                            font-size: 16px;
                            border-radius: 5px;
                        }
                        .exit-button:hover {
                            background-color: rgba(0, 0, 0, 0.8);
                        }
                    </style>
                </head>
                <body>
                    <button class="exit-button" onclick="window.close()">Back</button>
                    <img src="${profilePic.src}" alt="Profile Picture">
                </body>
            </html>
        `);
    });

    // Scroll-to-top functionality
    scrollButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
