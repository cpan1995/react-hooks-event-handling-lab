// Code Keypad Component Here
export default function Keypad(){
    function keyPadEnter(event){
        console.log('Entering password...');
    }
    return(
        <input 
            type="password"
            onChange = {keyPadEnter}
        />
    )
}