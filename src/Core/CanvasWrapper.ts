export class CanvasWrapper {
    wrapper: HTMLElement;
    canvasId: string;
    score: number;
    menuDisplay: HTMLElement | null = null;
    private scoreInterval: number | null = null; // Store interval ID for clearing

    constructor(canvasId: string, width: number, height: number) {
        this.canvasId = canvasId;
        this.wrapper = this.createWrapperOverlay(width, height);
        this.score = 0;
    }

    /**
     * Create a wrapper for the canvas HTML element to bind to
     */
    createWrapperOverlay(width: number, height: number): HTMLElement {
        let wrapper = document.getElementById(`${this.canvasId}-wrapper`);
        if (!wrapper) {
            wrapper = document.createElement("div");
            wrapper.id = `${this.canvasId}-wrapper`;
            wrapper.style.position = "relative";
            wrapper.style.width = width + "px";
            wrapper.style.height = height + "px";
            wrapper.style.display = "inline-block";
            document.body.appendChild(wrapper);
        }
        return wrapper;
    }

    /**
     * Add or update the overlay with menu including a time-based score
     */
    addMenuOverlay() {
        if (!this.menuDisplay) {
            this.menuDisplay = document.createElement("div");
            this.menuDisplay.id = "instructions-display";
            this.menuDisplay.style.position = "absolute";
            this.menuDisplay.style.top = "10px";
            this.menuDisplay.style.left = "10px";
            this.menuDisplay.style.color = "blue";
            this.menuDisplay.style.fontFamily = "Monospace";
            this.menuDisplay.style.fontSize = "16px";
            this.menuDisplay.style.lineHeight = "1.5";
            this.menuDisplay.style.zIndex = "10";

            // Append the instructions display to the wrapper
            this.wrapper.appendChild(this.menuDisplay);
        }
        this.updateOverlay();
    }

    /**
     * Start updating the score every second. Can be modified for more 
     * creative scoring 
     */
    startScoreUpdater() {
        if (!this.scoreInterval) {
            this.scoreInterval = window.setInterval(() => {
                this.score += 100; // Increment score by 100
                this.updateOverlay(); // Update the displayed score
            }, 1000);
        }
    }

    /**
     * Stop the score updater
     */
    stopScoreUpdater() {
        if (this.scoreInterval !== null) {
            window.clearInterval(this.scoreInterval);
            this.scoreInterval = null;
        }
    }

    /**
     * Update the overlay text with the current score
     */
    updateOverlay() {
        if (this.menuDisplay) {
            this.menuDisplay.innerHTML = `
                <strong>Controls:</strong><br>
                SPACE: Jump<br>
                M: Toggle Music<br>
                R: Restart<br><br>
                SCORE: ${this.score}
            `;
        }
    }
    /**
     * Remove the overlay entirely and reset the score
     */
    removeOverlay() {
        if (this.menuDisplay) {
            this.menuDisplay.remove();
            this.menuDisplay = null;
        }
    }
}

