function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log("count is :", count);
    }
    return inner;
}
const fn = outer();
fn();
fn();
fn();
fn();