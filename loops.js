// for loop
function house(){
       for (let rent = 500; rent < 510; rent++) {
        console.log(rent);
        
        
       }

}
house();

//for loop
const gold =()=>{
     for (let price = 8000; price <=8005; price++) {
        console.log(price);
        
        
     }

}
gold();

//while loop
const dell=()=>{
    acer=106
    lenovo=100
       while (lenovo<acer) {
        console.log(lenovo);
        lenovo++
       
       }
}
dell();

//while loop---------  //cotton++ it's an stop condition?
const saree=()=>{
    cotton =600
    silk = 610

    while (cotton<silk) {
       
        cotton++
        console.log(cotton);
        
    }
}
saree();

//do while
const dress=()=>{
      moni=10
      aarthi=15
      do {
        moni++
        console.log(moni);
      
        
      } while (moni<aarthi);

}
dress();

//for of
const snow=()=>{
    let computer="123456789";
    for (const mouse of computer) {
       console.log(mouse,[mouse]);       
    }
}
snow();

const red=()=>{
   let colour=[35,55,36,25];
   for (const green of colour) {
    console.log(green);       
   }
}
red();

//for in
let details={
       Name:"rose",
       age:18,
       location:"Chennai"
}
        for (const store in details) {
           console.log(store,":",details[store]);
           
        
        }
  

//class object---class(B.P)---method---object(create)

        class ring {
         constructor(size,design) {
            this.size=size;
            this.design=design
            
         }
         //method
         outcome(){
            return( "my ring size is number 7"+(this.size)+"The design are attractive"+(this.design))

        }
        
      }
      //object
      const box1=new ring ("old model",2500);
      const box5=new ring("new model",5000)
      console.log(box1.outcome());
      console.log(box5.outcome());
      

