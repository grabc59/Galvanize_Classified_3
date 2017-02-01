
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classifieds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classifieds').insert({
          id: 1,
          title:'NES Classic',
          description:'I got lucky and found it, and decided to charge 10x what it was worth.',
          price:600,
          item_image:'http://www.nintendo.com/images/page/nes-classic/nes-classic-edition-box.png',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id:2,
          title:'Pikachu 9" Plush Stuffed Toy',
          description:'Polyester fiber construction Officially licensed.',
          price:10,
          item_image:'https://images-na.ssl-images-amazon.com/images/I/41VwGotRZsL._SY300_.jpg',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 3,
          title: 'The McPoyles',
          description: 'Stuff',
          price: 1,
          item_image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3sw-91Lv4vz_AWrfHu4penySCUhyrt7RikuHDXmsSFkW8aZbErA',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 4,
          title: 'Charlie',
          description: 'night crawlers',
          price: 20,
          item_image: 'https://media4.giphy.com/media/yTVXxrWIf0DsI/200.gif#16',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 5,
          title: 'Mac',
          description: 'Ocular patdown',
          price: 50,
          item_image: 'https://media.giphy.com/media/EgvHKApzL5OeI/giphy.gif',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),
        knex('classifieds').insert({
          id: 6,
          title: 'Dennis Reynolds',
          description: 'The implication',
          price: 1,
          item_image: 'http://37.media.tumblr.com/78a12ad245b484781b647f47b2fa4126/tumblr_n5ie6pXhvC1qgr0y2o1_250.gif',
          created_at: '2016-06-26T14:26:16.000Z',
          updated_at: '2016-06-26T14:26:16.000Z'
        }),

      ])
      .then(() => {
        return knex.raw(
          "SELECT setval('classifieds_id_seq', (SELECT MAX(id) FROM classifieds));"
        );
      });
    });
};
