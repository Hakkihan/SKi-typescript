import { iImage } from "./Interfaces/iImage";
import { iObstacleProperties } from "./Interfaces/iObstacleProperties";

export const GAME_CANVAS = "skiCanvas";
export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export enum KEYS {
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown",
    SPACE = " "
}

export enum IMAGE_NAMES {
    SKIER_CRASH = "skierCrash",
    SKIER_LEFT = "skierLeft",
    SKIER_LEFTDOWN = "skierLeftDown",
    SKIER_DOWN = "skierDown",
    SKIER_RIGHTDOWN = "skierRightDown",
    SKIER_RIGHT = "skierRight",
    TREE = "tree",
    TREE_CLUSTER = "treeCluster",
    ROCK1 = "rock1",
    ROCK2 = "rock2",
    RHINO = "rhino",
    RHINO_RUN1 = "rhinoRun1",
    RHINO_RUN2 = "rhinoRun2",
    RHINO_EAT1 = "rhinoEat1",
    RHINO_EAT2 = "rhinoEat2",
    RHINO_EAT3 = "rhinoEat3",
    RHINO_EAT4 = "rhinoEat4",
    RHINO_CELEBRATE1 = "rhinoCelebrate1",
    RHINO_CELEBRATE2 = "rhinoCelebrate2",
    JUMP_RAMP = "jumpRamp",
    SKIER_JUMP_1 = "skierJump1",
    SKIER_JUMP_2 = "skierJump2",
    SKIER_JUMP_3 = "skierJump3",
    SKIER_JUMP_4 = "skierJump4",
    SKIER_JUMP_5 = "skierJump5",
    MUDDY_TERRAIN = "muddyTerrain",
    SPEED_BOOST = "speedBoost"
}

export const IMAGES: iImage[] = [
    { name: IMAGE_NAMES.SKIER_CRASH, url: "img/skier_crash.png" },
    { name: IMAGE_NAMES.SKIER_LEFT, url: "img/skier_left.png" },
    { name: IMAGE_NAMES.SKIER_LEFTDOWN, url: "img/skier_left_down.png" },
    { name: IMAGE_NAMES.SKIER_DOWN, url: "img/skier_down.png" },
    { name: IMAGE_NAMES.SKIER_RIGHTDOWN, url: "img/skier_right_down.png" },
    { name: IMAGE_NAMES.SKIER_RIGHT, url: "img/skier_right.png" },
    { name: IMAGE_NAMES.TREE, url: "img/tree_1.png" },
    { name: IMAGE_NAMES.TREE_CLUSTER, url: "img/tree_cluster.png" },
    { name: IMAGE_NAMES.ROCK1, url: "img/rock_1.png" },
    { name: IMAGE_NAMES.ROCK2, url: "img/rock_2.png" },
    { name: IMAGE_NAMES.RHINO, url: "img/rhino_default.png" },
    { name: IMAGE_NAMES.RHINO_RUN1, url: "img/rhino_run_left.png" },
    { name: IMAGE_NAMES.RHINO_RUN2, url: "img/rhino_run_left_2.png" },
    { name: IMAGE_NAMES.RHINO_EAT1, url: "img/rhino_eat_1.png" },
    { name: IMAGE_NAMES.RHINO_EAT2, url: "img/rhino_eat_2.png" },
    { name: IMAGE_NAMES.RHINO_EAT3, url: "img/rhino_eat_3.png" },
    { name: IMAGE_NAMES.RHINO_EAT4, url: "img/rhino_eat_4.png" },
    { name: IMAGE_NAMES.RHINO_CELEBRATE1, url: "img/rhino_celebrate_1.png" },
    { name: IMAGE_NAMES.RHINO_CELEBRATE2, url: "img/rhino_celebrate_2.png" },
    { name: IMAGE_NAMES.JUMP_RAMP, url: "img/jump_ramp.png" },
    { name: IMAGE_NAMES.SKIER_JUMP_1, url: "img/skier_jump_1.png" },
    { name: IMAGE_NAMES.SKIER_JUMP_2, url: "img/skier_jump_2.png" },
    { name: IMAGE_NAMES.SKIER_JUMP_3, url: "img/skier_jump_3.png" },
    { name: IMAGE_NAMES.SKIER_JUMP_4, url: "img/skier_jump_4.png" },
    { name: IMAGE_NAMES.SKIER_JUMP_5, url: "img/skier_jump_5.png" },
    { name: IMAGE_NAMES.MUDDY_TERRAIN, url: "img/muddy_terrain.png" },
    { name: IMAGE_NAMES.SPEED_BOOST, url: "img/speed_boost.png" },
];

export const OBSTACLE_PROPERTIES : iObstacleProperties[] = [
    { name: IMAGE_NAMES.TREE , height: 2, speedMultiplier: 1},
    { name: IMAGE_NAMES.TREE_CLUSTER , height: 2, speedMultiplier: 1},
    { name: IMAGE_NAMES.ROCK1 , height: 1, speedMultiplier: 1},
    { name: IMAGE_NAMES.ROCK2 , height: 1, speedMultiplier: 1},
    { name: IMAGE_NAMES.JUMP_RAMP , height: 0, speedMultiplier: 1},
    { name: IMAGE_NAMES.MUDDY_TERRAIN , height: 0, speedMultiplier: 0.6},
    { name: IMAGE_NAMES.SPEED_BOOST , height: 0, speedMultiplier: 1.3}
] 

export const ANIMATION_FRAME_SPEED_MS: number = 250;

export const DIAGONAL_SPEED_REDUCER: number = 1.4142;
