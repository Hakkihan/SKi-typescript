
/**
* This is a wrapper class around the canvas, which allows for overlays of elements.
* Overlay elements can include instructions, scores etc. This idea can be extended  
* to even adding title screens to the game
*/

// export class CanvasWrapper {
//     wrapper: HTMLElement;
//     canvasId: string;
//     score: number;
//     menuDisplay: HTMLElement | null = null;

//     constructor(canvasId: string, width: number, height: number) {
//         this.canvasId = canvasId;
//         this.wrapper = this.createWrapperOverlay(width, height);
//         this.score = 0;
//     }

//     /**
//      * Create a wrapper for the canvas HTML element to bind to
//      */
//     createWrapperOverlay(width: number, height: number): HTMLElement {
//         let wrapper = document.getElementById(`${this.canvasId}-wrapper`);
//         if (!wrapper) {
//             wrapper = document.createElement("div");
//             wrapper.id = `${this.canvasId}-wrapper`;
//             wrapper.style.position = "relative";
//             wrapper.style.width = width + "px";
//             wrapper.style.height = height + "px";
//             wrapper.style.display = "inline-block";
//             document.body.appendChild(wrapper);
//         }
//         return wrapper;
//     }

//     /**
//      * Add or update the overlay with meny including a time-based score
//      */
//     addMenuOverlay() {
//         if (!this.menuDisplay) {
//             this.menuDisplay = document.createElement("div");
//             this.menuDisplay.id = "instructions-display";
//             this.menuDisplay.style.position = "absolute";
//             this.menuDisplay.style.top = "10px";
//             this.menuDisplay.style.left = "10px";
//             this.menuDisplay.style.color = "blue"; // Ensure text is visible
//             this.menuDisplay.style.fontFamily = "Monospace";
//             this.menuDisplay.style.fontSize = "16px";
//             this.menuDisplay.style.lineHeight = "1.5";
//             this.menuDisplay.style.zIndex = "10"; // Ensure it's on top of the canvas

//             // Append the instructions display to the wrapper
//             this.wrapper.appendChild(this.menuDisplay);
//         }

//         // Initial instructions text with SCORE
//         this.updateOverlay();

//         // Update SCORE dynamically every second
//         if (!this.menuDisplay.dataset.updatingScore) {
//             this.menuDisplay.dataset.updatingScore = "true"; // Mark as updating
//             setInterval(() => {
//                 this.score += 100; // Increment score by 100
//                 this.updateOverlay(); // Update the displayed score
//             }, 1000);
//         }
//     }

//     /**
//      * Update the overlay text with the current score
//      */
//     updateOverlay() {
//         if (this.menuDisplay) {
//             this.menuDisplay.innerHTML = `
//                 <strong>Controls:</strong><br>
//                 SPACE: Jump<br>
//                 M: Toggle Music<br>
//                 R: Restart<br><br>
//                 SCORE: ${this.score}
//             `;
//         }
//     }

//     /**
//      * Reset the overlay text and score to the initial state
//      */
//     resetOverlay() {
//         this.score = 0; // Reset score to 0
//         this.updateOverlay(); // Update the overlay with the reset score
//     }

//     removeOverlay() {
//         if (this.menuDisplay) {
//             console.log("Removing overlay...");
//             this.menuDisplay.remove();
//             this.menuDisplay = null;
//             console.log("Overlay removed.");
//         } else {
//             console.log("No overlay to remove.");
//         }
//         this.score = 0; // Reset score
//     }

// }

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

        // Initial instructions text with SCORE
        this.updateOverlay();
    }

    /**
     * Start updating the score every second
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
     * Reset the overlay text and score to the initial state
     */
    resetOverlay() {
        this.score = 0; // Reset score to 0
        this.updateOverlay(); // Update the overlay with the reset score
    }

    /**
     * Remove the overlay entirely and reset the score
     */
    removeOverlay() {
        if (this.menuDisplay) {
            this.menuDisplay.remove();
            this.menuDisplay = null;
        } else {
            console.log("No overlay to remove.");
        }
        // this.stopScoreUpdater(); // Stop updating the score
        // this.score = 0; // Reset score
    }
}

