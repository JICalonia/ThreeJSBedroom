const width = window.innerWidth, height = window.innerHeight;

// Camera and Scene

const camera = new THREE.PerspectiveCamera( 75, width / height, 0.5, 1000 ); // fov, aspect, near, far
camera.position.z = 1;

const scene = new THREE.Scene();

// Geometry and Material (Middle Wall)

const geometry = new THREE.BoxGeometry( 1.5, 0.9, 0.1 ); // width, height, depth
const material = new THREE.MeshBasicMaterial({
    color: 0xe0d0a2
}); // color
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
mesh.position.z = -0.5;

// Floor

const floorGeometry = new THREE.BoxGeometry( 1.5, 0.1, 1 ); // width, height, depth
const floorMaterial = new THREE.MeshBasicMaterial({
    color: 0x8f4f10
}); // color
const floorMesh = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floorMesh );
floorMesh.position.y = -0.5;

// Ceiling –––––––––––––––

const ceilingGeometry = new THREE.BoxGeometry( 1.5, 0.1, 1 ); // width, height, depth
const ceilingMaterial = new THREE.MeshBasicMaterial({
	color: 0xd9d9d9
}); // color
const ceilingMesh = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
scene.add( ceilingMesh );
ceilingMesh.position.y = 0.5;

// Ceiling Light (CylinderGeometry)
const ceilingLightGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 0.03, 32 ); // radiusTop, radiusBottom, height, radialSegments
const ceilingLightMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff
});
const ceilingLightMesh = new THREE.Mesh( ceilingLightGeometry, ceilingLightMaterial );
scene.add( ceilingLightMesh );
ceilingLightMesh.position.y = 0.45;

// Ceiling Light Base (CylinderGeometry)
const ceilingLightBaseGeometry = new THREE.CylinderGeometry( 0.125, 0.125, 0.025, 32 );
const ceilingLightBaseMaterial = new THREE.MeshBasicMaterial({
    color: 0x646464
});
const ceilingLightBaseMesh = new THREE.Mesh( ceilingLightBaseGeometry, ceilingLightBaseMaterial );
scene.add( ceilingLightBaseMesh );
ceilingLightBaseMesh.position.y = 0.45;

// Wall 1 –––––––––––––––

// Bottom
const wall1Geometry = new THREE.BoxGeometry( 0.1, 0.2, 1 ); // width, height, depth
const wall1Material = new THREE.MeshBasicMaterial({
    color: 0xe0d0a2
}); // color
const wall1Mesh = new THREE.Mesh( wall1Geometry, wall1Material );
scene.add( wall1Mesh );
wall1Mesh.position.x = -0.8;
wall1Mesh.position.y = -0.35;

// Top
const wall1Geometry2 = new THREE.BoxGeometry( 0.1, 0.2, 1 ); // width, height, depth
const wall1Material2 = new THREE.MeshBasicMaterial({
    color: 0xe0d0a2
}); // color
const wall1Mesh2 = new THREE.Mesh( wall1Geometry2, wall1Material2 );
scene.add( wall1Mesh2 );
wall1Mesh2.position.x = -0.8;
wall1Mesh2.position.y = 0.35;

// Right
const wall1Geometry3 = new THREE.BoxGeometry( 0.1, 0.5, 0.3 ); // width, height, depth
const wall1Material3 = new THREE.MeshBasicMaterial({
    color: 0xe0d0a2
}); // color
const wall1Mesh3 = new THREE.Mesh( wall1Geometry3, wall1Material3 );
scene.add( wall1Mesh3 );
wall1Mesh3.position.x = -0.8;
wall1Mesh3.position.y = 0;
wall1Mesh3.position.z = -0.3;

// Left
const wall1Geometry4 = new THREE.BoxGeometry( 0.1, 0.5, 0.3 ); // width, height, depth
const wall1Material4 = new THREE.MeshBasicMaterial({
    color: 0xe0d0a2
}); // color
const wall1Mesh4 = new THREE.Mesh( wall1Geometry4, wall1Material4 );
scene.add( wall1Mesh4 );
wall1Mesh4.position.x = -0.8;
wall1Mesh4.position.y = 0;
wall1Mesh4.position.z = 0.3;

// Window (on Wall 1)
const windowGeometry = new THREE.BoxGeometry( 0.08, 0.5, 0.4 ); // width, height, depth
const windowMaterial = new THREE.MeshBasicMaterial({
    color: 0x062f5c
});
const windowMesh = new THREE.Mesh( windowGeometry, windowMaterial );
scene.add( windowMesh );
windowMesh.position.x = -0.8;
windowMesh.position.y = 0;
windowMesh.position.z = 0;

// Wall 1 Rack (BoxGeometry)
const wall1RackGeometry = new THREE.BoxGeometry( 0.08, 0.02, 0.3 ); // width, height, depth
const wall1RackMaterial = new THREE.MeshBasicMaterial({
    color: 0x8f7f50
}); // color
const wall1RackMesh = new THREE.Mesh( wall1RackGeometry, wall1RackMaterial );
scene.add( wall1RackMesh );
wall1RackMesh.position.x = -0.71;
wall1RackMesh.position.y = 0.2;
wall1RackMesh.position.z = 0.3;

// Wall 1 Rack 2 
const wall1Rack2Geometry = new THREE.BoxGeometry( 0.08, 0.02, 0.3 ); // width, height, depth
const wall1Rack2Material = new THREE.MeshBasicMaterial({
    color: 0x8f7f50
}); // color
const wall1Rack2Mesh = new THREE.Mesh( wall1Rack2Geometry, wall1Rack2Material );
scene.add( wall1Rack2Mesh );
wall1Rack2Mesh.position.x = -0.71;
wall1Rack2Mesh.position.y = 0;
wall1Rack2Mesh.position.z = 0.3;

// Wall 1 Rack 3
const wall1Rack3Geometry = new THREE.BoxGeometry( 0.08, 0.02, 0.3 );    // width, height, depth
const wall1Rack3Material = new THREE.MeshBasicMaterial({
    color: 0x8f7f50
}); // color
const wall1Rack3Mesh = new THREE.Mesh( wall1Rack3Geometry, wall1Rack3Material );
scene.add( wall1Rack3Mesh );
wall1Rack3Mesh.position.x = -0.71;
wall1Rack3Mesh.position.y = -0.2;
wall1Rack3Mesh.position.z = 0.3;

// Flower Pot (CylinderGeometry)
const flowerPotGeometry = new THREE.CylinderGeometry( 0.03, 0.03, 0.07, 32 ); // radiusTop, radiusBottom, height, radialSegments
const flowerPotMaterial = new THREE.MeshBasicMaterial({
    color: 0xa64532
});
const flowerPotMesh = new THREE.Mesh( flowerPotGeometry, flowerPotMaterial );
scene.add( flowerPotMesh );
flowerPotMesh.position.x = -0.7;
flowerPotMesh.position.y = 0.03;
flowerPotMesh.position.z = 0.3;

// Bamboo (CylinderGeometry) 
const bambooGeometry = new THREE.CylinderGeometry( 0.005, 0.005, 0.1, 32 ); // radiusTop, radiusBottom, height, radialSegments
const bambooMaterial = new THREE.MeshBasicMaterial({
    color: 0x107312
});
const bambooMesh = new THREE.Mesh( bambooGeometry, bambooMaterial );
scene.add( bambooMesh );
bambooMesh.position.x = -0.7;
bambooMesh.position.y = 0.08;
bambooMesh.position.z = 0.3;

// Book (BoxGeometry)
const bookGeometry = new THREE.BoxGeometry( 0.05, 0.02, 0.08 ); // width, height, depth
const bookMaterial = new THREE.MeshBasicMaterial({
    color: 0x062f5c
});
const bookMesh = new THREE.Mesh( bookGeometry, bookMaterial );
scene.add( bookMesh );
bookMesh.position.x = -0.7;
bookMesh.position.y = -0.185;
bookMesh.position.z = 0.3;

// Wall 2 –––––––––––––––

const wall2Geometry = new THREE.BoxGeometry( 0.1, 0.9, 1 ); // width, height, depth
const wall2Material = new THREE.MeshBasicMaterial({
    color: 0xe0d0a2
}); // color
const wall2Mesh = new THREE.Mesh( wall2Geometry, wall2Material );
scene.add( wall2Mesh );
wall2Mesh.position.x = 0.8;

// Bed ––––––––––––––––

// Bed Base
const bedBaseGeometry = new THREE.BoxGeometry( 0.55, 0.1, 0.8 ); // width, height, depth
const bedBaseMaterial = new THREE.MeshBasicMaterial({
    color: 0x8f7f50
}); // color
const bedBaseMesh = new THREE.Mesh( bedBaseGeometry, bedBaseMaterial );
scene.add( bedBaseMesh );
bedBaseMesh.position.x = 0.475;
bedBaseMesh.position.y = -0.4;

// Bed Mattress
const bedMattressGeometry = new THREE.BoxGeometry( 0.55, 0.05, 0.8 ); // width, height, depth
const bedMattressMaterial = new THREE.MeshBasicMaterial({
    color: 0xd9d9d9
}); // color
const bedMattressMesh = new THREE.Mesh( bedMattressGeometry, bedMattressMaterial );
scene.add( bedMattressMesh );
bedMattressMesh.position.x = 0.475;
bedMattressMesh.position.y = -0.325;

// Bed Blanket
const bedBlanketGeometry = new THREE.BoxGeometry( 0.56, 0.051, 0.61 );
const bedBlanketMaterial = new THREE.MeshBasicMaterial({
    color: 0x062f5c
});
const bedBlanketMesh = new THREE.Mesh( bedBlanketGeometry, bedBlanketMaterial );
scene.add( bedBlanketMesh );
bedBlanketMesh.position.x = 0.475;
bedBlanketMesh.position.y = -0.325;
bedBlanketMesh.position.z = 0.1;

// Bed Pillow
const bedPillowGeometry = new THREE.BoxGeometry( 0.5, 0.05, 0.2 ); // width, height, depth
const bedPillowMaterial = new THREE.MeshBasicMaterial({
    color: 0xd9d9d9
}); // color
const bedPillowMesh = new THREE.Mesh( bedPillowGeometry, bedPillowMaterial );
scene.add( bedPillowMesh );
bedPillowMesh.position.x = 0.475;
bedPillowMesh.position.y = -0.275;
bedPillowMesh.position.z = -0.3;

// Desk –––––––––––––––

const deskGeometry = new THREE.BoxGeometry( 0.8, 0.05, 0.3 ); // width, height, depth
const deskMaterial = new THREE.MeshBasicMaterial({
    color: 0x8f7f50
}); // color
const deskMesh = new THREE.Mesh( deskGeometry, deskMaterial );
scene.add( deskMesh );
deskMesh.position.x = -0.35;
deskMesh.position.y = -0.2;
deskMesh.position.z = -0.4;

// Desk Power Strip (BoxGeometry)
const powerStripGeometry = new THREE.BoxGeometry( 0.085, 0.055, 0.01 ); // width, height, depth
const powerStripMaterial = new THREE.MeshBasicMaterial({
    color: 0x646464
}); // color
const powerStripMesh = new THREE.Mesh( powerStripGeometry, powerStripMaterial );
scene.add( powerStripMesh );
powerStripMesh.position.x = -0.05;
powerStripMesh.position.y = -0.09;
powerStripMesh.position.z = -0.425;

// Laptop Base 

const laptopBaseGeometry = new THREE.BoxGeometry( 0.3, 0.02, 0.2 ); // width, height, depth
const laptopBaseMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000
}); // color
const laptopBaseMesh = new THREE.Mesh( laptopBaseGeometry, laptopBaseMaterial );
scene.add( laptopBaseMesh );
laptopBaseMesh.position.x = -0.35;
laptopBaseMesh.position.y = -0.175;
laptopBaseMesh.position.z = -0.4;

// Laptop Screen

const laptopScreenGeometry = new THREE.BoxGeometry( 0.3, 0.2, 0.02 ); // width, height, depth
const laptopScreenMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000
}); // color
const laptopScreenMesh = new THREE.Mesh( laptopScreenGeometry, laptopScreenMaterial );
scene.add( laptopScreenMesh );
laptopScreenMesh.position.x = -0.35;
laptopScreenMesh.position.y = -0.075;
laptopScreenMesh.position.z = -0.45;

// Mouse (CapsuleGeometry)

const mouseGeometry = new THREE.CapsuleGeometry( 0.03, 0.04, 4, 8 ); // radius, length, capSegments, radialSegments
const mouseMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000
});
const mouseMesh = new THREE.Mesh( mouseGeometry, mouseMaterial );
scene.add( mouseMesh );
mouseMesh.position.x = -0.125;
mouseMesh.position.y = -0.175;
mouseMesh.position.z = -0.35;
mouseMesh.rotation.x = Math.PI / 2; // Rotate the mouse to lie flat on the desk

// Phone
const phoneGeometry = new THREE.BoxGeometry( 0.05, 0.01, 0.1 ); // width, height, depth
const phoneMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000
});
const phoneMesh = new THREE.Mesh( phoneGeometry, phoneMaterial );
scene.add( phoneMesh );
phoneMesh.position.x = -0.02;
phoneMesh.position.y = -0.175;
phoneMesh.position.z = -0.35;

// Desk Lamp ––––––––––––

// Lamp Base (CylinderGeometry)
const lampBaseGeometry = new THREE.CylinderGeometry( 0.03, 0.03, 0.02, 32 ); // radiusTop, radiusBottom, height, radialSegments
const lampBaseMaterial = new THREE.MeshBasicMaterial({
    color: 0x202020
});
const lampBaseMesh = new THREE.Mesh( lampBaseGeometry, lampBaseMaterial );
scene.add( lampBaseMesh );
lampBaseMesh.position.x = -0.65;
lampBaseMesh.position.y = -0.175;
lampBaseMesh.position.z = -0.375;

// Lamp Stand (CylinderGeometry)
const lampStandGeometry = new THREE.CylinderGeometry( 0.005, 0.005, 0.1, 32 ); // radiusTop, radiusBottom, height, radialSegments
const lampStandMaterial = new THREE.MeshBasicMaterial({
    color: 0x202020
});
const lampStandMesh = new THREE.Mesh( lampStandGeometry, lampStandMaterial );
scene.add( lampStandMesh );
lampStandMesh.position.x = -0.65;
lampStandMesh.position.y = -0.125;
lampStandMesh.position.z = -0.375;

// Lamp Head (SphereGeometry)
const lampHeadGeometry = new THREE.SphereGeometry( 0.025, 32, 32 ); // radius, widthSegments, heightSegments
const lampHeadMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00
});
const lampHeadMesh = new THREE.Mesh( lampHeadGeometry, lampHeadMaterial );
scene.add( lampHeadMesh );
lampHeadMesh.position.x = -0.65;
lampHeadMesh.position.y = -0.075;
lampHeadMesh.position.z = -0.375;

// Chair ––––––––––––

// Chair Seat (BoxGeometry)
const chairSeatGeometry = new THREE.BoxGeometry( 0.3, 0.02, 0.3 ); // width, height, depth
const chairSeatMaterial = new THREE.MeshBasicMaterial({
    color: 0x646464
});
const chairSeatMesh = new THREE.Mesh( chairSeatGeometry, chairSeatMaterial );
scene.add( chairSeatMesh );
chairSeatMesh.position.x = -0.5;
chairSeatMesh.position.y = -0.3;
chairSeatMesh.position.z = -0.1;

// Chair Backrest (BoxGeometry)
const chairBackrestGeometry = new THREE.BoxGeometry( 0.02, 0.3, 0.3 ); // width, height, depth
const chairBackrestMaterial = new THREE.MeshBasicMaterial({
    color: 0x646464
});
const chairBackrestMesh = new THREE.Mesh( chairBackrestGeometry, chairBackrestMaterial );
scene.add( chairBackrestMesh );
chairBackrestMesh.position.x = -0.65;
chairBackrestMesh.position.y = -0.15;
chairBackrestMesh.position.z = -0.1;

// Chair Leg (CylinderGeometry)
const chairLegGeometry = new THREE.CylinderGeometry( 0.02, 0.02, 0.2, 32 ); // radiusTop, radiusBottom, height, radialSegments
const chairLegMaterial = new THREE.MeshBasicMaterial({
    color: 0x646464
});
const chairLegMesh = new THREE.Mesh( chairLegGeometry, chairLegMaterial );
scene.add( chairLegMesh );
chairLegMesh.position.x = -0.5;
chairLegMesh.position.y = -0.4;
chairLegMesh.position.z = -0.1;

// Chair Stand 1
const chairStand1Geometry = new THREE.BoxGeometry ( 0.02, 0.02, 0.375 ); // width, height, depth
const chairStand1Material = new THREE.MeshBasicMaterial({
    color: 0x646464
});
const chairStand1Mesh = new THREE.Mesh( chairStand1Geometry, chairStand1Material );
scene.add( chairStand1Mesh );
chairStand1Mesh.position.x = -0.5;
chairStand1Mesh.position.y = -0.445;
chairStand1Mesh.position.z = -0.1;
chairStand1Mesh.rotation.y = Math.PI / 4; // Rotate the stand to create a diagonal support

// Chair Stand 2
const chairStand2Geometry = new THREE.BoxGeometry ( 0.02, 0.02, 0.375 ); // width, height, depth
const chairStand2Material = new THREE.MeshBasicMaterial({
    color: 0x646464
});
const chairStand2Mesh = new THREE.Mesh( chairStand2Geometry, chairStand2Material );
scene.add( chairStand2Mesh );
chairStand2Mesh.position.x = -0.5;
chairStand2Mesh.position.y = -0.445;
chairStand2Mesh.position.z = -0.1;
chairStand2Mesh.rotation.y = -Math.PI / 4; // Rotate the stand to create a diagonal support

// Renderer

const renderer = new THREE.WebGLRenderer( { antialias: true } );

scene.background = new THREE.Color( 0x87ceeb ); // sky blue
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Animation

function animate( time ) {


	renderer.render( scene, camera );

}