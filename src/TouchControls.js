export class TouchControls {
    constructor() {
        this.player1 = { x: 0, y: 0, swing: false };
        this.player2 = { x: 0, y: 0, swing: false };

        this.joystick1Active = false;
        this.joystick2Active = false;

        this.init();
    }

    init() {
        // Check if device supports touch
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (hasTouch) {
            // Show mobile controls
            const mobileControls = document.getElementById('mobile-controls');
            if (mobileControls) {
                mobileControls.style.display = 'block';
            }

            // Hide keyboard control instructions on mobile
            const controls = document.getElementById('controls');
            if (controls) {
                controls.style.display = 'none';
            }

            this.setupJoystick('joystick-p1', this.player1, 1);
            this.setupJoystick('joystick-p2', this.player2, 2);
            this.setupSwingButton('swing-p1', this.player1);
            this.setupSwingButton('swing-p2', this.player2);
        }
    }

    setupJoystick(joystickId, playerData, playerNum) {
        const joystick = document.getElementById(joystickId);
        if (!joystick) return;

        const inner = joystick.querySelector('.joystick-inner');
        const outer = joystick.querySelector('.joystick-outer');

        let touchId = null;
        const maxDistance = 35; // Maximum distance from center

        const handleStart = (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            touchId = touch.identifier;
            if (playerNum === 1) this.joystick1Active = true;
            else this.joystick2Active = true;
        };

        const handleMove = (e) => {
            e.preventDefault();
            if (touchId === null) return;

            const touch = Array.from(e.touches).find(t => t.identifier === touchId);
            if (!touch) return;

            const rect = outer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            let deltaX = touch.clientX - centerX;
            let deltaY = touch.clientY - centerY;

            // Calculate distance from center
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Limit to max distance
            if (distance > maxDistance) {
                const angle = Math.atan2(deltaY, deltaX);
                deltaX = Math.cos(angle) * maxDistance;
                deltaY = Math.sin(angle) * maxDistance;
            }

            // Update visual position
            inner.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;

            // Update player data (normalized -1 to 1)
            playerData.x = deltaX / maxDistance;
            playerData.y = -deltaY / maxDistance; // Invert Y axis
        };

        const handleEnd = (e) => {
            e.preventDefault();
            touchId = null;

            // Reset joystick position
            inner.style.transform = 'translate(-50%, -50%)';

            // Reset player data
            playerData.x = 0;
            playerData.y = 0;

            if (playerNum === 1) this.joystick1Active = false;
            else this.joystick2Active = false;
        };

        joystick.addEventListener('touchstart', handleStart, { passive: false });
        joystick.addEventListener('touchmove', handleMove, { passive: false });
        joystick.addEventListener('touchend', handleEnd, { passive: false });
        joystick.addEventListener('touchcancel', handleEnd, { passive: false });
    }

    setupSwingButton(buttonId, playerData) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        button.addEventListener('touchstart', (e) => {
            e.preventDefault();
            playerData.swing = true;
        }, { passive: false });

        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            playerData.swing = false;
        }, { passive: false });
    }

    // Convert touch input to keyboard-like controls
    getKeyboardState(existingKeyboard) {
        const keyboard = { ...existingKeyboard };

        // Player 1 controls
        if (Math.abs(this.player1.x) > 0.2 || Math.abs(this.player1.y) > 0.2) {
            if (this.player1.y > 0.3) keyboard['w'] = true;
            if (this.player1.y < -0.3) keyboard['s'] = true;
            if (this.player1.x < -0.3) keyboard['a'] = true;
            if (this.player1.x > 0.3) keyboard['d'] = true;
        }
        if (this.player1.swing) keyboard[' '] = true;

        // Player 2 controls
        if (Math.abs(this.player2.x) > 0.2 || Math.abs(this.player2.y) > 0.2) {
            if (this.player2.y > 0.3) keyboard['ArrowUp'] = true;
            if (this.player2.y < -0.3) keyboard['ArrowDown'] = true;
            if (this.player2.x < -0.3) keyboard['ArrowLeft'] = true;
            if (this.player2.x > 0.3) keyboard['ArrowRight'] = true;
        }
        if (this.player2.swing) keyboard['Enter'] = true;

        return keyboard;
    }
}
