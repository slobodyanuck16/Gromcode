let bool = true;
let contacts = [{
        name: 'Adel',
        phoneNumber: '111-11-11',
    },
    {
        name: 'Vlad',
        phoneNumber: '222-222-222',
    },
    {
        name: 'Nikita',
        phoneNumber: '77-77-77',
    },
    {
        name: 'Artem',
        phoneNumber: '13-13-13',
    },
]

const sortContacts = (contacts, bool) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    const result = contacts
    .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
    if (bool == false) {
        contacts.sort((a, b) => {
            return b.name.localeCompare(a.name);
        });

    }
    return result;
}
console.log(sortContacts(contacts, bool));