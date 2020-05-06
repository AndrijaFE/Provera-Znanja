const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("query-string");
let Artikal=[
    {
        "id":1,
        "naziv":"Keks",
        "cena":100,
        "imeKompanija":"nekatamo"
    },
    {
        "id":2,
        "naziv":"sok",
        "cena":50,
        "imeKompanija":"nestotamo"
    }
];

const server=http.createServer(function(req,res){
    let urlObj=url.parse(req.url,true,false);
    if(req.method=="GET"){
        

    }
    if(req.method=="POST"){
        
        
    }


});

function Artikal(imeKompanija){
    for(let i=0;i<Artikal.length;i++){
        if(Artikal[i].imeKompanija == imeKompanija){
            return Artikal[i];
        }
    }
}

function Artikal(id,naziv,cena,imeKompanija){
    let noviArtikal={
        "id":1,
        "naziv":"Novi keks",
        "cena":200,
        "imeKompanija":"nekatamokompanija"
    };
    Artikal.push(noviArtikal);
}

function izmeniArtikal(id,naziv,cena,imeKompanija){
 
}

function obrisiArtikal(id){
    let pom=[];
    for(let i=0;i<Artikal.length;i++){
        if(Artikal[i].id != id){
            pom.push(Artikal[i]);
        }
    }
    Artikal=pom;
    return Artikal;
}

const host="localhost";
const port=5001;
server.listen(port,host);
console.log(`Server radi na: http://${host}:${port}`);