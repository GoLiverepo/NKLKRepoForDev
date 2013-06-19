var letterPause = 0.2;
var sound : AudioClip;
 
 
var myText : String = "GoLive Gaming Studios";
 
function Start () {
       
        TypeText();
}
 
function TypeText() {
        for (var letter in myText.ToCharArray()) {
                guiText.text += letter;
                if (sound)
                       audio.PlayOneShot(sound);
                       //AudioSource.PlayClipAtPoint(sound, myTransform.position);
                yield WaitForSeconds (letterPause);
        }              
}