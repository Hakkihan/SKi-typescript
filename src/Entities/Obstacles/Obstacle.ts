/**
 * An obstacle that appears on the mountain. Randomly created as one of the types defined in the OBSTACLE_TYPES array.
 */

import { IMAGE_NAMES, OBSTACLE_PROPERTIES } from "../../Constants";
import { Canvas } from "../../Core/Canvas";
import { ImageManager } from "../../Core/ImageManager";
import { randomInt } from "../../Core/Utils";
import { iObstacleProperties } from "../../Interfaces/iObstacleProperties";
import { Entity } from "../Entity";

/**
 * The different types of obstacles that can be placed in the game.
 */
const OBSTACLE_TYPES: IMAGE_NAMES[] = [
    IMAGE_NAMES.TREE,
    IMAGE_NAMES.TREE_CLUSTER,
    IMAGE_NAMES.ROCK1,
    IMAGE_NAMES.ROCK2,
    IMAGE_NAMES.JUMP_RAMP,
    IMAGE_NAMES.MUDDY_TERRAIN,
    IMAGE_NAMES.SPEED_BOOST
];


/**
 * Mapping the properties from the constants for faster retrieval compute performance/time
 */
const OBSTACLE_PROPERTIES_MAP = new Map(
    OBSTACLE_PROPERTIES.map((property) => [property.name, property])
)

export class Obstacle extends Entity {
    /**
     * The name of the current image being displayed for the obstacle.
     */
    imageName: IMAGE_NAMES;
    obstacleProperties : iObstacleProperties;

    /**
     * Initialize an obstacle and make it a random type. Also fetch the associated object properties
     */
    constructor(x: number, y: number, imageManager: ImageManager, canvas: Canvas) {
        super(x, y, imageManager, canvas);

        const typeIdx = randomInt(0, OBSTACLE_TYPES.length - 1);
        this.imageName = OBSTACLE_TYPES[typeIdx];
        this.obstacleProperties = OBSTACLE_PROPERTIES_MAP.get(this.imageName)  as iObstacleProperties
    }

    /**
     * Obstacles can't be destroyed
     */
    die() {}
}
