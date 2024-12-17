import { Rhino } from "../Entities/Rhino";
import { STATES } from "../Entities/Rhino";
import { Canvas } from "../Core/Canvas";
import { ImageManager } from "../Core/ImageManager";

jest.mock("../Core/Canvas", () => {
    return {
        Canvas: jest.fn().mockImplementation((canvasId: string, width: number, height: number) => ({
            canvasId,
            width,
            height,
            drawImage: jest.fn(),
            clear: jest.fn(),
        })),
    };
});
jest.mock("../Core/ImageManager", () => {
    return {
        ImageManager: jest.fn().mockImplementation(() => ({
            loadImage: jest.fn(), // Mock the loadImage method
        })),
    };
});
jest.mock("../Core/Utils", () => {
    return {
        intersectTwoRects: jest.fn(),
        getDirectionVector: jest.fn(() => ({ x: 1, y: 0 })), // Mock movement direction
        Position: jest.fn().mockImplementation((x, y) => ({ x, y })), // Mock Position class
    };
});
jest.mock("../Core/Animation", () => {
    return {
        Animation: jest.fn().mockImplementation((images, looping, callback) => {
            const mock = {
                images,
                looping,
                callback,
                getImages: jest.fn(() => images),
                getLooping: jest.fn(() => looping),
                getCallback: jest.fn(() => callback),
            };
            return mock;
        }),
    };
});
jest.mock("../Core/ImageManager", () => {
    return {
        ImageManager: jest.fn().mockImplementation(() => ({
            loadImage: jest.fn(), // Mock the loadImage method
            getImage: jest.fn(() => ({ width: 100, height: 100 })), // Mock the getImage method (adjust as necessary)
        })),
    };
});
jest.mock("../Core/Utils", () => {
    return {
        intersectTwoRects: jest.fn(),
        getDirectionVector: jest.fn((startX, startY, targetX, targetY) => {
            const dx = targetX - startX;
            const dy = targetY - startY;
            const magnitude = Math.sqrt(dx * dx + dy * dy);
            return {
                x: dx / magnitude,  // Normalize to get a unit vector
                y: dy / magnitude,
            };
        }),
        Position: jest.fn().mockImplementation((x, y) => ({ x, y })), // Mock Position class
        Rect: jest.fn().mockImplementation((x, y, width, height) => ({
            x, y, width, height
        })), // Mock the Rect constructor
    };
});


describe("Rhino", () => {
    let rhino: Rhino;
    let mockCanvas: Canvas;
    let mockImageManager: ImageManager;

    beforeEach(() => {
        mockCanvas = new Canvas("testCanvasId", 800, 600);
        mockImageManager = new ImageManager();

        rhino = new Rhino(0, 0, mockImageManager, mockCanvas);

        // Manually set the current animation to simulate the condition
        rhino.curAnimation = rhino.animations[STATES.STATE_CELEBRATING];

    });

    test("should initialize with correct default properties", () => {
        expect(rhino.imageName).toBe("rhinoRun1"); // Replace "RHINO" with the corresponding value from IMAGE_NAMES
        expect(rhino.state).toBe(STATES.STATE_RUNNING);
        expect(rhino.speed).toBe(9.5); // STARTING_SPEED
        expect(rhino.curAnimation).not.toBeNull();
    });

    test("should set state and update animation", () => {
        rhino.setState(STATES.STATE_EATING);

        expect(rhino.state).toBe(STATES.STATE_EATING);
        expect(rhino.curAnimation).toBe(rhino.animations[STATES.STATE_EATING]);
    });

    test("should move towards the target when in running state", () => {
        const target = new Rhino(100, 100, mockImageManager, mockCanvas); // Mock target
        const initialPosition = { ...rhino.position }; // Store initial position

        // Simulate movement
        rhino.update(Date.now(), target);

        // Check if the position has updated (should be closer to the target)
        expect(rhino.position.x).not.toBe(initialPosition.x);
        expect(rhino.position.y).not.toBe(initialPosition.y); // Ensure movement along the y-axis
    });


});
