
        // 1. Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 2. Typing Animation (Reused logic)
        const words = ["Student", "Web Developer", "Designer", "Musician"];
        let i = 0;
        let timer;

        function typeWriter() {
            const element = document.getElementById("typing-text");
            const word = words[i];
            const currentText = element.textContent;
            const isDeleting = element.classList.contains("deleting");

            if (!isDeleting) {
                // Typing
                element.textContent = word.substring(0, currentText.length + 1);
                if (element.textContent === word) {
                    element.classList.add("deleting");
                    timer = setTimeout(typeWriter, 2000); // Pause at end of word
                    return;
                }
            } else {
                // Deleting
                element.textContent = word.substring(0, currentText.length - 1);
                if (element.textContent === "") {
                    element.classList.remove("deleting");
                    i = (i + 1) % words.length; // Next word
                }
            }

            const speed = isDeleting ? 50 : 100;
            timer = setTimeout(typeWriter, speed);
        }

        // Start animation on load
        document.addEventListener('DOMContentLoaded', typeWriter);
