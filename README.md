# 2021-09-02-Project-1
# Julia Burnett's Projects

# Julia Burnett's Projects

This repository contains various projects related to Creative Computation.

- <a href="#" onclick="loadSketch()">View the Processing Sketch</a>

<script>
function loadSketch() {
    fetch('p5-example/index.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
            const script = document.createElement('script');
            script.src = 'p5-example/sketch.js';
            document.body.appendChild(script);
            const p5Script = document.createElement('script');
            p5Script.src = 'p5-example/p5.min.js';
            document.body.appendChild(p5Script);
        });
}
</script>

# Open-ended creative project in Processing and transfer to p5.js for github - “Show me what you’ve got” with Processing.
# Should have at least the following:
#      Proper use of setup() and draw()
#      A loop of some kind (‘for’ or ‘while’ loop)
#      A conditional
#      A variable that you have declared
#      Use of a system variable (like mouseX or mouseY)
#      One or more functions that you have written
#      Interaction, by way of a mouse of keyboard event handler
#      It should be visual and have color
#      It should be at least 500 x 500 pixels and not more than 720p
# Provide a simple animation of a ball bouncing in a box on the screen.
# When the user hovers the mouse over the box, color of the interior of the box should change to a new color and remain that   color while the mouse is over the box (of course the ball should continue to bounce around in that box). When the user moves the mouse away from the box, the interior of the box will change back to its original color, a mouse click on the box will call a function to change color of the ball and display a message in the display window (not in the console), stating the name of the new color.
# The press of any key will change the color of area outside of the box and display a message in the console area stating which key pressed.
# Comments, formatting and indentation, and naming conventions (camelCase) are required. Minimize the use of hard-coded values by using variables when possible.  
# Keep code as clean and organized as possible.
