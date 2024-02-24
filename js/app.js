let empDetails = [
    {id:1,name:"Roger",salary:50000,Bonus:1000,appraisal:80},
    {id:2,name:"David",salary:55000,Bonus:1000,appraisal:70},
    {id:3,name:"Alison",salary:65000,Bonus:1000,appraisal:90},
    {id:4,name:"Anthony",salary:70000,Bonus:1000,appraisal:95},
    {id:5,name:"Kristen",salary:80000,Bonus:1000,appraisal:98},
];

function arrangeEmpDetails(data)
{
  return data.sort((a, b) => a.name.localeCompare(b.name));
}

 let sortedemp = arrangeEmpDetails(empDetails)
 console.log(sortedemp);

const displayEmp = empDetails.map((emp)=>{
   return emp.id + "----" + emp.name + "----" + emp.salary
})

  console.log(displayEmp);

const totalsal = empDetails
.filter(emp => emp.name.startsWith('A'))
.reduce((total,emp)=> (total) + (emp.salary) + (emp.Bonus),0);

 console.log(totalsal);

let maxappraisalscore = empDetails.reduce((max,emp)=> emp.appraisal > max? emp.appraisal:max,0);

function getAppraisalPct(maxappraisalscore) {
  return new Promise((resolve, reject) => {
      if (maxappraisalscore >= 100) {
          resolve('20% hike to be given');
      } else if (maxappraisalscore > 90 && maxappraisalscore < 100) {
          resolve('10% hike to be given');
      } else if (maxappraisalscore > 85 && maxappraisalscore <= 90) {
          resolve('5% hike to be given');
      } else {
          resolve('Unfortunately, you are not eligible for a hike');
      }
  });
}


module.exports = {
    arrangeEmpDetails,
    getAppraisalPct,
};