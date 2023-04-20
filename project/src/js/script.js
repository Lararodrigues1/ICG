import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import * as dat from 'dat.gui';
//import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


const renderer = new THREE.WebGLRenderer();

const gui = new dat.GUI();

const options = {
    darkMode: false
};

gui.add(options, 'darkMode').name('Dark Mode').onChange(function(e) {
    if (e) {
        scene.background = null;
        planeMaterial.color.set(0x994c00);
        sphereMaterial.color.set(0xffffff);
        planeMaterial1.color.set(0x4c9900);
        circleMaterial.color.set(0x004c99);
        //rectangleGeometry.color.set(0x606060);
    } else {
        scene.background = darkMaterial;
        planeMaterial.color.set(0xcd853f);
        sphereMaterial.color.set(0xffff99);
        planeMaterial1.color.set(0xb2ff66);
        circleMaterial.color.set(0x99ccff);
        //rectangleGeometry.color.set(0x606060);

    }
});




const darkMaterial = new THREE.MeshBasicMaterial({
    color: 0x0066cc
});

const lightMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff
});




//const house = new URL('../assets/cena_13.glb',import.meta.url);

//background color
renderer.setClearColor(0xcccccc);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(-400, 300, 0);
light.castShadow = true;
scene.add(light);

//add a light to the scene
const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);


camera.position.set(400, 300, 0);
controls.update();



const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);
//add vertiacl retangles to the scene

const addVerticalRectangles = function(color, position) {
    const rectangleGeometry = new THREE.BoxGeometry(30, 100, 60);
    const rectangleMaterial = new THREE.MeshLambertMaterial(color);
    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);


    rectangle.position.set(position.x, position.y, position.z);

    scene.add(rectangle);

    //add cast shadows
    rectangle.castShadow = true;
    rectangle.receiveShadow = true;

}

addVerticalRectangles({ color: 0xDCDCDC }, { x: -300, y: 50, z: 200 });
addVerticalRectangles({ color: 0xDCDCDC }, { x: 450, y: 50, z: 100 });
addVerticalRectangles({ color: 0xDCDCDC }, { x: 150, y: 50, z: -300 });
addVerticalRectangles({ color: 0xDCDCDC }, { x: 150, y: 50, z: 300 });
addVerticalRectangles({ color: 0xDCDCDC }, { x: 250, y: 50, z: -100 });


const addVerticalRectangles2 = function(color, position) {
    const rectangleGeometry = new THREE.BoxGeometry(100, 200, 50);
    const rectangleMaterial = new THREE.MeshLambertMaterial(color);
    const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);


    rectangle.position.set(position.x, position.y, position.z);

    scene.add(rectangle);

    //add cast shadows
    rectangle.castShadow = true;
    rectangle.receiveShadow = true;

}

addVerticalRectangles2({ color: 0xDCDCDC }, { x: -350, y: 100, z: 90 });
addVerticalRectangles2({ color: 0xDCDCDC }, { x: 400, y: 100, z: 400 });
addVerticalRectangles2({ color: 0xDCDCDC }, { x: -80, y: 100, z: 100 });
addVerticalRectangles2({ color: 0xDCDCDC }, { x: -100, y: 100, z: 230 });
addVerticalRectangles2({ color: 0xDCDCDC }, { x: 250, y: 100, z: -200 });




const addPlaneRectangles = function(color, position) {
    const planeGeometry = new THREE.BoxGeometry(100, 50);
    const planeMaterial = new THREE.MeshLambertMaterial(color);
    const planeRectangles = new THREE.Mesh(planeGeometry, planeMaterial);

    planeRectangles.rotation.x = -Math.PI / 2;
    planeRectangles.position.set(position.x, position.y, position.z);

    scene.add(planeRectangles);

    //add cast shadows
    planeRectangles.castShadow = true;
    planeRectangles.receiveShadow = true;

}

//road
addPlaneRectangles({ color: 0x000000 }, { x: 50, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: 150, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: 250, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: 350, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: 450, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -50, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -100, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -150, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -200, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -250, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -300, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -350, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -400, y: 0, z: 10 });
addPlaneRectangles({ color: 0x000000 }, { x: -450, y: 0, z: 10 });

//second road2 = function(color, position) {
const addPlaneRectangles2 = function(color, position) {
    const planeGeometry2 = new THREE.BoxGeometry(50, 100);
    const planeMaterial2 = new THREE.MeshLambertMaterial(color);
    const planeRectangles2 = new THREE.Mesh(planeGeometry2, planeMaterial2);

    planeRectangles2.rotation.x = -Math.PI / 2;
    planeRectangles2.position.set(position.x, position.y, position.z);

    scene.add(planeRectangles2);

    //add cast shadows
    planeRectangles2.castShadow = true;
    planeRectangles2.receiveShadow = true;

}

addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: 50 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: 150 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: 250 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: 350 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: 450 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: -50 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: -150 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: -250 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: -350 });
addPlaneRectangles2({ color: 0x000000 }, { x: 100, y: 0, z: -450 });


addPlaneRectangles2({ color: 0x000000 }, { x: -250, y: 0, z: 50 });
addPlaneRectangles2({ color: 0x000000 }, { x: -250, y: 0, z: 150 });
addPlaneRectangles2({ color: 0x000000 }, { x: -250, y: 0, z: 250 });
addPlaneRectangles2({ color: 0x000000 }, { x: -250, y: 0, z: 350 });
addPlaneRectangles2({ color: 0x000000 }, { x: -250, y: 0, z: 450 });


//add a blue circle to the scene
const circleGeometry = new THREE.CircleGeometry(102, 288);
const circleMaterial = new THREE.MeshLambertMaterial({ color: 0x99ccff });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.position.set(-300, 2, -200);
circle.rotation.x = -Math.PI / 2;
scene.add(circle);

//add a green plane to the scene
const planeGeometry1 = new THREE.PlaneGeometry(550, 475);
const planeMaterial1 = new THREE.MeshLambertMaterial({ color: 0xb2ff66 });
const plane1 = new THREE.Mesh(planeGeometry1, planeMaterial1);
plane1.position.set(-220, 1, -260);
plane1.rotation.x = -Math.PI / 2;
scene.add(plane1);






//add a sphere to the scene
const sphereGeometry = new THREE.SphereGeometry(30, 96, 96);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff66 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-400, 300, 0);
scene.add(sphere);


renderer.shadowMap.enabled = true


const animate = function(time) {
    requestAnimationFrame(animate);

    sphere.rotation.x = time / 1000;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.onresize = function() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

};