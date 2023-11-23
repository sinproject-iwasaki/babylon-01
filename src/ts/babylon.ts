// Get the canvas DOM element
var canvas = document.getElementById("renderCanvas");
// Load the 3D engine
var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
// CreateScene function that creates and return the scene
var createScene = function () {
				const scene = new BABYLON.Scene(engine);

        const camera = new BABYLON.ArcRotateCamera(
          "camera",
          -Math.PI / 2,
          Math.PI / 2.5,
          10,
          new BABYLON.Vector3(0, 0, 0)
        );
        camera.attachControl(canvas, true);

        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
        const music = new BABYLON.Sound("cello", "sounds/cellolong.wav", scene, null, {
          loop: true,
          autoplay: true,
        });
        const bounce = new BABYLON.Sound("bounce", "sounds/bounce.wav", scene);
        setInterval(() => bounce.play(), 3000);

        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = 0.5;

        const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 10, height: 10 });

        return scene;
};
// call the createScene function
var scene = createScene();
// run the render loop
engine.runRenderLoop(function () {
  scene.render();
});
// the canvas/window resize event handler
window.addEventListener("resize", function () {
  engine.resize();
});
