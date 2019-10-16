
var camera, scene, renderer,orbitControls,clock,delta;
window.main=function(){
    //创建元素画布
    container=document.getElementById('containerRoom')
    //创建场景
    scene=new THREE.Scene();
    //创建相机
    camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000)
    camera.position.set(300,100,500)//相机位置
    camera.lookAt(new THREE.Vector3(0,0,100))//相机观看物体的位置
    //渲染整个场景
    renderer=new THREE.WebGLRenderer({antiakuas:true})
    renderer.setClearColor(new THREE.Color(0x000000),1)//整个画布的背景颜色
    renderer.setSize(window.innerWidth,window.innerHeight)
    renderer.shadowMapEnabled=true;
    container.appendChild(renderer.domElement)


    orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
    orbitControls.target = new THREE.Vector3(0, 0, 0);//控制焦点
    orbitControls.autoRotate = false;//将自动旋转关闭
    clock = new THREE.Clock();//用于更新轨道控制器


    //光源
    var ambientLight=new THREE.AmbientLight(0x606060)//自然光
    scene.add(ambientLight)
    var spotLight=new THREE.SpotLight(0xffffff)
    spotLight.position.set(200,160,85)
    spotLight.castShadow=true
    scene.add(spotLight)

    var threeOnEvent = new THREE.onEvent(scene,camera);

    plane()
    wall()
    room()
    //cube()
    //sphere()
    //cylinder()
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    function onMouseClick( event ) {
        //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        // 通过鼠标点的位置和当前相机的矩阵计算出raycaster
        raycaster.setFromCamera( mouse, camera );
        // 获取raycaster直线和所有模型相交的数组集合
        var intersects = raycaster.intersectObjects( scene.children );
        if(intersects.length>0&&intersects[0].object.geometry.type==="BoxGeometry"){
            $(".main").empty();
            var html=`<div id="roomTopo" class="roomTopo"></div>`
            $(".main").html(html)
            mainTopo()
            renderTopo()
        }
    }
    window.addEventListener( 'click', onMouseClick, false );
}

window.render=function(){
    delta = clock.getDelta();
    orbitControls.update(delta);
    requestAnimationFrame(render);
    renderer.render(scene,camera)
}
function plane(){
    var planeGeo=new THREE.PlaneGeometry(300,300,100,100)
    var planeMat=new THREE.MeshLambertMaterial({color:0x666666,wireframe:false})
    var planeMesh=new THREE.Mesh(planeGeo,planeMat)
    planeMesh.position.set(0,0,40)
    planeMesh.receiveShadow=true
    planeMesh.rotation.x=-0.5*Math.PI
    scene.add(planeMesh)
}
//外墙
function wall(){
    var material=new THREE.MeshLambertMaterial({color:'#efefef'})
    var material=new THREE.MeshLambertMaterial({color:'#efefef'})

    var wall1=new THREE.BoxGeometry(150,80,10);//正面
    var wallMesh1=new THREE.Mesh(wall1,material)
    wallMesh1.position.set(0,40,-20)
    wallMesh1.on('click',function(m) {
        m.scale.set(2,2,2); // m指向mesh
    })
    scene.add(wallMesh1)
    

    var wall2=new THREE.BoxGeometry(150,80,10);//反面
    var wallMesh2=new THREE.Mesh(wall2,material)
    wallMesh2.position.set(0,40,120)
    scene.add(wallMesh2)

    var wall3=new THREE.BoxGeometry(10,80,150);//左面
    var wallMesh3=new THREE.Mesh(wall3,material)
    wallMesh3.position.set(-75,40,50)
    scene.add(wallMesh3)

    //墙
    var wall4=new THREE.BoxGeometry(10,80,150);//右面
    var wallMesh4=new THREE.Mesh(wall4,material)
    wallMesh4.position.set(95,40,50)

    //窗户
    var wall5=new THREE.BoxGeometry(30,40,60);//右面
    var wallMesh5=new THREE.Mesh(wall5,material)
    //wallMesh5.position.set(20,0,40)
    
    var sphere1BSP=new ThreeBSP(wall4)
    var cubeBSP=new ThreeBSP(wall5)
    
    resultBSP=sphere1BSP.subtract(cubeBSP)//设置差集
    result=resultBSP.toMesh()//从BSP对象内获取到处理完后的mesh模型数据
    //更新模型的面和顶点的数据
    result.geometry.computeFaceNormals()
    result.geometry.computeVertexNormals()
    //重新复制文理
    result.material = material;
    //设置位置
    result.position.set(75,40,50)
    scene.add(result)
}
//机房
function room(){
    var material=new THREE.MeshLambertMaterial({color:'#162C9B'})
    var room1=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh1=new THREE.Mesh(room1,material)
    roomMesh1.position.set(-50,40,0)
    scene.add(roomMesh1)
    
    var room2=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh2=new THREE.Mesh(room2,material)
    roomMesh2.position.set(-50,40,20)
    scene.add(roomMesh2)

    var room3=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh3=new THREE.Mesh(room3,material)
    roomMesh3.position.set(-50,40,40)
    scene.add(roomMesh3)

    var room4=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh4=new THREE.Mesh(room4,material)
    roomMesh4.position.set(-50,40,60)
    scene.add(roomMesh4)

    var room5=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh5=new THREE.Mesh(room5,material)
    roomMesh5.position.set(0,40,0)
    scene.add(roomMesh5)

    var room6=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh6=new THREE.Mesh(room6,material)
    roomMesh6.position.set(0,40,20)
    scene.add(roomMesh6)

    var room7=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh7=new THREE.Mesh(room7,material)
    roomMesh7.position.set(0,40,40)
    scene.add(roomMesh7)

    var room8=new THREE.BoxGeometry(20,80,10);//正面
    var roomMesh8=new THREE.Mesh(room8,material)
    roomMesh8.position.set(0,40,60)
    scene.add(roomMesh8)
}
function cube(){
    var cubeGeo=new THREE.CubeGeometry(20,20,20,5,5,5)
    var cubeMat=new THREE.MeshLambertMaterial({color:0x003300,wireframe:false})
    var cubeMesh=new THREE.Mesh(cubeGeo,cubeMat)
    cubeMesh.position.set(20,10,0)
    cubeMesh.castShadow=true
    cubeMesh.receiveShadow=true
    scene.add(cubeMesh)
}
function sphere(){
    var sphereGeo=new THREE.SphereGeometry(16,40,40)
    var sphereMat=new THREE.MeshLambertMaterial({color:0x0000ff,wireframe:false})
    var sphereMesh=new THREE.Mesh(sphereGeo,sphereMat)
    sphereMesh.position.set(-25,10,0)
    sphereMesh.castShadow=true
    sphereMesh.receiveShadow=true
    scene.add(sphereMesh)
}
