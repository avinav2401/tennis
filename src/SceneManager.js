import * as THREE from "three";

export class SceneManager {
    constructor() {
        // scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xa7e677);

        // camera with mobile adjustment
        const isMobile = window.innerWidth <= 768;
        const zoomDivisor = isMobile ? 20 : 30; // Smaller divisor = less zoom on mobile

        this.camera = new THREE.OrthographicCamera(
            window.innerWidth / -zoomDivisor,
            window.innerWidth / zoomDivisor,
            window.innerHeight / zoomDivisor,
            window.innerHeight / -zoomDivisor,
            -150,
            150
        );
        this.camera.position.set(16, 12, -12);
        this.camera.lookAt(0, 0, 0);

        // renderer
        this.renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#court") });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // lighting
        const ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(ambientLight);

        // helpers
        const gridHelper = new THREE.GridHelper(200, 50);
        const axesHelper = new THREE.AxesHelper(15);
        // this.scene.add(gridHelper, axesHelper);
    }

    resize() {
        const isMobile = window.innerWidth <= 768;
        const zoomDivisor = isMobile ? 20 : 32; // Less zoom on mobile

        this.camera.left = window.innerWidth / -zoomDivisor;
        this.camera.right = window.innerWidth / zoomDivisor;
        this.camera.top = window.innerHeight / zoomDivisor;
        this.camera.bottom = window.innerHeight / -zoomDivisor;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}