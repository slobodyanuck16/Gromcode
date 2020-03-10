function withdraw(clients, balances, client, amount) {
    clients.forEach(el => {
        if (clients[el] == client) {
            if (balances[el] > amount) {
                return balances[el] -= amount
            } else {
                return -1
            }
        }
    })
}
