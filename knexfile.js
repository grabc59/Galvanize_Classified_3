// Update with your config settings.

module.exports = {
  development: { 
    client: 'pg',
    connection: 'postgres://localhost/galvanize_classified_dev'
  },
  test: { 
    client: 'pg',
    connection: 'postgres://localhost/galvanize_classified_test'
  },
  production: { 
    client: 'pg',
    connection: 'postgres://vhqanooxzvhlqv:065cf8b07ed44628fd5b8273775766e5765b24cc52b1eac0177faf741c6f48e5@ec2-54-235-120-27.compute-1.amazonaws.com:5432/dfurbv7a35v5h0'
  }
};
