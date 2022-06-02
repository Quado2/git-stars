export function getLast30Days():string{
  const last30 = new Date().getTime() - 30*24*60*60*100;
  const thirtyDaysAgo = new Date(last30);
  const year = thirtyDaysAgo.getFullYear();
  let month: number | string = thirtyDaysAgo.getMonth() + 1;
  month = month > 9 ? month : `0${month}`
  const day = thirtyDaysAgo.getUTCDate();
  
  return `${year}-${month}-${day}`
}

export function getDaysAgo(date: string){
  return Math.floor((new Date().getTime() - new Date(date).getTime())/(24*60*60*100));
}