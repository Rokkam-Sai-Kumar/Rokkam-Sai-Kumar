const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 100, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });  // Transparency
renderer.setSize(window.innerWidth, 100);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load('path_to_your_model/army_man.glb', function(gltf) {
    const armyMan = gltf.scene;
    armyMan.scale.set(0.5, 0.5, 0.5);  // Adjust scale
    armyMan.position.set(-3, -0.5, 0);  // Start position
    scene.add(armyMan);

    // Animate the model (simple walking)
    function animate() {
        requestAnimationFrame(animate);
        
        // Move the army man to the right
        armyMan.position.x += 0.02;
        
        // When he reaches the end, stop and show buttons
        if (armyMan.position.x > 3) {
            createFootprintButtons();
            return;
        }
        
        renderer.render(scene, camera);
    }
    animate();
});

// Camera position
camera.position.z = 5;

// Function to create footprint buttons
function createFootprintButtons() {
    let buttons = ['Home', 'Resume', 'Contact', 'Help'];
    buttons.forEach((btn, index) => {
        let button = document.createElement('button');
        button.innerText = btn;
        button.className = 'footprint-button';
        button.style.left = ${(index + 1) * 70}px;  // Adjust positioning
        document.querySelector('.header').appendChild(button);

        // Fade-in effect for buttons
        gsap.to(button, {opacity: 1, duration: 1, delay: index * 0.5});
    });
}
