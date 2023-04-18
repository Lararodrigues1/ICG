import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';


const renderer = new THREE.WebGLRenderer();

//background color
renderer.setClearColor(0xccffff);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(-100, 100, 0);
scene.add(light);

//add a light to the scene
const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);


camera.position.set(0, 200, 100);
controls.update();


//add a plane to the scene
const planeGeometry3 = new THREE.PlaneGeometry(100, 200);
const planeMaterial3 = new THREE.MeshPhongMaterial({ color: 0x905838, side: THREE.DoubleSide });
const plane3 = new THREE.Mesh(planeGeometry3, planeMaterial3);
plane3.rotation.x = Math.PI / 2;
plane3.position.set(-55, 0, 0);
scene.add(plane3);

//add a plane to the scene
const planeGeometry4 = new THREE.PlaneGeometry(100, 200);
const planeMaterial4 = new THREE.MeshPhongMaterial({ color: 0x905838, side: THREE.DoubleSide });
const plane4 = new THREE.Mesh(planeGeometry4, planeMaterial4);
plane4.rotation.x = Math.PI / 2;
plane4.position.set(55, 0, 0);
scene.add(plane4);


//add a plane to the scene
// const planeGeometry2 = new THREE.PlaneGeometry(10, 200);
// const planeMaterial2 = new THREE.MeshPhongMaterial({ color: 0x000000, side: THREE.DoubleSide });
// const plane2 = new THREE.Mesh(planeGeometry2, planeMaterial2);
// plane2.rotation.x = Math.PI / 2;
// scene.add(plane2);

//add a sphere to the scene
const sphereGeometry = new THREE.SphereGeometry(5, 35, 35);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff66 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(-100, 100, 0);
scene.add(sphere);

// Create a plane geometry for the road
const roadGeometry = new THREE.PlaneGeometry(20, 200);

// Create a texture for the road
const roadTexture = new THREE.TextureLoader().load('path/to/road/texture.jpg');
roadTexture.wrapS = THREE.RepeatWrapping;
roadTexture.wrapT = THREE.RepeatWrapping;
roadTexture.repeat.set(1, 10);

// Create a material for the road
const roadMaterial = new THREE.MeshBasicMaterial({ map: roadTexture });

// Create a mesh for the road
const roadMesh = new THREE.Mesh(roadGeometry, roadMaterial);

// Rotate the road mesh so that it lies flat on the ground
roadMesh.rotation.x = -Math.PI / 2;

// Add the road mesh to the scene
scene.add(roadMesh);



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