export function getTime (){
    
const hour = new Date().getHours();

if (hour >=6 && hour<12) return "morning";
if (hour >=12 && hour<18) return "day";
if (hour >=18 && hour<23) return "evening";
return "night";


}
