import fastify from "fastify"
import cors from "@fastify/cors";

const server = fastify({logger:true});

server.register(cors, {
    origin: "*"
})

const teams = [
    {id:1, name: "Ferrari", base: "Maranello, Italy",}, 
    {id:2, name: "Red Bull Racing",base: "Milton Keynes, United Kingdom"},
    {id:3, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id:4, name: "McLaren",base: "Woking, United Kingdom"},
    {id:5, name: "Aston Martin",base: "Silverstone, United Kingdom"},
    {id:6, name: "Alpine",base: "Enstone, United Kingdom"},
    {id:7, name: "Williams",base: "Grove, United Kingdom"},
    {id:8, name: "AlphaTauri",base: "Faenza, Italy"},
    {id:9, name: "Sauber", base:"Hinwil, Switzerland"},
    {id:10, name: "Haas", base: "Kannapolis, USA"},
]

const pilots = [
    {
        id: "1",
        name: "Max Verstappen", 
        team: "Red Bull Racing",
    },
    {
        id: "2",
        name: "Lewis Hamilton", 
        team: "Mercedes",
    },
    {
        id: "3",
        name: "Charles Leclerc", 
        team: "Ferrari",
    },
    {
        id: "4",
        name: "Sergio Perez", 
        team: "Red Bull Racing",
    },
    {
        id: "5",
        name: "Fernando Alonso", 
        team: "Aston Martin",
    },
    {
        id: "6",
        name: "Lando Norris", 
        team: "McLaren",
    },
    {
        id: "7",
        name: "Carlos Sainz", 
        team: "Ferrari",
    },
    {
        id: "8",
        name: "George Russell", 
        team: "Mercedes",
    },
    {
        id: "9",
        name: "Valtteri Bottas", 
        team: "Sauber",
    },
    {
        id: "10",
        name: "Esteban Ocon", 
        team: "Alpine",
    },
    {
        id: "11",
        name: "Valtteri Bottas", 
        team: "Sauber",
    },
    {
        id: "12",
        name: "Pierre Gasly", 
        team: "Alpine",
    },

]

server.get("/teams", async(request, response) =>{
    response.type("application/json").code(200)

    return {teams}
});


server.get("/pilots", async(request, response) =>{
    response.type("application/json").code(200)

    return {pilots}
});
interface PilotsParams{
    id: string;
}

server.get<{Params: PilotsParams}>("/pilots/:id", async(request, response) =>{
    const id = parseInt(request.params.id)
    const pilot = pilots.find((p: any) => p.id === id)

    if(!pilot){
        response.status(404).send("Piloto não encontrado!")
        return;
    }
    response.type("application/json").code(200)
    return {pilot}
});

server.listen({port: 3333}, () => {
    console.log("Servidor inicializado...")
});