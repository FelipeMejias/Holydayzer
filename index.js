import express from 'express'
import cors from 'cors'
import dayjs from 'dayjs'
const dataHoje=dayjs().format()
const dia=parseInt(dataHoje[8]+dataHoje[9])
const mes=parseInt(dataHoje[5]+dataHoje[6])
console.log(dataHoje)
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];
const datasFeriado=holidays.map((objeto)=>{
    const lista=objeto.date.split('/')
    return {dia:parseInt(lista[1]),mes:parseInt(lista[0])}
})
const app=express()
app.use(cors());
app.get('/holydays',(request,response)=>{
    
    response.send(holidays)
})
app.get('/is-today-holiday',(request,response)=>{
    let eFeriado=false
    for(let k=0;k<datasFeriado.length;k++){
        if(datasFeriado[k].mes === mes && datasFeriado[k].dia === dia){eFeriado=true}
    }
    
    response.send(eFeriado)
})
app.listen(5000)