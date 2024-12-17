import { CanvasWrapper } from '../Core/CanvasWrapper';  // Import the class
import '@testing-library/jest-dom'; // Import this for jest-dom matchers

describe('CanvasWrapper', () => {
  let canvasWrapper: CanvasWrapper;

  beforeEach(() => {
    // Mocking the body and document.createElement method for testing DOM manipulations
    document.body.innerHTML = '';
    canvasWrapper = new CanvasWrapper('testCanvas', 800, 600);
  });

  test('should create wrapper element and append to the body', () => {
    const wrapper = document.getElementById('testCanvas-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.style.width).toBe('800px');
    expect(wrapper?.style.height).toBe('600px');
    expect(wrapper?.style.position).toBe('relative');
  });

  test('should add menu overlay with initial score of 0', () => {
    canvasWrapper.addMenuOverlay();
    const overlay = document.getElementById('instructions-display');
    expect(overlay).toBeInTheDocument();
    expect(overlay?.innerHTML).toContain('SCORE: 0');
  });

  test('should update the score every second', async () => {
    jest.useFakeTimers();  // Use fake timers to control time-based functions
  
    // Add the menu overlay before starting the score update
    canvasWrapper.addMenuOverlay();
  
    canvasWrapper.startScoreUpdater();  // Start the score updater
  
    // Advance timers by 1 second (to trigger the interval)
    jest.advanceTimersByTime(1000);
    expect(canvasWrapper.score).toBe(100); // Score should be 100 after 1 second
  
    jest.useRealTimers();  // Restore real timers after the test
  });
  
});
