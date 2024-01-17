export const validate =(email,pass)=>{

    const Vemail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const Vpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pass);
    if(!Vemail){
        return "Email is Not valid";
    }
    if(!Vpass){
        return "Pass is Not valid";
    }

}