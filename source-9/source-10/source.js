//welcome

//to the SRC digital treasure hunt.

//call it the SRC challenge

//you found the correct source.

// now find the clue


let main = ()=>{
    let {dumb, dummy, dummer} = init()
    //you are not dumb, these are just dummy variables ;)
    confusios(confusion, dumb, dummy, dummer)

}

function confusios(what, is, the, clue){
    what(is, the, clue)
}


function confusion(abcd,abcdef,abdefg={}){
    let clue = [{}]
    
    clue.push(abcd.abc, abcdef.abcdefg)   
    if(abdefg){
        clue.push(abdefg.abcd)
    }
    else{
        clue.pop()
    }
    if(!!!abcd){
        clue.pop()
        clue.push('https://francois-gr.github.io/Visual-Sorting-education/')

    }
    else{
        if(!abcdef){
            clue.push((abcd)?'https://francois-gr.github.io/Visual-Sorting-education/':'https://francois-gr.github.io/Snake/')
        }
    }    

}



function init(){
    return {
        'dumb': {
            abc: 'https://'
        } ,
        'dummy': {
            abcdefg:'same link domain'
        },
        'dummer':{
            abcd:'stage + "x+1" '
        }

    }
}



main()