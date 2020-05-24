"use strict"

export default class App extends THREE.WebGLRenderer{
    constructor(){
        super();
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( "#232323");
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        this.setSize( window.innerWidth, window.innerHeight );
        this.camera.position.z = 5;
        this.orbitControl = new THREE.OrbitControls(this.camera, this.domElement);
        document.addEventListener("mousewheel", onDocumentMouseWheel, false );
    }
    
    
    add = (rub)=>{
        this.scene.add(rub);
        this.rubik = rub;
        rub.setScene(this.scene);
    }

    animate = ()=> {
        requestAnimationFrame( this.animate );
        
        //CUBE.rotation.x += .001;
        //CUBE.rotation.y += .001;
        
        //TODO: add a spotlight that takes the orbitcontrols into account to stay "static"
        
        /*** Camera controls ***/
        this.render( this.scene, this.camera );
    };
    
    moveHandler = (code, cc)=>{
        switch (true) {
            
            case "0" == code: // Set rotation
            case "0'" == code: 
                toast('Reset rotation', "-" ), this.rubik.rotation.set( 0, 0, 0);
            break;

            case "U"  == code: // Up
                    toast('Up', "U" ) , this.rubik.rotateUp();
                break;
            
            case "U'"  == code: // Up Inverse
                    toast('Up Inverse', "U'" ) , this.rubik.rotateUp(-1);    
                break;

            case "D"  == code: // Down
                    toast('Down', "D" ) , this.rubik.rotateDown();
                break;

            case "D'"  == code: // Down i
                    toast('Down Inverse', "D'" ) , this.rubik.rotateDown(-1);
                break;

            case "R"  == code: // Right
                    toast('Right', "R" ) , this.rubik.rotateRight();
                break;
            case "R'"  == code: //Right i
                    toast('Right Inverse', "R'" ) , this.rubik.rotateRight(-1);
                break;

            case "L"  == code: // Left
                    toast('Left', "L" ) , this.rubik.rotateLeft();
                break;

            case "L'"  == code: // Left i
                    toast('Left Inverse', "L'" ) , this.rubik.rotateLeft(-1);
                break;

            case "F"  == code: // Front
                    toast('Front', "F" ) , this.rubik.rotateFront();
                break;

            case "F'"  == code: //Front i
                    toast('Front Inverse', "F'" ) , this.rubik.rotateFront(-1);
                break;

            case "B"  == code: // Back
                    toast('Back', "B" ) , this.rubik.rotateBack();
                break;
            
            case "B'"  == code: // Back i
                    toast('Back Inverse', "B'" ) , this.rubik.rotateBack(-1);
                break;

            case "X"  == code: // XX
                    toast('XX', "X" ) , this.rubik.rotateX();
                break;

            case "X'"  == code: // XX i
                    toast('XX Inverse', "X'" ) , this.rubik.rotateX(-1);
                break;

            case "Y"  == code: // YY
                    toast('YY', "Y" ) , this.rubik.rotateY();
                break;

            case "Y'"  == code: // YY i
                    toast('YY Inverse', "Y'" ) , this.rubik.rotateY(-1);
                break;

            case "Z"  == code: // ZZ
                    toast('ZZ', "Z" ) , this.rubik.rotateZ();
                break;
            
            case "Z'"  == code: // ZZ i
                    toast('ZZ Inverse', "Z'" ) , this.rubik.rotateZ(-1);
                break;

            default:
                break;
        }
    }

}



function toast(move, code){
    M.toast({html: `<span>${move}</span><button class="btn-flat toast-action">(${code})</button>`});
}

function onDocumentMouseWheel( event ) {

    var fovMAX = 160;
    var fovMIN = 1;

    camera.fov -= event.wheelDeltaY * 0.05;
    camera.fov = Math.max( Math.min( camera.fov, fovMAX ), fovMIN );
    camera.projectionMatrix = new THREE.Matrix4().makePerspective(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);

}