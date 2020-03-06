const event = {
    guests: [
        { name: 'Tom', age: 17, email: 't@gmail.com' },
        { name: 'Bob', age: 18, email: 'b@gmail.com' }
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email: `${email}`,
                message: `Dear ${name}! ${this.message}`
            }));
    }
}

export { event };