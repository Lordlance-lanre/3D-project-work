import './style.css';
import * as THREE from 'three';


// scene.add(cylinder);

// Set up a scene, camera, and renderer
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;
// scene.add(camera);


// var canvas = document.querySelector(".webGl");

// var renderer = new THREE.WebGLRenderer({canvas});
// renderer.setClearColor('#000000');
// renderer.setSize(window.innerWidth, window.innerHeight);


// window.addEventListener('resize', () =>{
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// })


// var radiusTop = 1; // Radius of the cylinder at the top
// var radiusBottom = 1; // Radius of the cylinder at the bottom
// var height = 4.07; // Height of the cylinder
// var radialSegments = 64; // Number of segmented faces around the circumference of the cylinder

// var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
// var material = new THREE.MeshBasicMaterial({color: 0xFFCC00});
// var cylinder = new THREE.Mesh(geometry, material);
// scene.add(cylinder)

// var light = new THREE.PointLight(0xFFFFFF, 1, 500);
// light.position.set(10, 0, 25);
// scene.add(light);

// renderer.render(scene,camera); 



// var scene = new THREE.Scene();

// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// var renderer = new THREE.WebGLRenderer({antialias:true});
// renderer.setClearColor('#000000');
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// // var radiusTop = 5; // Radius of the cylinder at the top
// // var radiusBottom = 5; // Radius of the cylinder at the bottom
// // var height = 21.07; // Height of the cylinder
// // var radialSegments = 64; // Number of segmented faces around the circumference of the cylinder

// var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32);
// var material = new THREE.MeshBasicMaterial({color: 0xffff00});
// var cylinder = new THREE.Mesh(geometry, material);
// scene.add(cylinder);

// renderer.render(scene,camera);

// cylinder.position.z = 5
// cylinder.rotation.x = 10;
//   cylinder.rotation.y += 5;



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#000000');
document.body.appendChild(renderer.domElement);

// Create a cylinder geometry
var radiusTop = 1; // Radius of the cylinder at the top
var radiusBottom = 1; // Radius of the cylinder at the bottom
var height = 4; // Height of the cylinder
var radialSegments = 64; // Number of segmented faces around the circumference of the cylinder
var geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);

// Create a material
var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// Create a mesh and add it to the scene
var cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

// Move the camera position
camera.position.z = 8;


// Render the scene

const animate = () =>{
  requestAnimationFrame(animate);
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();