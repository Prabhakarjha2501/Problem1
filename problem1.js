function letterCount(str) {
    str = str.replace(/\s+/g, "").toUpperCase();
    const count ={};

       const result = [];

       const seen = new Set();

       for(let char of str){
            if(!count[char]){
                count[char]=0 ;
            }
            count[char]++;
        }

        for (let char of str){
            if(!seen.has(char)){
                seen.add(char);
                result.push(`${char}-${count[char]}  `);
            }
        }

       return result.join("");
    }

    const inputstring ="Chinmay Kulkarni";

     const output = letterCount(inputstring);
    
    console.log(output)

