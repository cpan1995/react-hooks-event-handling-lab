// Code EyesOnMe Component Here
export default function EyesOnMe(){
    function blurFunction(){
        console.log('Hey! Eyes on me!')
    }
    function focusFunction(){
        console.log('Good!')
    }
    return(
        <button
            onFocus= {focusFunction}
            onBlur = {blurFunction}
        >Eyes on me</button>
    )
}