import Cube from "./cube.js";
/**
 * @author Ayoub Benyas / https://github.com/ayoubBenyas
 */
const   ANGLE   = Math.PI/2 ;
const   GREEN   = '#2aa12a';
const   RED     = '#e83431';
const   ORANGE  = '#ff9900';
const   WHITE   = '#f7f5f2';
const   YELLOW  = 'yellow';
const   BLUE    = '#0389ff';
const   HIDDEN  = 'purple';
const   MARGIN  = 1.03;

export default class Rubik extends THREE.Mesh{

    constructor( ){
        let geometry = new THREE.BoxGeometry( 2, 2, 2);
        let material = new THREE.MeshBasicMaterial( { opacity: 0.5, transparent: true} );
        super( geometry, material );
        this.selfPosition = this.position.clone();
        this.allCubes = [];
        this.init();
    }

    setScene = (sn)=>{
        this.scene = sn;
    }

    init = ()=>{
        
        let calcPosition = (code)=>{
            let position = {};
            position.x = (( code - 1 ) % 3 - 1) * MARGIN;
            let y = (code-1) % 9 ;
            position.y = ( y <= 2 )? MARGIN : ( y >= 6 )? -MARGIN : 0;
            position.z = ( code <= 9 )? MARGIN : ( code >= 19 )? -MARGIN : 0;
            return position;
        }
        let calcColor = (pos)=>{ 
            let color = {};
            if( pos.z == MARGIN)
                color.front = GREEN , color.back = HIDDEN;
            else if( pos.z == -MARGIN)
                color.back = BLUE , color.front = HIDDEN;
            else
                color.back = HIDDEN , color.front = HIDDEN;

            if( pos.y == MARGIN)
                color.up = WHITE , color.down = HIDDEN;
            else if( pos.y == -MARGIN)
                color.down = YELLOW , color.up = HIDDEN;
            else 
                color.up = HIDDEN , color.down = HIDDEN;
                
            if( pos.x == MARGIN)
                color.right = RED , color.left = HIDDEN;
            else if( pos.x == -MARGIN)
                color.left = ORANGE , color.right = HIDDEN;
            else
                color.left = HIDDEN , color.right = HIDDEN;
            return color;
        }

        for (let i = 1; i <= 27; i++) {
            let cube ;
            let pos = calcPosition(i);
            let col = calcColor(pos);
            cube = new Cube(col); 
            cube.position.set( pos.x, pos.y, pos.z ); 
            cube.icode = `Cup${i}` ; 
            this.add(cube);
            this.allCubes.push(cube);
        }
        
    }

    //front z
    //back  -z
    //right x
    //left  -x
    //up    y
    //down  -y

    rotate = (callback, cubes)=>{
        var pivot = new THREE.Object3D();
        pivot.position.set( this.position.x, this.position.y, this.position.z);
        pivot.rotation.set(0,0,0);
        pivot.updateMatrixWorld();
        this.scene.add(pivot);

        cubes.forEach((cube)=>{
            pivot.attach( cube );
        });
        
        callback(pivot);
        
        pivot.updateMatrixWorld();
        this.scene.remove(pivot);

        cubes.forEach((cube)=>{    
            cube.updateMatrixWorld();
            cube.selfPosition = cube.position.clone();
            cube.selfPosition.applyMatrix4(pivot.matrixWorld);
            this.scene.attach( cube );
        });
        
    }

    rotateFront = (direction = 1)=>{
        let activeCube = [];
        var origineZ = this.position.z + MARGIN /2;
        
        this.allCubes.forEach((cube)=>{
            if( cube.position.z > origineZ)
                activeCube.push(cube)
        });
        this.rotate((pivot)=>{
            pivot.rotateZ(-direction * ANGLE )
        }
        ,activeCube);
    }

    rotateBack = (direction = 1)=>{
        let activeCube = [];
        var origineZ = this.position.z - MARGIN /2;
        
        this.allCubes.forEach((cube)=>{
            if( cube.position.z < origineZ)
                activeCube.push(cube)
        });
        this.rotate((pivot)=>{
            pivot.rotateZ(direction * ANGLE )}
        ,activeCube);
    }

    rotateRight = (direction = 1)=>{
        let activeCube = [];
        var origineX = this.position.x + MARGIN /2;
        
        this.allCubes.forEach((cube)=>{
            if( cube.position.x > origineX)
                activeCube.push(cube)
        });
        this.rotate((pivot)=>{
            pivot.rotateX(-direction * ANGLE )}
        ,activeCube);
    }

    rotateLeft = (direction = 1)=>{
        let activeCube = [];
        var origineX = this.position.x - MARGIN /2;
        
        this.allCubes.forEach((cube)=>{
            if( cube.position.x < origineX)
                activeCube.push(cube)
        });
        this.rotate((pivot)=>{
            pivot.rotateX(direction * ANGLE )}
        ,activeCube);
    }

    rotateUp = (direction = 1)=>{
        let activeCube = [];
        var origineY = this.position.y + MARGIN /2;
        
        this.allCubes.forEach((cube)=>{
            if( cube.position.y > origineY)
                activeCube.push(cube)
        });
        this.rotate((pivot)=>{
            pivot.rotateY(-direction * ANGLE )}
        ,activeCube);
    }

    rotateDown = (direction = 1)=>{
        let activeCube = [];
        var origineY = this.position.y - MARGIN /2;
        
        this.allCubes.forEach((cube)=>{
            if( cube.position.y < origineY)
                activeCube.push(cube)
        });
        this.rotate((pivot)=>{
            pivot.rotateY(direction * ANGLE )}
        ,activeCube);
    }
  
/************ ************ ************ ************ ************ ************/
    rotateX = (direction = 1)=>{
        this.rotate((pivot)=>{
            pivot.rotateX(direction * ANGLE )}
        ,this.allCubes);
    }

    rotateY = (direction = 1)=>{
        this.rotate((pivot)=>{
            pivot.rotateX(direction * ANGLE )}
        ,this.allCubes);
    }

    rotateZ = (direction = 1)=>{
        this.rotate((pivot)=>{
            pivot.rotateX(direction * ANGLE )}
        ,this.allCubes);
    }
}