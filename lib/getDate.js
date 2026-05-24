export default function getDate() {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')

    return hora
}