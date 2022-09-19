function init() {
    let name = 'John';
    function getName(){
        var name = 'Smith';
        console.log('A:' + name);}
    console.log('B: ' + name);
    getName();
}
init();
console.log('C:' + name);
