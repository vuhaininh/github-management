export const unLoadRepos = {
   unload:true,
   message:"Please Enter Organization Name to get info"
}

export const loadedRepos =
  [
    {
      owner: {
        id: 234
      },
      id: 1,
      name: "test",
      html_url: 'http://github.com',
      branches: [
        {
          name: 'master'
        },
        {
          name: 'branch 1'
        }
      ],
      language: 'HTML',
      private: false
    },
    {
      id: 2,
      name: "test2",
      html_url: 'http://github.com',
      branches: [
        {
          name: 'master'
        },
        {
          name: 'branch 2'
        }
      ],
      language: 'Javascript',
      private: false
    },
    {
      id: 3,
      name: "test3",
      html_url: 'http://github.com',
      branches: [
        {
          name: 'master'
        },
        {
          name: 'branch 3'
        }
      ],
      language: 'HTML',
      private: false
    },
    {
      id: 4,
      name: "test4",
      html_url: 'http://github.com',
      branches: [
        {
          name: 'master'
        },
        {
          name: 'branch 4'
        }
      ],
      language: 'Ruby',
      private: false
    },
    {
      id: 5,
      name: "test3",
      html_url: 'http://github.com',
      branches: [
        {
          name: 'master'
        },
        {
          name: 'branch 5'
        }
      ],
      language: 'CSS',
      private: true
    }
  ];

  export const owner = '234';
  export const languages = ['HTML','Javascript','Ruby','CSS'];
  export const filter = ['HTML','Javascript']
