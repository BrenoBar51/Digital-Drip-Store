import { useState } from "react"

export default function UsersPedidos() {
    const [nome, setNome] = useState("Antony Kleber Lima")
    const [CPF, setCPF] = useState("093.124.764.87")
    const [email, setEmail] = useState("TalyssonLoucuras@gaymail.com")
    const [cell, setCell] = useState("(85) 4002-8922")
    const [adress, setAdress] = useState("Rua João Pessoa, 333")
    const [Bairro, setBairro] = useState("Centro")
    const [Cidade, setCity] = useState("Fortaleza, Ceará")
    const [CEP, setCEP] = useState("433-8800")        
    
    const user = { nome, email, CPF, cell, adress, Bairro, Cidade, CEP }

    return { user }
}