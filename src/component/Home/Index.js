import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
function Home() {
    useEffect(() => {
        /**
         * 创建场景对象Scene
         */
        let scene = new THREE.Scene();
        /**
         * 创建网格模型
         */
        // let geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
        let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
        let material = new THREE.MeshLambertMaterial({
            color: 0x0000ff,
            specular: 0x4488ee,
            shininess: 12
        }); //材质对象Material
        let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        scene.add(mesh); //网格模型添加到场景中
        /**
         * 光源设置
         */
        //点光源
        let point = new THREE.PointLight(0xffffff);
        point.position.set(400, 200, 300); //点光源位置
        scene.add(point); //点光源添加到场景中
        //环境光
        let ambient = new THREE.AmbientLight(0x444444);
        scene.add(ambient);
        // console.log(scene)
        // console.log(scene.children)
        /**
         * 相机设置
         */
        let width = window.innerWidth; //窗口宽度
        let height = window.innerHeight; //窗口高度
        let k = width / height; //窗口宽高比
        let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
        //创建相机对象
        let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
        camera.position.set(200, 300, 200); //设置相机位置
        camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
        /**
         *
         * 创建渲染器对象
         */
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height); //设置渲染区域尺寸
        renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
        document.getElementById('treejs-basic').appendChild(renderer.domElement); //body元素中插入canvas对象
        //执行渲染操作   指定场景、相机作为参数
        // renderer.render(scene, camera);

        let T0 = new Date(); //上次时间
        function render() {
            let T1 = new Date(); //本次时间
            let t = T1 - T0; //时间差
            T0 = T1; //把本次时间赋值给上次时间
            requestAnimationFrame(render);
            renderer.render(scene, camera); //执行渲染操作
            mesh.rotateY(0.001 * t); //旋转角速度0.001弧度每毫秒
        }
        render();

        let controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
        controls.addEventListener('change', render); //监听鼠标、键盘事件

        // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
        let axisHelper = new THREE.AxisHelper(250);
        scene.add(axisHelper);
    }, []);
    return (
        <div>
            <img src="/images/threejs结构.svg " />
            <div id="treejs-basic"></div>
        </div>
    );
}

export default Home;
