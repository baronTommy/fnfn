module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // "parserOpts": {
        //   "headerPattern": "^:(\\w+): \\s(.*)$",
        //   "headerCorrespondence": [ "type", "subject" ],
        // },
        parserOpts: {
          headerPattern: /^(?::\w*:|(?:\ud83c[\udf00-\udfff])|(?:\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55])\s(?<type>\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))\s?(?<ticket>#\d*)?$/,
          headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
        },
        // releaseRules: [
        //   {
        //     type: "art",
        //     release: "major",
        //   },
        //   {
        //     type: ":art:",
        //     release: "patch",
        //   },
        // ],

        // releaseRules: [
        //   // major
        //   { type: "feat", release: "major" },

        //   // minor
        //   { type: "customValue1", release: "minor" },

        //   // patch
        //   { type: "perf", release: "patch" },
        //   { type: "fix", release: "patch" },
        //   { type: "refactor", release: "patch" },
        // ],
      },
    ],
  ],
};


