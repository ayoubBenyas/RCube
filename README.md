# New Document# RCube
WebGL Rubik's Cube simulator based on three js library

## About this projet 

this project mainly developed with the  [threejs](https://github.com/mrdoob/three.js)  librery to display 3d animation graphics that use the **WebGL**


- the aim of this work is to develop my skills and learn the **threejs** library so I can get familiar with 3d animation and controlled its behavior, 
- this project model the Rubik's Cube with Oriante object approach
---

In terms of implementation, I used three class: 

`App` : represent the whole game Application and take care of the user interface and interaction

`Rubik` : this is the Rubik's Cube , it define the cube behavior and its moves

`Cube`: it represent the 9x3 small cubes, each one have its color and position




## Usage

###
| Key |   Action      |*| Key |   Action      |
|---------|---------|-|---------|---------|
| <kbd>U</kbd>| Rotate top face   || <kbd>shift</kbd> + <kbd>U</kbd> |   Rotate top face invert   |
| <kbd>D</kbd>| Rotate bottom face|| <kbd>shift</kbd> + <kbd>D</kbd> |   Rotate bottom face invert   |
| <kbd>R</kbd>| Rotate Rigth face || <kbd>shift</kbd> + <kbd>R</kbd> |   Rotate Rigth face invert   |
| <kbd>L</kbd>| Rotate Left face  || <kbd>shift</kbd> + <kbd>L</kbd> |   Rotate Left face invert   |
| <kbd>F</kbd>| Rotate Front face || <kbd>shift</kbd> + <kbd>F</kbd> |   Rotate Front face invert   |
| <kbd>B</kbd>| Rotate Back face  || <kbd>shift</kbd> + <kbd>B</kbd> |   Rotate Back face invert   |
| <kbd>X</kbd>| rotate an object around X axis  || <kbd>shift</kbd> + <kbd>X</kbd> |   rotate an object around X axis inverst   |
| <kbd>Y</kbd>| rotate an object around Y axis  || <kbd>shift</kbd> + <kbd>Y</kbd>  |   rotate an object around Y axis inverst   |
| <kbd>Z</kbd>| rotate an object around Z axis  || <kbd>shift</kbd> + <kbd>Z</kbd> |   rotate an object around Z axis inverst   |
> Use the mouse to control the view of the camera and the scene

### What comes next ?
It was a first step in Three.js, and there are a bunch of features that I would add as soon as possible:
+ Think of a way (algorithm) to solve the rubik cubes
+ Have the ability to rotate Cube/Face with the mouse action

## Test
[See it in action.](https://)