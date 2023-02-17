const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'aggie',
    email: 'aggie@mail.com',
    phone: '132212332',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
