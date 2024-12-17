import { Skier } from '../Entities/Skier';
import { ObstacleManager } from '../Entities/Obstacles/ObstacleManager';
import { CanvasWrapper } from '../Core/CanvasWrapper';
import { ImageManager } from '../Core/ImageManager';
import { Canvas } from '../Core/Canvas';
import { KEYS, IMAGE_NAMES } from '../Constants';
import { Obstacle } from '../Entities/Obstacles/Obstacle';
import { Rect } from '../Core/Utils';

jest.mock('../Core/CanvasWrapper');
jest.mock('../Core/ImageManager');
jest.mock('../Core/Canvas');
jest.mock('../Entities/Obstacles/ObstacleManager');
jest.mock('../../assets/audio/jump_sound.mp3', () => ({
    default: new Audio(), // Mocking the Audio constructor
}));
describe('Skier', () => {
    let skier: Skier;
    let obstacleManager: ObstacleManager;
    let canvasWrapper: CanvasWrapper;
    let imageManager: ImageManager;
    let canvas: Canvas;

    beforeEach(() => {
        // Create instances of the necessary dependencies
        imageManager = new ImageManager();
        canvas = new Canvas("testCanvasId", 800, 600);
        obstacleManager = new ObstacleManager(imageManager, canvas); // Provide the necessary arguments
        canvasWrapper = new CanvasWrapper("testWrapper", 800, 600);

        skier = new Skier(100, 100, imageManager, obstacleManager, canvas, canvasWrapper);
    });

    test('should initialize with correct values', () => {
        expect(skier.state).toBe('skiing');
        expect(skier.speed).toBe(10);
        expect(skier.height).toBe(0);
        expect(skier.direction).toBe(2);
        expect(skier.imageName).toBe(IMAGE_NAMES.SKIER_DOWN);
    });

    test('should update skier position based on direction', () => {
        skier.setDirection(2); // DIRECTION_DOWN
        skier.moveSkierDown = jest.fn();
        skier.move();
    
        expect(skier.moveSkierDown).toHaveBeenCalled();
    });

    test('should not crash when hitting an obstacle if height is greater than obstacle height', () => {
        const obstacle = { imageName: 'tree', obstacleProperties: { height: 1, speedMultiplier: 0.5 } } as Obstacle;
        skier.height = 2;
        obstacleManager.getObstacles = jest.fn().mockReturnValue([obstacle]);

        skier.checkIfHitObstacle();

        expect(skier.state).toBe('skiing');
        expect(skier.speed).toBe(10);
    });

    test('should handle left turn input', () => {
        skier.handleInput(KEYS.LEFT);

        expect(skier.direction).toBe(1); // DIRECTION_LEFT_DOWN
    });

    test('should handle right turn input', () => {
        skier.handleInput(KEYS.RIGHT);

        expect(skier.direction).toBe(3); // DIRECTION_RIGHT_DOWN
    });

    test('should jump when spacebar is pressed', () => {
        skier.height = 0; // skier on the ground
    
        // Create a mock class for HTMLAudioElement
        class MockAudioElement extends Audio {
            play = jest.fn().mockResolvedValueOnce(undefined);  // Mock the play method
        }
    
        // Replace the jumpSound with the mock
        skier.jumpSound = new MockAudioElement();
    
        // Spy on playAnimation to ensure it gets called during the jump
        const jumpAnimationSpy = jest.spyOn(skier, 'playAnimation');
    
        // Simulate pressing the spacebar
        skier.handleInput(KEYS.SPACE);
    
        // Ensure the jump animation is played
        expect(jumpAnimationSpy).toHaveBeenCalled();
        expect(skier.height).toBe(2); // Skier should be airborne
        expect(skier.jumpSound.play).toHaveBeenCalled(); // Ensure play() was called
    });
    

    test('should not jump if skier is airborne', () => {
        skier.height = 1; // skier already airborne
        const jumpAnimationSpy = jest.spyOn(skier, 'playAnimation');

        skier.handleInput(KEYS.SPACE);

        expect(jumpAnimationSpy).not.toHaveBeenCalled();
    });

    test('should die when die method is called', () => {
        skier.die();

        expect(skier.state).toBe('dead');
        expect(skier.speed).toBe(0);
        expect(canvasWrapper.stopScoreUpdater).toHaveBeenCalled();
    });

    test('should play jump animation', () => {
        // Create a mock class for HTMLAudioElement
        class MockAudioElement extends Audio {
            play = jest.fn().mockResolvedValueOnce(undefined);  // Mock the play method
        }
    
        // Replace the jumpSound with the mock
        skier.jumpSound = new MockAudioElement();
    
        const jumpAnimationSpy = jest.spyOn(skier, 'playAnimation');
        skier.jump();
    
        expect(jumpAnimationSpy).toHaveBeenCalled();
        expect(skier.height).toBe(2); // Skier should be airborne during jump
        expect(skier.jumpSound.play).toHaveBeenCalled(); // Ensure play() is called
    });
    
    
});
