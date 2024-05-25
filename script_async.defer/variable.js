'use strict'

for (let i = 0; i < 11 ; i++) {
    if (i % 2 === 0) {
    console.log(i);
    } else {
    continue;
    }
}
 
for (let i = 0; i < 11 ; i++) {
    if (i > 8) {
        break;
        
    } else {
        console.log(i);
    }
}

