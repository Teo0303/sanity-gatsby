export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e25b4e90d66e5a3d12dad66',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-h7h1h4wx',
                  apiId: '9254adfd-5f84-4586-80ef-8a116a88703b'
                },
                {
                  buildHookId: '5e25b4eaf20b9731510401ca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-nzu96w8g',
                  apiId: '36276019-f2c3-4cb8-9a1d-4ddeb66952c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Teo0303/sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-web-nzu96w8g.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
