const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.secret_m5wIN0PcbTMPkuaKPReqYi2XGBg1n4H4p4UM2qVb1Gm });

(async () => {
  const databaseId = 'a0195613c3d84fa1bb5f1737d7a48895';
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: 'In stock',
          checkbox: {
            equals: true,
          },
        },
        {
          property: 'Cost of next trip',
          number: {
            greater_than_or_equal_to: 2,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Last ordered',
        direction: 'ascending',
      },
    ],
  });
  console.log(response);
})();