import { createContext } from "react";



const CompanyDeliveryContext = createContext({
    name: null, //Se colocan null porqu aun desconocemos su informacion
    days: null
});

export default CompanyDeliveryContext;

