# Easy Slide Component

The Easy Slide component is an A-Frame component that allows you to easily create click-based animations for objects in your A-Frame scenes. With this component, you can define the target object, the destination position, and the duration of the animation. This component can be used by both cameras and any other type of entities, allowing you to physically force movement to any part of the scene based on the coordinates you provide, either smoothly or abruptly, in a linear manner.

Live demo: https://resonant-cumbersome-dingo.glitch.me/

# Schema

        target: Selector for the object to animate.
        destination: The position where the object will move to.
        duration (optional): The duration of the animation in milliseconds. If not provided, it defaults to 2000 milliseconds (2 seconds).


We have defined the easy-slide component with three properties: target, destination, and duration. When an object with this component is clicked, it triggers an animation that moves the object from its current position to the specified destination position with the given duration. You can customize the properties for each object to create unique animations in your A-Frame scenes. 

Feel free to explore and experiment with different target objects, destination positions, and durations to achieve the desired effects in your virtual reality experiences!

For more information on A-Frame and its components, please refer to the A-Frame documentation.

# Usage examples

    <a-box color="blue" easy-slide="target: #camara; destination: 0 1.7 -1; duration: 1000" scale="0.2 0.2 0.1" position="0 2.1 -1"></a-box>
    <a-box color="red" easy-slide="target: #camara; destination: 0 1.2 -2; duration: 3000" scale="0.2 0.2 0.1" position="0 2.1 -2"></a-box>
    <a-box color="magenta" easy-slide="target: #camara; destination: 0 1.6 0; duration: 100" scale="0.2 0.2 0.1" position="0 2.1 -4"></a-box>
