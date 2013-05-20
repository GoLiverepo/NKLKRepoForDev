/*static var uvAnimationTileX = 0; //Here you can place the number of columns of your sheet. 
                           //The above sheet has 24
 
static var uvAnimationTileY = 0; //Here you can place the number of rows of your sheet. 
                          //The above sheet has 1
static var framesPerSecond = 0;

static var colFrameStart = 0;

static var rowFrameStart = 0;

static var toatalFrames = 0;

static var gmeobj : GameObject;*/
function Update(){
//anicont(uvAnimationTileX,uvAnimationTileY,colFrameStart,rowFrameStart,toatalFrames,framesPerSecond,gmeobj);
} 
function anicont (uvAnimationTileX: int,uvAnimationTileY: int,colFrameStart: int, rowFrameStart: int,totalFrames : int,framesPerSecond: float, gmeobj : GameObject) {
 
	// Calculate index
	var index : int = Time.time * framesPerSecond;
	// repeat when exhausting all frames
	index = index % totalFrames;//(uvAnimationTileX * uvAnimationTileY);
 
	// Size of every tile
	var size = Vector2 (1.0 / uvAnimationTileX, 1.0 / uvAnimationTileY);
 
	// split into horizontal and vertical index
	var uIndex = index % uvAnimationTileX;
	var vIndex = index / uvAnimationTileX;
 
	// build offset
	// v coordinate is the bottom of the image in opengl so we need to invert.
	var offset = Vector2 ((uIndex+colFrameStart) * size.x, 1.0 - size.y - (vIndex+rowFrameStart) * size.y);
 
	gmeobj.renderer.material.SetTextureOffset ("_MainTex", offset);
	gmeobj.renderer.material.SetTextureScale ("_MainTex", size);
}