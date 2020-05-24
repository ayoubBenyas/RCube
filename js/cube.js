export default class Cube extends THREE.Mesh{
    constructor(color){
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        /*Right of spawn face*/
        geometry.faces[0].color = new THREE.Color(color.right);   geometry.faces[1].color = new THREE.Color(color.right);
        /*Left of spawn face*/
        geometry.faces[2].color = new THREE.Color(color.left);    geometry.faces[3].color = new THREE.Color(color.left);
        /*Above spawn face*/
        geometry.faces[4].color = new THREE.Color(color.up);      geometry.faces[5].color = new THREE.Color(color.up);
        /*Below spawn face*/
        geometry.faces[6].color = new THREE.Color(color.down);    geometry.faces[7].color = new THREE.Color(color.down);
        /*Spawn face*/
        geometry.faces[8].color = new THREE.Color(color.front);   geometry.faces[9].color = new THREE.Color(color.front);
        /*Opposite spawn face*/
        geometry.faces[10].color = new THREE.Color(color.back);   geometry.faces[11].color = new THREE.Color(color.back);
        
        let material = new THREE.MeshBasicMaterial( {color: 0xffffff, vertexColors: THREE.FaceColors} );
        
        super( geometry, material );
        this.selfPosition = this.position.clone();
        
        // wireframe

        var geo = new THREE.EdgesGeometry( this.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 'purple', linewidth: 4} );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        
        this.add( wireframe );
    }
}