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
    connection: 'postgres://rahfveyoqbshvt:3bf7f8889e5e59202700f0c975f28e152e7657b4cbcf4cbe1482284b723766a7@ec2-54-225-71-119.compute-1.amazonaws.com:5432/dbks639cnca8mt'
  }
};
