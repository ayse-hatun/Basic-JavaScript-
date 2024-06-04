// FOR -IN LOOP
let student={
    name:"ayse Hanim",
    age:20,
    gender:"female",
    cgpa:3.74,
    ispass:true,
  };
  for(let key in  student){
    console.log("keys:",key,"values:",student[key]);
  }
  console.table(student); 
  // this is to put object data in tabular form.
  // SPECIAL STRING:TEMPLATE LITERATE
  let str4=`you have ${70} as ${false}`;
  console.log(str4);
  let bscs={
    isl:34,
    urdu:34,
    digi:"iops",
    jam:"poplo",
  };
  for(let i in bscs){
    console.log(i);
  
  
  };
  for(let isl in bscs){
    console.table(bscs);}
  let name="ayse";
  let name2="zainab";
  let str="hanim";
  let str2="ni there is no miss map happen map";
  console.log(name.concat(name2));    /*concatenate the strings values  */
  console.log(name2.replace("i","n"));  /*replace character value from string on the basis of characters (searchvalue,newvalue)*/
  console.log(name.charAt(3));  /*returns character value from string on the basis of index value*/
  
  