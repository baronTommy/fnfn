module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // 成功
        // parserOpts: {
        //   headerPattern: /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
        //   headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
        // },
        

        parserOpts: {
          "headerPattern": "^:(\\w+): \\s(.*)$",
          "headerCorrespondence": [ "type", "subject" ],
        },
        "releaseRules": [
          {
            "type": "adhesive_bandage",
            "release": "patch",
          },
          {
            "type": ":adhesive_bandage:",
            "release": "major",
          },
          {
            "type": "adhesive_bandage:",
            "release": "major",
          },

          {
            "type": ":adhesive_bandage",
            "release": "minor",
          },
        ]
      },
    ],
  ],
};


