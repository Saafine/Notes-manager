import axios from 'axios';

class userFoldersCLASS {
  constructor () {
    this.inside = [];
  }

  fetchNewData (arg) {
    this.inside = arg;
  }
}

const userFoldersAJAX = () => {
  return axios.post('http://saafine.pe.hu/php/fetchFolders.php', { // !todo fix this
    userID: '0' // !todo fix this
  })
    .then(function (response) {
      console.log('data fetched', response.data);
      return (response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const userFolders = [
  {
    id: '0',
    title: 'Trash',
    link: 'trash',
    timestamp: '0',
    content: [
      {
        noteID: '9',
        noteTitle: 'I was trashed',
        noteTimestamp: '9'
      }
    ]
  },
  {
    id: '1',
    title: 'Cats',
    link: 'cats',
    timestamp: '2',
    content: [
      {
        noteID: '1',
        noteTitle: 'CAT NOTE 1',
        noteTimestamp: '1'
      },
      {
        noteID: '4',
        noteTitle: 'CAT NOTE 2',
        noteTimestamp: '2'
      },
      {
        noteID: '6',
        noteTitle: 'CAT NOTE 3',
        noteTimestamp: '3'
      }
    ]
  },
  {
    id: '2',
    title: 'Mouses',
    link: 'mouses',
    timestamp: '1',
    content: [
      {
        noteID: '2',
        noteTitle: 'MOUSE NOTE 1',
        noteTimestamp: '4'
      },
      {
        noteID: '3',
        noteTitle: 'MOUSE NOTE 2',
        noteTimestamp: '5'
      },
      {
        noteID: '5',
        noteTitle: 'MOUSE NOTE 3',
        noteTimestamp: '6'
      }
    ]
  },
  {
    id: '3',
    title: 'Dogs',
    link: 'dogs',
    timestamp: '3',
    content: [
      {
        noteID: '7',
        noteTitle: 'DOG NOTE 1',
        noteTimestamp: '7'
      },
      {
        noteID: '8',
        noteTitle: 'DOG NOTE 2',
        noteTimestamp: '8'
      }
    ]
  },
  {
    id: '4',
    title: 'Good things',
    link: 'good-things',
    timestamp: '4',
    content: []
  }
];

module.exports = {
  userFolders: userFolders,
  userFoldersAJAX: userFoldersAJAX,
  userFoldersCLASS: userFoldersCLASS
};